const translations = {
  ru: {
    brandTag: "AI platform for cyber resilience",
    languageLabel: "Язык",
    heroTitle: "CyberShield AI",
    heroBadge: "Hackathon MVP",
    heroSubtitle: "Платформа для анализа, предсказания и предотвращения киберугроз",
    heroText: "Прототип анализирует фишинг, ransomware и deepfake-сигналы, оценивает риск инцидента и выдает приоритетные действия для SOC-команды.",
    runDemo: "Запустить демо-анализ",
    loadScenario: "Загрузить сценарий атаки",
    exportReport: "Экспорт отчета",
    pointOne: "Мультиязычный интерфейс: русский, узбекский, английский",
    pointTwo: "Explainable AI: понятное объяснение оценки риска",
    pointThree: "Расширяемая архитектура для новых источников данных",
    liveScore: "Live Threat Score",
    riskHigh: "Высокий риск",
    defaultSummary: "Обнаружена аномальная активность в почтовом трафике и попытка запуска подозрительного файла.",
    severityMetric: "Severity",
    confidenceMetric: "Confidence",
    updatedMetric: "Updated",
    analysisLabel: "Threat Analysis",
    analysisTitle: "Анализ события",
    mvpChip: "MVP with open data logic",
    threatType: "Тип угрозы",
    phishing: "Фишинг",
    ransomware: "Ransomware",
    deepfake: "Deepfake",
    sourceRegion: "Регион / источник",
    regionUz: "Узбекистан",
    regionCis: "СНГ",
    regionGlobal: "Глобальный источник",
    anomalyRate: "Аномалия трафика (%)",
    credentialLeaks: "Подозрительные попытки входа",
    aiConfidence: "Уверенность модели (%)",
    signalText: "Текстовый сигнал",
    signalPlaceholder: "Скопируйте сообщение, URL или описание подозрительного события...",
    analyzeBtn: "Оценить риск",
    resetBtn: "Сбросить",
    insightsLabel: "AI Insights",
    insightsTitle: "Результаты анализа",
    criticalThreat: "Критический",
    predictionLabel: "Прогноз инцидента",
    predictionTitleHigh: "Вероятна эскалация в течение 24 часов",
    predictionTextHigh: "Комбинация фишингового контента, всплеска аномалий и высокой уверенности модели указывает на активную фазу атаки.",
    explainabilityLabel: "Explainability",
    actionsLabel: "Рекомендации",
    dataSourcesLabel: "Открытые источники",
    sourceOne: "Kaggle datasets для сетевых аномалий и phishing URLs",
    sourceTwo: "UZCERT / CERT advisories для локального контекста",
    sourceThree: "World Bank digital risk indicators для расширения модели",
    monitoringLabel: "Operational View",
    monitoringTitle: "Лента инцидентов",
    realTimeChip: "Real-time simulation",
    colTime: "Время",
    colType: "Тип",
    colAsset: "Актив",
    colRisk: "Риск",
    colStatus: "Статус",
    architectureLabel: "Scalability",
    architectureTitle: "Архитектура платформы",
    archOneTitle: "1. Ingestion Layer",
    archOneText: "Email, network logs, API-интеграции с CERT и SIEM.",
    archTwoTitle: "2. AI Detection",
    archTwoText: "NLP-анализ текста, правила аномалий, скоринговый движок.",
    archThreeTitle: "3. Decision Engine",
    archThreeText: "Приоритизация инцидентов, рекомендации и автоматизация response.",
    archFourTitle: "4. Dashboard & API",
    archFourText: "Web/mobile интерфейс, экспорт отчетов, подключение новых моделей."
  },
  uz: {
    brandTag: "Kiberbarqarorlik uchun AI platforma",
    languageLabel: "Til",
    heroTitle: "CyberShield AI",
    heroBadge: "Hackathon MVP",
    heroSubtitle: "Kiberxavflarni tahlil qilish, bashoratlash va oldini olish platformasi",
    heroText: "Prototip fishing, ransomware va deepfake signallarini tahlil qiladi, hodisa riskini baholaydi va SOC jamoasi uchun ustuvor choralarni beradi.",
    runDemo: "Demo tahlilni ishga tushirish",
    loadScenario: "Hujum ssenariysini yuklash",
    exportReport: "Hisobotni eksport qilish",
    pointOne: "Ko'p tilli interfейс: rus, o'zbek, ingliz",
    pointTwo: "Explainable AI: risk nega berilganini tushuntiradi",
    pointThree: "Yangi ma'lumot manbalari uchun kengayuvchi arxitektura",
    liveScore: "Joriy tahdid skori",
    riskHigh: "Yuqori xavf",
    defaultSummary: "Email trafikida anomal faoliyat va shubhali fayl ishga tushirish urinishlari topildi.",
    severityMetric: "Severity",
    confidenceMetric: "Confidence",
    updatedMetric: "Yangilandi",
    analysisLabel: "Threat Analysis",
    analysisTitle: "Hodisani tahlil qilish",
    mvpChip: "Ochiq ma'lumotlarga asoslangan MVP",
    threatType: "Tahdid turi",
    phishing: "Fishing",
    ransomware: "Ransomware",
    deepfake: "Deepfake",
    sourceRegion: "Hudud / manba",
    regionUz: "O'zbekiston",
    regionCis: "MDH",
    regionGlobal: "Global manba",
    anomalyRate: "Trafik anomaliyasi (%)",
    credentialLeaks: "Shubhali kirish urinishlari",
    aiConfidence: "Model ishonchi (%)",
    signalText: "Matnli signal",
    signalPlaceholder: "Shubhali xabar, URL yoki hodisa tavsifini kiriting...",
    analyzeBtn: "Riskni baholash",
    resetBtn: "Qayta tiklash",
    insightsLabel: "AI Insights",
    insightsTitle: "Tahlil natijalari",
    criticalThreat: "Kritik",
    predictionLabel: "Hodisa prognozi",
    predictionTitleHigh: "24 soat ichida eskalatsiya ehtimoli yuqori",
    predictionTextHigh: "Fishingga o'xshash matn, kuchli anomaliya va model ishonchi faol hujum bosqichini ko'rsatmoqda.",
    explainabilityLabel: "Explainability",
    actionsLabel: "Tavsiyalar",
    dataSourcesLabel: "Ochiq manbalar",
    sourceOne: "Tarmoq anomaliyalari va phishing URL'lar uchun Kaggle datasetlari",
    sourceTwo: "Mahalliy kontekst uchun UZCERT / CERT tavsiyalari",
    sourceThree: "Modelni kengaytirish uchun World Bank digital risk indikatorlari",
    monitoringLabel: "Operatsion ko'rinish",
    monitoringTitle: "Hodisalar lentasi",
    realTimeChip: "Real-time simulyatsiya",
    colTime: "Vaqt",
    colType: "Tur",
    colAsset: "Aktiv",
    colRisk: "Risk",
    colStatus: "Status",
    architectureLabel: "Scalability",
    architectureTitle: "Platforma arxitekturasi",
    archOneTitle: "1. Ingestion Layer",
    archOneText: "Email, network loglar, CERT va SIEM API integratsiyasi.",
    archTwoTitle: "2. AI Detection",
    archTwoText: "Matn tahlili, anomaliya qoidalari va skoring mexanizmi.",
    archThreeTitle: "3. Decision Engine",
    archThreeText: "Hodisalarni prioritetlash, tavsiyalar va javobni avtomatlashtirish.",
    archFourTitle: "4. Dashboard & API",
    archFourText: "Web/mobile interfейс, hisobot eksporti va yangi modellar ulanishi."
  },
  en: {
    brandTag: "AI platform for cyber resilience",
    languageLabel: "Language",
    heroTitle: "CyberShield AI",
    heroBadge: "Hackathon MVP",
    heroSubtitle: "Platform for analyzing, predicting, and preventing cyber threats",
    heroText: "The prototype analyzes phishing, ransomware, and deepfake signals, estimates incident risk, and delivers prioritized actions for a SOC team.",
    runDemo: "Run demo analysis",
    loadScenario: "Load attack scenario",
    exportReport: "Export report",
    pointOne: "Multilingual interface: Russian, Uzbek, English",
    pointTwo: "Explainable AI: clear reasons behind the risk score",
    pointThree: "Scalable architecture for new data sources",
    liveScore: "Live Threat Score",
    riskHigh: "High risk",
    defaultSummary: "Anomalous email traffic and a suspicious file execution attempt were detected.",
    severityMetric: "Severity",
    confidenceMetric: "Confidence",
    updatedMetric: "Updated",
    analysisLabel: "Threat Analysis",
    analysisTitle: "Incident analysis",
    mvpChip: "MVP with open data logic",
    threatType: "Threat type",
    phishing: "Phishing",
    ransomware: "Ransomware",
    deepfake: "Deepfake",
    sourceRegion: "Region / source",
    regionUz: "Uzbekistan",
    regionCis: "CIS",
    regionGlobal: "Global source",
    anomalyRate: "Traffic anomaly (%)",
    credentialLeaks: "Suspicious login attempts",
    aiConfidence: "Model confidence (%)",
    signalText: "Text signal",
    signalPlaceholder: "Paste a suspicious message, URL, or event description...",
    analyzeBtn: "Assess risk",
    resetBtn: "Reset",
    insightsLabel: "AI Insights",
    insightsTitle: "Analysis results",
    criticalThreat: "Critical",
    predictionLabel: "Incident forecast",
    predictionTitleHigh: "Escalation likely within 24 hours",
    predictionTextHigh: "The combination of phishing-style content, anomaly spikes, and high model confidence points to an active attack phase.",
    explainabilityLabel: "Explainability",
    actionsLabel: "Recommended actions",
    dataSourcesLabel: "Open data sources",
    sourceOne: "Kaggle datasets for network anomalies and phishing URLs",
    sourceTwo: "UZCERT / CERT advisories for local context",
    sourceThree: "World Bank digital risk indicators for model expansion",
    monitoringLabel: "Operational View",
    monitoringTitle: "Incident feed",
    realTimeChip: "Real-time simulation",
    colTime: "Time",
    colType: "Type",
    colAsset: "Asset",
    colRisk: "Risk",
    colStatus: "Status",
    architectureLabel: "Scalability",
    architectureTitle: "Platform architecture",
    archOneTitle: "1. Ingestion Layer",
    archOneText: "Email, network logs, CERT and SIEM API integrations.",
    archTwoTitle: "2. AI Detection",
    archTwoText: "Text analytics, anomaly rules, and a scoring engine.",
    archThreeTitle: "3. Decision Engine",
    archThreeText: "Incident prioritization, recommendations, and response automation.",
    archFourTitle: "4. Dashboard & API",
    archFourText: "Web/mobile interface, report export, and model extensibility."
  }
};

const mapLabels = {
  ru: { left: "RU Threat Sphere", right: "Eurasia sector" },
  uz: { left: "UZ Threat Sphere", right: "Central Asia sector" },
  en: { left: "EN Threat Sphere", right: "North America sector" }
};

const heroMedia = {
  ru: "assets/hero-ru.svg",
  uz: "assets/hero-uz.svg",
  en: "assets/hero-en.svg"
};

const baseIncidents = [
  { time: "09:12", type: "phishing", asset: "mail-gateway-01", risk: 82, status: "Escalated" },
  { time: "09:27", type: "ransomware", asset: "finance-share", risk: 91, status: "Containment" },
  { time: "10:03", type: "deepfake", asset: "voice-channel", risk: 63, status: "Review" },
  { time: "10:24", type: "phishing", asset: "hr-portal", risk: 48, status: "Monitoring" }
];

const scenarioPresets = {
  phishing: { anomalyRate: 68, loginAttempts: 14, modelConfidence: 84, sourceRegion: "uz", signalText: "URGENT: reset your corporate password within 15 minutes to avoid account suspension." },
  ransomware: { anomalyRate: 89, loginAttempts: 27, modelConfidence: 93, sourceRegion: "cis", signalText: "Multiple endpoints started encrypting shared folders after a suspicious attachment was opened." },
  deepfake: { anomalyRate: 54, loginAttempts: 8, modelConfidence: 79, sourceRegion: "global", signalText: "Voice message from 'CEO' requests urgent wire transfer and bypasses standard approval process." }
};

const ui = {
  languageSelect: document.getElementById("languageSelect"),
  analyzeDemoBtn: document.getElementById("analyzeDemoBtn"),
  loadScenarioBtn: document.getElementById("loadScenarioBtn"),
  exportReportBtn: document.getElementById("exportReportBtn"),
  resetFormBtn: document.getElementById("resetFormBtn"),
  threatForm: document.getElementById("threatForm"),
  threatType: document.getElementById("threatType"),
  sourceRegion: document.getElementById("sourceRegion"),
  anomalyRate: document.getElementById("anomalyRate"),
  anomalyValue: document.getElementById("anomalyValue"),
  loginAttempts: document.getElementById("loginAttempts"),
  modelConfidence: document.getElementById("modelConfidence"),
  confidenceValue: document.getElementById("confidenceValue"),
  signalText: document.getElementById("signalText"),
  riskScore: document.getElementById("riskScore"),
  riskLevel: document.getElementById("riskLevel"),
  riskSummary: document.getElementById("riskSummary"),
  threatBadge: document.getElementById("threatBadge"),
  predictionTitle: document.getElementById("predictionTitle"),
  predictionText: document.getElementById("predictionText"),
  explanationsList: document.getElementById("explanationsList"),
  actionsList: document.getElementById("actionsList"),
  incidentTableBody: document.getElementById("incidentTableBody"),
  scoreRing: document.getElementById("scoreRing"),
  severityValue: document.getElementById("severityValue"),
  confidenceMetricValue: document.getElementById("confidenceMetricValue"),
  lastUpdatedValue: document.getElementById("lastUpdatedValue"),
  activeCenterTitle: document.getElementById("activeCenterTitle"),
  activeCenterMeta: document.getElementById("activeCenterMeta"),
  activeCenterRegion: document.getElementById("activeCenterRegion"),
  nodeMedia: document.querySelector(".node-media"),
  mapLocaleLabel: document.getElementById("mapLocaleLabel"),
  mapTargetLabel: document.getElementById("mapTargetLabel"),
  langMaps: Array.from(document.querySelectorAll(".threat-globe")),
  scenarioChips: Array.from(document.querySelectorAll(".scenario-chip[data-scenario]"))
};

let incidents = [...baseIncidents];
let lastAnalysis = null;

function localizedThreatType(type, lang) {
  const map = {
    phishing: { ru: "Фишинг", uz: "Fishing", en: "Phishing" },
    ransomware: { ru: "Ransomware", uz: "Ransomware", en: "Ransomware" },
    deepfake: { ru: "Deepfake", uz: "Deepfake", en: "Deepfake" }
  };
  return map[type][lang];
}

function localizedRiskLabel(score, lang) {
  if (score >= 75) return { text: { ru: "Высокий риск", uz: "Yuqori xavf", en: "High risk" }[lang], className: "critical" };
  if (score >= 45) return { text: { ru: "Средний риск", uz: "O'rta xavf", en: "Medium risk" }[lang], className: "medium" };
  return { text: { ru: "Низкий риск", uz: "Past xavf", en: "Low risk" }[lang], className: "safe" };
}

function localizedStatus(status, lang) {
  const map = {
    Escalated: { ru: "Эскалация", uz: "Eskalatsiya", en: "Escalated" },
    Containment: { ru: "Локализация", uz: "Cheklash", en: "Containment" },
    Review: { ru: "Проверка", uz: "Tekshiruv", en: "Review" },
    Monitoring: { ru: "Мониторинг", uz: "Monitoring", en: "Monitoring" }
  };
  return map[status][lang];
}

function getNowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function updateLanguageMap(lang) {
  ui.langMaps.forEach((map) => {
    map.classList.toggle("active", map.dataset.map === lang);
  });

  ui.mapLocaleLabel.textContent = mapLabels[lang].left;
  ui.mapTargetLabel.textContent = mapLabels[lang].right;
}

function updateHeroMedia(lang) {
  ui.nodeMedia.style.backgroundImage = `linear-gradient(180deg, rgba(30, 50, 130, 0.52), rgba(10, 10, 14, 0.34)), url('${heroMedia[lang]}')`;
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dict[key]) node.placeholder = dict[key];
  });

  updateLanguageMap(lang);
  updateHeroMedia(lang);
  renderIncidents(lang);
  updateAnalysis(false);
}

function evaluateSignalText(text, threatType) {
  const lower = text.toLowerCase();
  const flags = {
    urgent: /urgent|срочно|immediately|15 minutes|wire transfer/.test(lower),
    credentials: /password|login|account|verify|reset/.test(lower),
    malware: /attachment|encrypt|decrypt|file|shared folder/.test(lower),
    impersonation: /ceo|director|boss|voice|approval/.test(lower)
  };

  let score = 0;
  if (flags.urgent) score += 12;
  if (flags.credentials) score += 14;
  if (flags.malware) score += 16;
  if (flags.impersonation) score += 13;

  if (threatType === "phishing") score += flags.credentials ? 12 : 4;
  if (threatType === "ransomware") score += flags.malware ? 15 : 6;
  if (threatType === "deepfake") score += flags.impersonation ? 15 : 5;

  return { score, flags };
}

function buildExplanations({ threatType, sourceRegion, anomalyRate, loginAttempts, modelConfidence, signalAnalysis }, lang) {
  const regionLabel = {
    uz: { ru: "локальный", uz: "mahalliy", en: "local" },
    cis: { ru: "региональный", uz: "mintaqaviy", en: "regional" },
    global: { ru: "глобальный", uz: "global", en: "global" }
  }[sourceRegion][lang];

  const typeText = localizedThreatType(threatType, lang).toLowerCase();

  return [
    { ru: `Аномалия трафика ${anomalyRate}% превышает нормальный профиль поведения.`, uz: `Trafik anomaliyasi ${anomalyRate}% odatiy xatti-harakat profilidan yuqori.`, en: `Traffic anomaly at ${anomalyRate}% is above the normal behavior baseline.` }[lang],
    { ru: `Подозрительные входы: ${loginAttempts}. Это усиливает вероятность компрометации учетных данных.`, uz: `Shubhali kirishlar: ${loginAttempts}. Bu akkaunt buzilishi ehtimolini oshiradi.`, en: `Suspicious logins: ${loginAttempts}. This increases the likelihood of account compromise.` }[lang],
    { ru: `Уверенность модели ${modelConfidence}% подтверждает классификацию как ${typeText}.`, uz: `Model ishonchi ${modelConfidence}% hodisani ${typeText} sifatida tasniflashni qo'llab-quvvatlaydi.`, en: `Model confidence of ${modelConfidence}% supports the ${typeText} classification.` }[lang],
    { ru: `Источник сигнала оценен как ${regionLabel} контекст риска.`, uz: `Signal manbasi ${regionLabel} risk konteksti sifatida baholandi.`, en: `The signal source is mapped to a ${regionLabel} risk context.` }[lang],
    signalAnalysis.flags.urgent || signalAnalysis.flags.credentials || signalAnalysis.flags.malware || signalAnalysis.flags.impersonation
      ? { ru: "В тексте сигнала найдены ключевые маркеры социальной инженерии или вредоносной активности.", uz: "Matnli signal ijtimoiy muhandislik yoki zararli faoliyat markerlarini ko'rsatmoqda.", en: "The text signal contains social engineering or malicious activity markers." }[lang]
      : { ru: "Текстовый сигнал содержит ограниченное число явных индикаторов, но поведенческие метрики остаются тревожными.", uz: "Matnli signalda aniq indikatorlar kam, biroq xulq-atvor metrikalari hanuz xavotirli.", en: "The text signal contains limited explicit indicators, but behavioral metrics remain concerning." }[lang]
  ];
}

function buildActions(threatType, score, lang) {
  const actionsByType = {
    phishing: {
      ru: ["Заблокировать домен и URL в почтовом шлюзе.", "Принудительно сбросить пароли затронутых пользователей.", "Отправить предупреждение сотрудникам и проверить MFA."],
      uz: ["Email shlyuzida domen va URL'ni bloklash.", "Ta'sirlangan foydalanuvchilar parolini majburiy almashtirish.", "Xodimlarga ogohlantirish yuborish va MFA'ni tekshirish."],
      en: ["Block the domain and URL in the email gateway.", "Force password resets for affected users.", "Notify employees and verify MFA coverage."]
    },
    ransomware: {
      ru: ["Изолировать зараженные конечные точки от сети.", "Остановить доступ к общим папкам и снять forensic snapshot.", "Запустить playbook восстановления из резервных копий."],
      uz: ["Zararlangan endpointlarni tarmoqdan ajratish.", "Shared folderlarga kirishni to'xtatish va forensic snapshot olish.", "Zaxira nusxalardan tiklash playbook'ini ishga tushirish."],
      en: ["Isolate affected endpoints from the network.", "Suspend access to shared folders and take a forensic snapshot.", "Launch the backup recovery playbook."]
    },
    deepfake: {
      ru: ["Подтвердить запрос по альтернативному защищенному каналу.", "Отметить голосовой/видео сигнал как потенциальную подделку.", "Усилить контроль для платежей и executive approvals."],
      uz: ["So'rovni boshqa himoyalangan kanal orqali tasdiqlash.", "Audio/video signalni ehtimoliy qalbakilashtirish deb belgilash.", "To'lov va executive approval nazoratini kuchaytirish."],
      en: ["Verify the request through an alternate secure channel.", "Flag the voice/video signal as a potential forgery.", "Tighten payment and executive approval controls."]
    }
  };

  const extras = {
    ru: score >= 75 ? "Эскалировать инцидент в SOC L2 и подготовить отчет для руководства." : "Продолжить мониторинг и собрать дополнительные артефакты.",
    uz: score >= 75 ? "Hodisani SOC L2 ga eskalatsiya qiling va rahbariyat uchun hisobot tayyorlang." : "Monitoringni davom ettiring va qo'shimcha artefaktlar to'plang.",
    en: score >= 75 ? "Escalate the incident to SOC L2 and prepare an executive update." : "Continue monitoring and collect additional artifacts."
  };

  return [...actionsByType[threatType][lang], extras[lang]];
}

function renderIncidents(lang) {
  ui.incidentTableBody.innerHTML = incidents.map((incident) => `
    <tr>
      <td>${incident.time}</td>
      <td>${localizedThreatType(incident.type, lang)}</td>
      <td>${incident.asset}</td>
      <td>${incident.risk}</td>
      <td><span class="status-pill">${localizedStatus(incident.status, lang)}</span></td>
    </tr>
  `).join("");
}

function updateScoreRing(score) {
  const angle = `${Math.max(12, Math.round((score / 100) * 360))}deg`;
  ui.scoreRing.style.setProperty("--ring-angle", angle);
}

function severityLabel(className) {
  return className === "critical" ? "Critical" : className === "medium" ? "Medium" : "Low";
}

function buildAssetName(threatType) {
  return { phishing: "mail-gateway-live", ransomware: "endpoint-cluster-live", deepfake: "voice-channel-live" }[threatType];
}

function updateScenarioChips(activeScenario) {
  ui.scenarioChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.scenario === activeScenario));
}

function updateActiveCard({ lang, threatType, sourceRegion }) {
  const regionText = { uz: "UZ-CERT", cis: "CIS GRID", global: "GLOBAL FEED" }[sourceRegion];
  ui.activeCenterRegion.textContent = regionText;
  ui.activeCenterTitle.textContent = `${localizedThreatType(threatType, lang)} Node (${sourceRegion.toUpperCase()})`;
  ui.activeCenterMeta.textContent = `${buildAssetName(threatType)} / ${regionText.toLowerCase()}`;
  updateScenarioChips(threatType);
}

function pushIncident({ threatType, score }) {
  const status = score >= 75 ? "Escalated" : score >= 45 ? "Review" : "Monitoring";
  incidents.unshift({ time: getNowTime(), type: threatType, asset: buildAssetName(threatType), risk: score, status });
  incidents = incidents.slice(0, 8);
}

function gatherState() {
  return {
    lang: ui.languageSelect.value,
    threatType: ui.threatType.value,
    sourceRegion: ui.sourceRegion.value,
    anomalyRate: Number(ui.anomalyRate.value),
    loginAttempts: Number(ui.loginAttempts.value),
    modelConfidence: Number(ui.modelConfidence.value),
    signalText: ui.signalText.value.trim()
  };
}

function updateAnalysis(addToFeed = true) {
  const { lang, threatType, sourceRegion, anomalyRate, loginAttempts, modelConfidence, signalText } = gatherState();

  ui.anomalyValue.textContent = `${anomalyRate}%`;
  ui.confidenceValue.textContent = `${modelConfidence}%`;
  ui.confidenceMetricValue.textContent = `${modelConfidence}%`;

  const signalAnalysis = evaluateSignalText(signalText, threatType);
  const typeWeight = { phishing: 18, ransomware: 24, deepfake: 16 }[threatType];
  const regionWeight = { uz: 8, cis: 12, global: 10 }[sourceRegion];
  const score = Math.min(99, Math.round(typeWeight + regionWeight + anomalyRate * 0.28 + loginAttempts * 0.8 + modelConfidence * 0.18 + signalAnalysis.score));

  const risk = localizedRiskLabel(score, lang);
  ui.riskScore.textContent = score;
  ui.riskLevel.textContent = risk.text;
  ui.riskLevel.className = `risk-level ${risk.className}`;
  ui.threatBadge.textContent = risk.text;
  ui.threatBadge.className = `panel-chip ${risk.className}`;
  ui.severityValue.textContent = severityLabel(risk.className);
  ui.lastUpdatedValue.textContent = getNowTime();
  updateScoreRing(score);
  updateActiveCard({ lang, threatType, sourceRegion });

  const summaryByLang = {
    ru: score >= 75 ? "Сигнал требует немедленного реагирования: вероятность активной атаки высокая." : score >= 45 ? "Требуется усиленный мониторинг: есть признаки целевой вредоносной активности." : "Риск ограниченный, но событие стоит оставить под наблюдением.",
    uz: score >= 75 ? "Signal zudlik bilan javobni talab qiladi: faol hujum ehtimoli yuqori." : score >= 45 ? "Kuchaytirilgan monitoring kerak: maqsadli zararli faoliyat alomatlari mavjud." : "Risk cheklangan, biroq hodisani kuzatishda qoldirish kerak.",
    en: score >= 75 ? "The signal requires immediate response: the probability of an active attack is high." : score >= 45 ? "Enhanced monitoring is required: targeted malicious activity indicators are present." : "The risk is limited, but the event should remain under observation."
  };

  const predictionByLang = {
    ru: score >= 75 ? "Вероятна эскалация в течение 24 часов" : score >= 45 ? "Возможна повторная попытка в течение 48 часов" : "Низкая вероятность немедленной эскалации",
    uz: score >= 75 ? "24 soat ichida eskalatsiya ehtimoli yuqori" : score >= 45 ? "48 soat ichida qayta urinish ehtimoli bor" : "Tezkor eskalatsiya ehtimoli past",
    en: score >= 75 ? "Escalation likely within 24 hours" : score >= 45 ? "A follow-up attempt is possible within 48 hours" : "Immediate escalation is unlikely"
  };

  const predictionTextByLang = {
    ru: score >= 75 ? "Комбинация поведенческих и текстовых признаков указывает на атакующего, который уже тестирует или развивает вектор проникновения." : score >= 45 ? "Есть часть индикаторов компрометации, поэтому событие следует дообследовать и обогатить новыми данными." : "Явных признаков успешной атаки недостаточно, но стоит сохранить телеметрию для корреляции.",
    uz: score >= 75 ? "Xulq-atvor va matn indikatorlari hujumchi kirish vektorini allaqachon rivojlantirayotganini ko'rsatmoqda." : score >= 45 ? "Ba'zi kompromat indikatorlari mavjud, shuning uchun hodisani qo'shimcha tekshirish kerak." : "Muvaffaqiyatli hujum belgilari yetarli emas, lekin telemetriyani saqlash kerak.",
    en: score >= 75 ? "Behavioral and text indicators suggest that the attacker is already probing or expanding the intrusion path." : score >= 45 ? "Some indicators of compromise are present, so the event should be enriched with additional evidence." : "There are not enough signs of a successful attack yet, but telemetry should be retained for correlation."
  };

  ui.riskSummary.textContent = summaryByLang[lang];
  ui.predictionTitle.textContent = predictionByLang[lang];
  ui.predictionText.textContent = predictionTextByLang[lang];

  const explanations = buildExplanations({ threatType, sourceRegion, anomalyRate, loginAttempts, modelConfidence, signalAnalysis }, lang);
  ui.explanationsList.innerHTML = explanations.map((item) => `<li>${item}</li>`).join("");

  const actions = buildActions(threatType, score, lang);
  ui.actionsList.innerHTML = actions.map((item) => `<li>${item}</li>`).join("");

  lastAnalysis = { lang, threatType, sourceRegion, anomalyRate, loginAttempts, modelConfidence, signalText, score, riskClass: risk.className, riskLabel: risk.text, explanations, actions };

  if (addToFeed) {
    pushIncident({ threatType, score });
    renderIncidents(lang);
  }
}

function applyScenario(type, addToFeed = false) {
  const preset = scenarioPresets[type];
  ui.threatType.value = type;
  ui.sourceRegion.value = preset.sourceRegion;
  ui.anomalyRate.value = preset.anomalyRate;
  ui.loginAttempts.value = preset.loginAttempts;
  ui.modelConfidence.value = preset.modelConfidence;
  ui.signalText.value = preset.signalText;
  updateAnalysis(addToFeed);
}

function resetForm() {
  incidents = [...baseIncidents];
  renderIncidents(ui.languageSelect.value);
  applyScenario("phishing", false);
}

function exportReport() {
  if (!lastAnalysis) updateAnalysis(false);

  const report = {
    generatedAt: new Date().toISOString(),
    threatType: lastAnalysis.threatType,
    sourceRegion: lastAnalysis.sourceRegion,
    riskScore: lastAnalysis.score,
    riskLabel: lastAnalysis.riskLabel,
    anomalyRate: lastAnalysis.anomalyRate,
    loginAttempts: lastAnalysis.loginAttempts,
    modelConfidence: lastAnalysis.modelConfidence,
    signalText: lastAnalysis.signalText,
    explanations: lastAnalysis.explanations,
    actions: lastAnalysis.actions
  };

  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `cybershield-report-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

ui.languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));
ui.anomalyRate.addEventListener("input", () => updateAnalysis(false));
ui.modelConfidence.addEventListener("input", () => updateAnalysis(false));
ui.loginAttempts.addEventListener("input", () => updateAnalysis(false));
ui.threatType.addEventListener("change", () => updateAnalysis(false));
ui.sourceRegion.addEventListener("change", () => updateAnalysis(false));
ui.signalText.addEventListener("input", () => updateAnalysis(false));
ui.analyzeDemoBtn.addEventListener("click", () => updateAnalysis(true));
ui.loadScenarioBtn.addEventListener("click", () => {
  const next = ui.threatType.value === "phishing" ? "ransomware" : ui.threatType.value === "ransomware" ? "deepfake" : "phishing";
  applyScenario(next, true);
});
ui.exportReportBtn.addEventListener("click", exportReport);
ui.resetFormBtn.addEventListener("click", resetForm);
ui.scenarioChips.forEach((chip) => chip.addEventListener("click", () => applyScenario(chip.dataset.scenario, true)));
ui.threatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateAnalysis(true);
});

ui.languageSelect.value = "ru";
updateHeroMedia("ru");
renderIncidents("ru");
updateLanguageMap("ru");
applyScenario("phishing", false);
setLanguage("ru");