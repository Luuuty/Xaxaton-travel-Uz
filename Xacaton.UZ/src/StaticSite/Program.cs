using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Web;
using System.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Serve index.html + static assets from wwwroot
app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/api/stats", async () =>
{
    const string feedUrl = "https://api.phishstats.info/api/phishing?_size=100&_sort=-id";
    try
    {
        using var client = new HttpClient();
        var json = await client.GetStringAsync(feedUrl);
        using var doc = JsonDocument.Parse(json);

        var now = DateTime.UtcNow;
        var cutoff = now.AddHours(-24);
        var phishing24h = 0;

        foreach (var item in doc.RootElement.EnumerateArray())
        {
            if (item.TryGetProperty("date", out var dateProp) &&
                DateTime.TryParse(dateProp.GetString(), out var dt) &&
                dt.ToUniversalTime() >= cutoff)
            {
                phishing24h++;
            }
        }

        var payload = new
        {
            phishing24h,
            fetchedAt = now
        };

        return Results.Ok(payload);
    }
    catch
    {
        return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
    }
});

// Minimal mock API for UI interactions
app.MapGet("/api/health", () =>
{
    var payload = new
    {
        status = "ok",
        timestamp = DateTime.UtcNow
    };
    return Results.Ok(payload);
});

app.MapPost("/api/scan", (ScanRequest request) =>
{
    var random = Random.Shared;
    var baseScore = request.ThreatType?.ToLower() switch
    {
        "ransomware" => 70,
        "deepfake" => 55,
        _ => 60
    };

    var noise = random.Next(-12, 18);
    var score = Math.Clamp(baseScore + noise, 15, 98);

    var recommendation = score >= 75
        ? "Escalate to SOC L2 and isolate the affected asset."
        : score >= 50
            ? "Increase monitoring and validate the identity channel."
            : "Keep under observation; no immediate action.";

    var response = new
    {
        score,
        severity = score >= 75 ? "high" : score >= 50 ? "medium" : "low",
        recommendation,
        received = request.Url ?? request.Filename ?? "n/a"
    };

    return Results.Ok(response);
});

app.MapPost("/api/scan/reputation", async (ScanRequest request) =>
{
    if (string.IsNullOrWhiteSpace(request.Url))
        return Results.BadRequest(new { error = "url required" });

    var uriOk = Uri.TryCreate(request.Url, UriKind.Absolute, out var uri);
    if (!uriOk || uri == null || string.IsNullOrEmpty(uri.Host))
        return Results.BadRequest(new { error = "invalid url" });

    var encoded = HttpUtility.UrlEncode(uri.Host);
    // Pull a recent slice and check host matches
    const string feedUrl = "https://api.phishstats.info/api/phishing?_sort=-id&_size=300";

    try
    {
        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(10) };
        var json = await client.GetStringAsync(feedUrl);
        using var doc = JsonDocument.Parse(json);

        var cutoff = DateTime.UtcNow.AddDays(-7);
        var hits = 0;

        foreach (var item in doc.RootElement.EnumerateArray())
        {
            var urlProp = item.TryGetProperty("url", out var u) ? u.GetString() : null;
            if (urlProp == null) continue;
            if (!Uri.TryCreate(urlProp, UriKind.Absolute, out var feedUri)) continue;
            if (!string.Equals(feedUri.Host, uri.Host, StringComparison.OrdinalIgnoreCase)) continue;

            if (item.TryGetProperty("date", out var dateProp) &&
                DateTime.TryParse(dateProp.GetString(), out var dt) &&
                dt.ToUniversalTime() < cutoff)
            {
                continue;
            }

            hits++;
        }

        var score = Math.Clamp(30 + hits * 18, 0, 98);
        var recommendation = hits > 0
            ? "Host appears in recent phishing feed — block and investigate."
            : "No recent phishing hits for this host in feed.";

        return Results.Ok(new
        {
            host = uri.Host,
            hits7d = hits,
            score,
            severity = score >= 75 ? "high" : score >= 50 ? "medium" : "low",
            recommendation
        });
    }
    catch
    {
        return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
    }
});

app.MapPost("/api/scan/url", async (ScanRequest request) =>
{
    if (string.IsNullOrWhiteSpace(request.Url))
        return Results.BadRequest(new { error = "url required" });

    if (!Uri.TryCreate(request.Url, UriKind.Absolute, out var uri) || uri.Host is null)
        return Results.BadRequest(new { error = "invalid url" });

    var host = uri.Host;

    int phishstatsHits7d = 0;
    int urlhausHits = 0;

    // Phishstats check (7d)
    try
    {
        const string feedUrl = "https://api.phishstats.info/api/phishing?_sort=-id&_size=400";
        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(10) };
        var json = await client.GetStringAsync(feedUrl);
        using var doc = JsonDocument.Parse(json);
        var cutoff = DateTime.UtcNow.AddDays(-7);
        foreach (var item in doc.RootElement.EnumerateArray())
        {
            if (item.TryGetProperty("url", out var u) &&
                Uri.TryCreate(u.GetString(), UriKind.Absolute, out var feedUri) &&
                string.Equals(feedUri.Host, host, StringComparison.OrdinalIgnoreCase))
            {
                if (item.TryGetProperty("date", out var dtProp) &&
                    DateTime.TryParse(dtProp.GetString(), out var dt) &&
                    dt.ToUniversalTime() >= cutoff)
                {
                    phishstatsHits7d++;
                }
            }
        }
    }
    catch { }

    // URLhaus host lookup (requires POST)
    try
    {
        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(10) };
        var form = new Dictionary<string, string> { ["host"] = host };
        var resp = await client.PostAsync("https://urlhaus-api.abuse.ch/v1/host/", new FormUrlEncodedContent(form));
        if (resp.IsSuccessStatusCode)
        {
            var json = await resp.Content.ReadAsStringAsync();
            using var doc = JsonDocument.Parse(json);
            if (doc.RootElement.TryGetProperty("urls", out var urls) && urls.ValueKind == JsonValueKind.Array)
            {
                urlhausHits = urls.GetArrayLength();
            }
        }
    }
    catch { }

    var score = Math.Clamp(15 + phishstatsHits7d * 18 + urlhausHits * 22, 1, 98);
    var severity = score >= 75 ? "high" : score >= 50 ? "medium" : "low";

    return Results.Ok(new
    {
        host,
        phishstatsHits7d,
        urlhausHits,
        score,
        severity,
        recommendation = severity switch
        {
            "high" => "Блокировать домен и уведомить SOC L2",
            "medium" => "Добавить в наблюдение, включить URL-фильтрацию",
            _ => "Низкий риск по открытым данным"
        }
    });
});

app.MapPost("/api/analyze", async (AnalyzeRequest request) =>
{
    // Basic live signal: pull recent phishing feed to adjust risk for phishing/deepfake email style attacks
    const string feedUrl = "https://api.phishstats.info/api/phishing?_sort=-id&_size=120";
    int feedCount24h = 0;

    try
    {
        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(10) };
        var json = await client.GetStringAsync(feedUrl);
        using var doc = JsonDocument.Parse(json);
        var cutoff = DateTime.UtcNow.AddHours(-24);
        foreach (var item in doc.RootElement.EnumerateArray())
        {
            if (item.TryGetProperty("date", out var dateProp) &&
                DateTime.TryParse(dateProp.GetString(), out var dt) &&
                dt.ToUniversalTime() >= cutoff)
            {
                feedCount24h++;
            }
        }
    }
    catch
    {
        // If feed fails, keep feedCount24h at 0 and continue with local signals.
    }

    // Scoring model (lightweight, deterministic)
    double score =
        request.Anomaly * 0.35 +
        request.Confidence * 0.30 +
        Math.Min(request.LoginAttempts, 180) * 0.12;

    if (!string.IsNullOrWhiteSpace(request.SignalText))
    {
        var t = request.SignalText.ToLowerInvariant();
        if (t.Contains("password") || t.Contains("пароль") || t.Contains("parol")) score += 10;
        if (t.Contains("urgent") || t.Contains("срочно")) score += 7;
        if (t.Contains("invoice") || t.Contains("счет") || t.Contains("bill")) score += 5;
    }

    if (request.ThreatType?.Equals("ransomware", StringComparison.OrdinalIgnoreCase) == true)
        score += 8;
    if (request.ThreatType?.Equals("deepfake", StringComparison.OrdinalIgnoreCase) == true)
        score += 4;

    // Adjust using live feed
    if (request.ThreatType?.Equals("phishing", StringComparison.OrdinalIgnoreCase) == true && feedCount24h > 0)
    {
        score += Math.Min(15, feedCount24h * 0.25); // up to +15 based on last 24h volume
    }

    var finalScore = Math.Clamp((int)Math.Round(score), 1, 99);
    var severity = finalScore >= 75 ? "high" : finalScore >= 50 ? "medium" : "low";

    var summary = severity switch
    {
        "high" => "Высокая активность угроз: требуется немедленная реакция и изоляция затронутых систем.",
        "medium" => "Обнаружены подозрительные сигналы. Усильте мониторинг и подготовьте план реагирования.",
        _ => "Слабые сигналы, инцидент маловероятен. Продолжайте стандартный мониторинг."
    };

    var explanations = new List<string>
    {
        $"Аномалия трафика: {request.Anomaly}%",
        $"Уверенность модели: {request.Confidence}%",
        $"Подозрительные входы: {request.LoginAttempts}"
    };

    if (feedCount24h > 0)
        explanations.Add($"PhishStats последние 24ч: {feedCount24h} записей");

    var actions = severity switch
    {
        "high" => new[]
        {
            "Изолировать затронутые хосты и блокировать IOC в почтовом шлюзе.",
            "Сбросить пароли пользователей и включить MFA-челленджи.",
            "Оповестить SOC L2 и зафиксировать инцидент в тикет-системе."
        },
        "medium" => new[]
        {
            "Усилить мониторинг и проверить IOC за последние 48 часов.",
            "Включить дополнительную верификацию для подозрительных учёток."
        },
        _ => new[]
        {
            "Продолжить стандартный мониторинг.",
            "Запланировать пересмотр детектов завтра."
        }
    };

    var response = new
    {
        score = finalScore,
        severity,
        summary,
        explanations,
        actions,
        feedCount24h,
        evaluatedAt = DateTime.UtcNow
    };

    return Results.Ok(response);
});

app.MapPost("/api/scan/file", async (HttpRequest httpRequest) =>
{
    var vtApiKey = Environment.GetEnvironmentVariable("VT_API_KEY");
    if (string.IsNullOrWhiteSpace(vtApiKey))
    {
        var keyPath = Path.Combine(AppContext.BaseDirectory, "vt.key");
        if (File.Exists(keyPath))
        {
            vtApiKey = (await File.ReadAllTextAsync(keyPath)).Trim();
        }
    }

    if (string.IsNullOrWhiteSpace(vtApiKey))
        return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);

    if (!httpRequest.HasFormContentType)
        return Results.BadRequest(new { error = "multipart/form-data required" });

    var form = await httpRequest.ReadFormAsync();
    var file = form.Files.FirstOrDefault();
    if (file == null || file.Length == 0)
        return Results.BadRequest(new { error = "file required" });

    // Compute SHA256
    string sha256;
    await using (var stream = file.OpenReadStream())
    {
        using var sha = SHA256.Create();
        var hash = await sha.ComputeHashAsync(stream);
        sha256 = Convert.ToHexString(hash).ToLowerInvariant();
    }

    // Try hash lookup first
    try
    {
        using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(15) };
        client.DefaultRequestHeaders.Add("x-apikey", vtApiKey);
        var resp = await client.GetAsync($"https://www.virustotal.com/api/v3/files/{sha256}");
        if (resp.IsSuccessStatusCode)
        {
            var json = await resp.Content.ReadAsStringAsync();
            using var doc = JsonDocument.Parse(json);
            var stats = doc.RootElement.GetProperty("data").GetProperty("attributes").GetProperty("last_analysis_stats");
            var malicious = stats.TryGetProperty("malicious", out var m) ? m.GetInt32() : 0;
            var suspicious = stats.TryGetProperty("suspicious", out var s) ? s.GetInt32() : 0;
            var harmless = stats.TryGetProperty("harmless", out var h) ? h.GetInt32() : 0;
            var undetected = stats.TryGetProperty("undetected", out var u) ? u.GetInt32() : 0;

            var engines = malicious + suspicious + harmless + undetected;
            var score = Math.Clamp(malicious * 10 + suspicious * 5, 0, 99);
            var severity = score >= 75 ? "high" : score >= 50 ? "medium" : "low";

            return Results.Ok(new
            {
                sha256,
                engines,
                malicious,
                suspicious,
                score,
                severity,
                source = "VirusTotal hash lookup"
            });
        }

        // If not found (404), optionally upload if allowed
        if (resp.StatusCode == System.Net.HttpStatusCode.NotFound)
        {
            var allowUpload = Environment.GetEnvironmentVariable("VT_UPLOAD_ENABLED") == "true";
            if (!allowUpload)
                return Results.Ok(new { sha256, score = 15, severity = "low", source = "VT hash miss (upload disabled)" });

            using var uploadClient = new HttpClient { Timeout = TimeSpan.FromSeconds(120) };
            uploadClient.DefaultRequestHeaders.Add("x-apikey", vtApiKey);
            await using var fileStream = file.OpenReadStream();
            using var content = new MultipartFormDataContent();
            content.Add(new StreamContent(fileStream), "file", file.FileName);
            var uploadResp = await uploadClient.PostAsync("https://www.virustotal.com/api/v3/files", content);
            if (!uploadResp.IsSuccessStatusCode)
                return Results.StatusCode((int)uploadResp.StatusCode);

            return Results.Ok(new { sha256, score = 50, severity = "medium", source = "VT upload queued" });
        }

        return Results.StatusCode((int)resp.StatusCode);
    }
    catch (Exception ex)
    {
        return Results.StatusCode(StatusCodes.Status503ServiceUnavailable);
    }
});

// Fallback so deep links still return the SPA
app.MapFallbackToFile("index.html");

app.Run();

internal record ScanRequest(
    [property: JsonPropertyName("url")] string? Url,
    [property: JsonPropertyName("threatType")] string? ThreatType,
    [property: JsonPropertyName("filename")] string? Filename);

internal record AnalyzeRequest(
    [property: JsonPropertyName("threat")] string ThreatType,
    [property: JsonPropertyName("region")] string Region,
    [property: JsonPropertyName("anomaly")] int Anomaly,
    [property: JsonPropertyName("loginAttempts")] int LoginAttempts,
    [property: JsonPropertyName("confidence")] int Confidence,
    [property: JsonPropertyName("signalText")] string SignalText);
