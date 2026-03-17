// CyberShield AI front-end logic with multilingual support (RU/UZ/EN)

const translations = {
  ru: {
    brandTag: "AI платформа для киберустойчивости",
    heroTitle: "CyberShield AI",
    heroSubtitle: "Платформа для анализа, предсказания и предотвращения киберугроз",
    heroText:
      "Прототип анализирует фишинг, ransomware и deepfake-сигналы, оценивает риск инцидента и выдаёт приоритетные действия для SOC-команды.",
    heroBadge: "Hackathon MVP",
    languageLabel: "Язык",
    liveScore: "Онлайн риск",
    riskHigh: "Высокий риск",
    riskMedium: "Средний риск",
    riskLow: "Низкий риск",
    summaryHigh:
      "Высокая активность угроз: требуется немедленная реакция и изоляция затронутых систем.",
    summaryMedium:
      "Обнаружены подозрительные сигналы. Усильте мониторинг и подготовьте план реагирования.",
    summaryLow:
      "Сигналы слабые, инцидент маловероятен. Продолжайте стандартный мониторинг.",
    severityMetric: "Серьёзность",
    confidenceMetric: "Уверенность",
    updatedMetric: "Обновлено",
    runDemo: "Запустить демо-анализ",
    loadScenario: "Загрузить сценарий атаки",
    exportReport: "Экспорт отчёта",
    resetBtn: "Сбросить",
    quickScanTitle: "Быстрая проверка",
    quickScanSubtitle: "URL / файл",
    quickScanUrlLabel: "URL для проверки",
    quickScanFileLabel: "Прикрепить файл (симуляция)",
    quickScanButton: "Проверить сейчас",
    quickScanAwaiting: "Ожидаю ввод…",
    quickScanFound: "Найден в базе. Риск:",
    quickScanClean: "Не найден в базе, риск низкий.",
    quickScanError: "Ошибка проверки, попробуйте позже.",
    quickScanHits: "совпадений за 7 дней",
    socActionsTitle: "Действия SOC",
    socActionsSubtitle: "Готовый плейбук",
    actionIsolate: "Изолировать хост",
    actionBlock: "Заблокировать домен / URL",
    actionNotify: "Уведомить пользователей",
    actionTicket: "Создать тикет",
    actionExecute: "Выполнить действия",
    actionStatusIdle: "Не запущено.",
    actionStatusRun: "Выполняю плейбук…",
    actionStatusDone: "Действия выполнены",
    metricsTitle: "Метрики",
    metricsSubtitle: "За 24 часа",
    apiLabel: "API: —",
    apiOk: "API: OK",
    apiFail: "API: offline",
    metricPhishingLabel: "Фишинг заблокирован",
    metricRansomwareLabel: "Ransomware остановлено",
    metricMttrLabel: "Средний ответ (мин)",
    metricsLoading: "загрузка…",
    analysisLabel: "Threat Analysis",
    analysisTitle: "Анализ события",
    mvpChip: "MVP на открытых данных",
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
    signalPlaceholder: "Опишите наблюдение или вставьте текст подозрительного письма",
    analyzeBtn: "Оценить риск",
    insightsLabel: "AI Insights",
    insightsTitle: "Результаты анализа",
    criticalThreat: "Критично",
    predictionLabel: "Прогноз инцидента",
    predictionTitleHigh: "Вероятна эскалация в течение 24 часов",
    predictionTextHigh:
      "Комбинация фишингового контента, всплеска аномалий и высокой уверенности модели указывает на активную фазу атаки.",
    predictionTitleMedium: "Повышенный риск в горизонте 48 часов",
    predictionTextMedium: "Есть сигналы атаки, требуется усиленный мониторинг и проверка IOC.",
    predictionTitleLow: "Риск низкий",
    predictionTextLow: "Слабые сигналы, достаточно стандартного мониторинга.",
    explainabilityLabel: "Explainability",
    actionsLabel: "Рекомендации",
    dataSourcesLabel: "Открытые источники",
    sourceOne: "Kaggle datasets для сетевых аномалий и phishing URLs",
    sourceTwo: "UZCERT / CERT advisories для локального контекста",
    sourceThree: "World Bank digital risk indicators для расширения модели",
    monitoringLabel: "Operational View",
    monitoringTitle: "Лента инцидентов",
    realTimeChip: "Симуляция в реальном времени",
    colTime: "Время",
    colType: "Тип",
    colAsset: "Актив",
    colRisk: "Риск",
    colStatus: "Статус",
    architectureLabel: "Scalability",
    architectureTitle: "Архитектура платформы",
    archOneTitle: "1. Уровень сбора",
    archOneText: "Email, сетевые логи, API-интеграции с CERT и SIEM.",
    archTwoTitle: "2. AI-детекция",
    archTwoText: "NLP-анализ текста, правила аномалий, скоринговый движок.",
    archThreeTitle: "3. Decision Engine",
    archThreeText: "Приоритизация инцидентов, рекомендации и автоматизация response.",
    archFourTitle: "4. Dashboard & API",
    archFourText: "Web/mobile интерфейс, экспорт отчётов, подключение новых моделей.",
    mapLocale: "RU Threat Sphere",
    mapTarget: "Eurasia sector",
    riskLabels: { low: "Низкий", medium: "Средний", high: "Высокий" },
    statuses: { open: "Открыт", mitigating: "Реагирование", closed: "Закрыт" },
    nodeTitle: "Phishing Node (UZ)",
    nodeMeta: "mail-gateway-live / региональный кластер аномалий",
    legendEmail: "Email",
    legendIdentity: "Учетки",
    legendNetwork: "Сеть",
    legendVoice: "Голос",
    legendEndpoint: "Endpoint",
    legendCloud: "Облако",
    legendDNS: "DNS",
    legendApp: "Приложения/API"
  },
  uz: {
    brandTag: "Kiberbarqarorlik uchun AI platformasi",
    heroTitle: "CyberShield AI",
    heroSubtitle: "Kiberxavflarni tahlil, bashorat va oldini olish platformasi",
    heroText:
      "Prototip fishing, ransomware va deepfake signallarni tahlil qiladi, xavfni baholaydi va SOC jamoasi uchun ustuvor choralarni beradi.",
    heroBadge: "Hackathon MVP",
    languageLabel: "Til",
    liveScore: "Onlayn xavf",
    riskHigh: "Yuqori xavf",
    riskMedium: "O'rtacha xavf",
    riskLow: "Past xavf",
    summaryHigh:
      "Xavf faolligi yuqori: darhol javob choralarini boshlang va tizimlarni izolyatsiya qiling.",
    summaryMedium:
      "Shubhali signallar mavjud. Monitoringni kuchaytiring va javob rejasini tayyorlang.",
    summaryLow: "Signallar zaif, hodisa ehtimoli past. Oddiy monitoring yetarli.",
    severityMetric: "Jiddiylik",
    confidenceMetric: "Ishonchlilik",
    updatedMetric: "Yangilandi",
    runDemo: "Demo tahlilni ishga tushirish",
    loadScenario: "Hujum ssenariysini yuklash",
    exportReport: "Hisobotni eksport qilish",
    resetBtn: "Tiklash",
    quickScanTitle: "Tezkor tekshiruv",
    quickScanSubtitle: "URL / fayl",
    quickScanUrlLabel: "Tekshirish uchun URL",
    quickScanFileLabel: "Fayl biriktirish (simulyatsiya)",
    quickScanButton: "Hozir tekshirish",
    quickScanAwaiting: "Kiritilishini kutmoqdaman…",
    quickScanFound: "Bazadan topildi. Xavf:",
    quickScanClean: "Bazadan topilmadi, xavf past.",
    quickScanError: "Tekshiruvda xato, keyinroq urinib ko'ring.",
    quickScanHits: "ta moslik 7 kun ichida",
    socActionsTitle: "SOC amallari",
    socActionsSubtitle: "Tayyor pleylbuk",
    actionIsolate: "Xostni izolyatsiya qilish",
    actionBlock: "Domen / URL bloklash",
    actionNotify: "Foydalanuvchilarni ogohlantirish",
    actionTicket: "Hodisa tiketi yaratish",
    actionExecute: "Amallarni bajarish",
    actionStatusIdle: "Boshlanmagan.",
    actionStatusRun: "Pleylbuk bajarilmoqda…",
    actionStatusDone: "Amallar bajarildi",
    metricsTitle: "Metrikalar",
    metricsSubtitle: "So'nggi 24 soat",
    apiLabel: "API: —",
    apiOk: "API: OK",
    apiFail: "API: o'chirilgan",
    metricPhishingLabel: "Fishing bloklandi",
    metricRansomwareLabel: "Ransomware to'xtatildi",
    metricMttrLabel: "O'rtacha javob (daq)",
    metricsLoading: "yuklanmoqda…",
    analysisLabel: "Threat Analysis",
    analysisTitle: "Hodisa tahlili",
    mvpChip: "Ochiq ma'lumotlardagi MVP",
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
    aiConfidence: "Model ishonchliligi (%)",
    signalText: "Matnli signal",
    signalPlaceholder: "Kuzatuvni yozing yoki shubhali xat matnini qo'ying",
    analyzeBtn: "Xavfni baholash",
    insightsLabel: "AI Insights",
    insightsTitle: "Tahlil natijalari",
    criticalThreat: "Kritik",
    predictionLabel: "Hodisa prognozi",
    predictionTitleHigh: "24 soat ichida eskalatsiya ehtimoli yuqori",
    predictionTextHigh:
      "Fishing kontent, anomaliya o'sishi va modelning ishonchi hujumning faol bosqichini ko'rsatadi.",
    predictionTitleMedium: "48 soat ichida oshirilgan xavf",
    predictionTextMedium: "Hujum signallari bor, monitoringni kuchaytiring va IOC tekshiring.",
    predictionTitleLow: "Xavf past",
    predictionTextLow: "Signallar zaif, odatiy monitoring kifoya.",
    explainabilityLabel: "Explainability",
    actionsLabel: "Tavsiyalar",
    dataSourcesLabel: "Ochiq manbalar",
    sourceOne: "Kaggle ma'lumotlari: tarmoq anomaliyasi va phishing URL",
    sourceTwo: "UZCERT / CERT ogohlantirishlari lokal kontekst uchun",
    sourceThree: "World Bank raqamli xavf ko'rsatkichlari",
    monitoringLabel: "Operational View",
    monitoringTitle: "Hodisalar lentasi",
    realTimeChip: "Real-time simulyatsiya",
    colTime: "Vaqt",
    colType: "Tur",
    colAsset: "Aktiv",
    colRisk: "Xavf",
    colStatus: "Holat",
    architectureLabel: "Scalability",
    architectureTitle: "Platforma arxitekturasi",
    archOneTitle: "1. Ingestion Layer",
    archOneText: "Email, tarmoq loglari, CERT va SIEM API integratsiyasi.",
    archTwoTitle: "2. AI Detection",
    archTwoText: "NLP, anomaliya qoidalari, skoring dvigateli.",
    archThreeTitle: "3. Decision Engine",
    archThreeText: "Hodisalarni ustuvorlashtirish, tavsiya va avtomatlashtirilgan javob.",
    archFourTitle: "4. Dashboard & API",
    archFourText: "Web/mobile interfeys, hisobot eksporti, yangi modellarga ulanish.",
    mapLocale: "UZ Threat Sphere",
    mapTarget: "Markaziy Osiyo sektori",
    riskLabels: { low: "Past", medium: "O'rtacha", high: "Yuqori" },
    statuses: { open: "Ochiq", mitigating: "Jarayonda", closed: "Yopiq" },
    nodeTitle: "Fishing tuguni (UZ)",
    nodeMeta: "mail-gateway-live / mintaqaviy anomaliya klasteri",
    legendEmail: "Email",
    legendIdentity: "Identifikatsiya",
    legendNetwork: "Tarmoq",
    legendVoice: "Ovoz",
    legendEndpoint: "Endpoint",
    legendCloud: "Bulut",
    legendDNS: "DNS",
    legendApp: "Ilovalar/API"
  },
  en: {
    brandTag: "AI platform for cyber resilience",
    heroTitle: "CyberShield AI",
    heroSubtitle: "Analyze, predict and prevent cyber threats",
    heroText:
      "The prototype scores phishing, ransomware and deepfake signals, estimates incident risk, and suggests SOC playbook actions.",
    heroBadge: "Hackathon MVP",
    languageLabel: "Language",
    liveScore: "Live Threat Score",
    riskHigh: "High risk",
    riskMedium: "Medium risk",
    riskLow: "Low risk",
    summaryHigh: "High threat activity detected. Immediate response and containment required.",
    summaryMedium: "Suspicious signals present. Increase monitoring and prepare response.",
    summaryLow: "Weak signals, incident unlikely. Continue standard monitoring.",
    severityMetric: "Severity",
    confidenceMetric: "Confidence",
    updatedMetric: "Updated",
    runDemo: "Run demo analysis",
    loadScenario: "Load attack scenario",
    exportReport: "Export report",
    resetBtn: "Reset",
    quickScanTitle: "Quick Scan",
    quickScanSubtitle: "URL / File check",
    quickScanUrlLabel: "URL to scan",
    quickScanFileLabel: "Attach file (simulated)",
    quickScanButton: "Scan now",
    quickScanAwaiting: "Awaiting input…",
    quickScanFound: "Found in feed. Risk:",
    quickScanClean: "Not found in feed, low risk.",
    quickScanError: "Scan error, try again later.",
    quickScanHits: "hits in 7 days",
    socActionsTitle: "SOC Actions",
    socActionsSubtitle: "One-click playbook",
    actionIsolate: "Isolate host",
    actionBlock: "Block domain / URL",
    actionNotify: "Notify users",
    actionTicket: "Create incident ticket",
    actionExecute: "Execute actions",
    actionStatusIdle: "Not started.",
    actionStatusRun: "Running playbook…",
    actionStatusDone: "Actions completed",
    metricsTitle: "Metrics",
    metricsSubtitle: "Last 24h",
    apiLabel: "API: —",
    apiOk: "API: OK",
    apiFail: "API: offline",
    metricPhishingLabel: "Phishing blocked",
    metricRansomwareLabel: "Ransomware contained",
    metricMttrLabel: "Mean response (min)",
    metricsLoading: "loading…",
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
    signalPlaceholder: "Paste suspicious email or observation",
    analyzeBtn: "Evaluate risk",
    insightsLabel: "AI Insights",
    insightsTitle: "Analysis results",
    criticalThreat: "Critical",
    predictionLabel: "Incident prediction",
    predictionTitleHigh: "Escalation likely within 24h",
    predictionTextHigh:
      "Phishing content, anomaly spike, and high model confidence indicate an active attack phase.",
    predictionTitleMedium: "Elevated risk within 48h",
    predictionTextMedium: "Signals of attack present. Increase monitoring and verify IOCs.",
    predictionTitleLow: "Low risk",
    predictionTextLow: "Weak signals; standard monitoring is sufficient.",
    explainabilityLabel: "Explainability",
    actionsLabel: "Recommendations",
    dataSourcesLabel: "Open sources",
    sourceOne: "Kaggle datasets for network anomalies and phishing URLs",
    sourceTwo: "UZCERT / CERT advisories for local context",
    sourceThree: "World Bank digital risk indicators",
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
    archOneText: "Email, network logs, CERT & SIEM API integrations.",
    archTwoTitle: "2. AI Detection",
    archTwoText: "NLP, anomaly rules, scoring engine.",
    archThreeTitle: "3. Decision Engine",
    archThreeText: "Incident prioritization, recommendations, automated response.",
    archFourTitle: "4. Dashboard & API",
    archFourText: "Web/mobile UI, report export, pluggable models.",
    mapLocale: "EN Threat Sphere",
    mapTarget: "Global sector",
    riskLabels: { low: "Low", medium: "Medium", high: "High" },
    statuses: { open: "Open", mitigating: "Mitigating", closed: "Closed" },
    nodeTitle: "Phishing Node",
    nodeMeta: "mail-gateway-live / anomaly cluster",
    legendEmail: "Email",
    legendIdentity: "Identity",
    legendNetwork: "Network",
    legendVoice: "Voice",
    legendEndpoint: "Endpoint",
    legendCloud: "Cloud",
    legendDNS: "DNS",
    legendApp: "App/API"
  }
};

const heroMedia = {
  phishing: {
    title: "Phishing Node (UZ)",
    meta: "mail-gateway-live / regional anomaly cluster",
    region: "UZ-CERT",
    imageByLang: {
      ru: "url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=80&sat=-40')", // dark datacenter
      uz: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80&sat=-35')", // green code monitor
      en: "url('https://images.unsplash.com/photo-1501856054482-8b7fbff7b3fc?auto=format&fit=crop&w=1400&q=80&sat=-25')" // security neon
    },
    fallback:
      "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80')"
  },
  ransomware: {
    title: "Ransomware Node",
    meta: "srv-backup-02 / lateral movement trace",
    region: "CIS-SOC",
    imageByLang: {
      ru: "url('https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=1400&q=80&sat=-30')", // server racks
      uz: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80&sat=-30')", // board matrix
      en: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80&sat=-30')" // ransomware lock feel
    },
    fallback:
      "url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80')"
  },
  deepfake: {
    title: "Deepfake Signal",
    meta: "voice-gateway / synthetic call anomaly",
    region: "Global Trust Desk",
    imageByLang: {
      ru: "url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1400&q=80&sat=-20')", // waveform voice
      uz: "url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80&sat=-15')", // mic AI
      en: "url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80&sat=-15')" // headset/call center tech
    },
    fallback:
      "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80')"
  }
};

const baseIncidents = [
  { time: "10:21", type: "phishing", asset: "mail-gw-01", risk: "high", status: "open" },
  { time: "10:12", type: "ransomware", asset: "srv-backup-02", risk: "medium", status: "mitigating" },
  { time: "09:48", type: "deepfake", asset: "voice-gw-01", risk: "medium", status: "open" },
  { time: "09:30", type: "phishing", asset: "vpn-core", risk: "low", status: "closed" }
];

const scenarioPresets = {
  phishing: [
    { time: "10:33", type: "phishing", asset: "mail-gw-02", risk: "high", status: "open" },
    { time: "10:28", type: "phishing", asset: "m365-inbox", risk: "medium", status: "open" }
  ],
  ransomware: [
    { time: "10:31", type: "ransomware", asset: "srv-fin-01", risk: "high", status: "open" },
    { time: "10:16", type: "ransomware", asset: "srv-backup-02", risk: "high", status: "mitigating" }
  ],
  deepfake: [
    { time: "10:26", type: "deepfake", asset: "voice-gw-02", risk: "medium", status: "open" },
    { time: "10:05", type: "deepfake", asset: "contact-center", risk: "medium", status: "mitigating" }
  ]
};

const ui = {
  languageSelect: document.getElementById("languageSelect"),
  analyzeDemoBtn: document.getElementById("analyzeDemoBtn"),
  loadScenarioBtn: document.getElementById("loadScenarioBtn"),
  exportReportBtn: document.getElementById("exportReportBtn"),
  themeToggle: document.getElementById("themeToggle"),
  quickScanForm: document.getElementById("quickScanForm"),
  scanUrl: document.getElementById("scanUrl"),
  scanFile: document.getElementById("scanFile"),
  quickScanResult: document.getElementById("quickScanResult"),
  runActionsBtn: document.getElementById("runActionsBtn"),
  actionsStatus: document.getElementById("actionsStatus"),
  apiHealth: document.getElementById("apiHealth"),
  metricPhishing: document.getElementById("metricPhishing"),
  metricRansomware: document.getElementById("metricRansomware"),
  metricMTTR: document.getElementById("metricMTTR"),
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
  langMaps: document.querySelectorAll(".threat-globe"),
  scenarioChips: document.querySelectorAll(".scenario-chip"),
  legendPills: document.querySelectorAll(".signal-legend .legend-pill")
};

let incidents = [...baseIncidents];
let lastAnalysis = null;
let reputationOverride = null;
let activeSignal = null;
let lastStats = null;

const setActiveSignalLabel = (label) => {
  if (label) {
    ui.mapTargetLabel.textContent = `${label} channel`;
  }
};

const getLang = () => ui.languageSelect.value || "ru";

const localizedThreatType = (type) => {
  const lang = getLang();
  return translations[lang][type] || type;
};

const localizedRiskLabel = (risk) => {
  const lang = getLang();
  return translations[lang].riskLabels[risk] || risk;
};

const localizedStatus = (status) => {
  const lang = getLang();
  return translations[lang].statuses[status] || status;
};

const getNowTime = () =>
  new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

const updateLanguageMap = () => {
  const lang = getLang();
  ui.langMaps.forEach((el) => el.classList.toggle("active", el.dataset.map === lang));
  ui.mapLocaleLabel.textContent = translations[lang].mapLocale;
  ui.mapTargetLabel.textContent = translations[lang].mapTarget;
};

const updateHeroMedia = (type) => {
  const media = heroMedia[type];
  if (!media) return;
  const lang = getLang();
  const img =
    (media.imageByLang && media.imageByLang[lang]) ||
    media.fallback ||
    "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80')";
  ui.nodeMedia.style.backgroundImage = img;
  ui.activeCenterTitle.textContent = media.title;
  ui.activeCenterMeta.textContent = media.meta;
  ui.activeCenterRegion.textContent = media.region;
};

const setLanguage = (lang) => {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  updateLanguageMap();
  updateHeroMedia(ui.threatType.value);
  updateAnalysis(false);
  renderIncidents();
};

const evaluateSignalText = () => {
  const text = ui.signalText.value.toLowerCase();
  let delta = 0;
  if (text.includes("password") || text.includes("пароль") || text.includes("parol")) delta += 8;
  if (text.includes("urgent") || text.includes("срочно")) delta += 6;
  if (text.includes("invoice") || text.includes("счет")) delta += 4;
  if (text.includes("voice") || text.includes("голос")) delta += 3;
  return delta;
};

const buildExplanations = (score, threat, hits) => {
  const lang = getLang();
  const list = [];
  list.push(`${translations[lang].anomalyRate}: ${ui.anomalyValue.textContent}`.replace("%", "%"));
  list.push(`${translations[lang].aiConfidence}: ${ui.confidenceValue.textContent}`);
  if (ui.loginAttempts.value) {
    list.push(`${translations[lang].credentialLeaks}: ${ui.loginAttempts.value}`);
  }
  if (reputationOverride && hits !== undefined) {
    list.push(
      `${translations[lang].quickScanFound} ${reputationOverride.score} (${hits} ${translations[lang].quickScanHits})`
    );
  }
  if (lastStats?.phishing24h !== undefined) {
    list.push(`API /stats phishing24h: ${lastStats.phishing24h}`);
  }
  if (threat === "deepfake") {
    list.push("Voice imprint mismatch and abnormal call graph detected.");
  }
  return list;
};

const buildActions = (risk, threat) => {
  const actions = [];
  if (risk === "high") {
    actions.push("Isolate affected hosts and block indicators in email gateway.");
    actions.push("Force password reset for impacted users.");
    if (threat === "ransomware") actions.push("Lock backup volumes to read-only.");
  } else if (risk === "medium") {
    actions.push("Increase monitoring and enable MFA challenges for flagged accounts.");
    actions.push("Hunt recent IOC in SIEM for the last 48h.");
  } else {
    actions.push("Keep standard monitoring and update detections tomorrow.");
  }
  actions.push("Log incident context to ticket for audit trail.");
  return actions;
};

const renderIncidents = () => {
  ui.incidentTableBody.innerHTML = "";
  incidents.slice(0, 12).forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.time}</td>
      <td>${localizedThreatType(item.type)}</td>
      <td>${item.asset}</td>
      <td>${localizedRiskLabel(item.risk)}</td>
      <td>${localizedStatus(item.status)}</td>
    `;
    ui.incidentTableBody.appendChild(row);
  });
};

const updateScoreRing = (score) => {
  const angle = Math.min(360, Math.max(0, score * 3.6));
  const hue = 120 - Math.min(100, score) * 1.2;
  ui.scoreRing.style.setProperty("--ring-angle", `${angle}deg`);
  ui.scoreRing.style.setProperty("--ring-color", `hsl(${hue},95%,60%)`);
  ui.riskScore.textContent = score;
};

const severityLabel = (score) => {
  if (score >= 75) return "critical";
  if (score >= 50) return "high";
  if (score >= 30) return "medium";
  return "low";
};

const updateScenarioChips = (scenario) => {
  ui.scenarioChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.scenario === scenario);
  });
};

const pushIncident = (incident) => {
  incidents = [incident, ...incidents].slice(0, 20);
  renderIncidents();
};

const clearReputationOverride = () => {
  reputationOverride = null;
  ui.quickScanResult.textContent = translations[getLang()].quickScanAwaiting;
};

const gatherState = () => ({
  anomaly: Number(ui.anomalyRate.value),
  login: Number(ui.loginAttempts.value || 0),
  confidence: Number(ui.modelConfidence.value),
  threat: ui.threatType.value,
  region: ui.sourceRegion.value,
  signalDelta: evaluateSignalText()
});

const updateAnalysis = (force = false) => {
  const lang = getLang();
  const state = gatherState();

  let scoreRaw =
    state.anomaly * 0.38 +
    state.confidence * 0.32 +
    Math.min(state.login, 120) * 0.15 +
    state.signalDelta;

  if (state.threat === "ransomware") scoreRaw += 8;
  if (state.threat === "deepfake") scoreRaw += 4;

  if (reputationOverride?.score) {
    scoreRaw = Math.max(scoreRaw, reputationOverride.score);
  }

  const score = Math.max(1, Math.min(99, Math.round(scoreRaw)));
  const sev = severityLabel(score);
  const riskLabel =
    sev === "critical" || sev === "high"
      ? translations[lang].riskHigh
      : sev === "medium"
      ? translations[lang].riskMedium
      : translations[lang].riskLow;

  ui.riskLevel.textContent = riskLabel;
  ui.riskLevel.className = `risk-level ${sev}`;
  ui.threatBadge.className = `panel-chip ${sev}`;
  ui.threatBadge.textContent = translations[lang].criticalThreat;

  const summary =
    sev === "critical" || sev === "high"
      ? translations[lang].summaryHigh
      : sev === "medium"
      ? translations[lang].summaryMedium
      : translations[lang].summaryLow;
  ui.riskSummary.textContent = summary;

  updateScoreRing(score);
  ui.severityValue.textContent = riskLabel;
  ui.confidenceMetricValue.textContent = `${state.confidence}%`;
  ui.lastUpdatedValue.textContent = getNowTime();

  const predictions = {
    critical: {
      title: translations[lang].predictionTitleHigh,
      text:
        lastStats?.phishing24h !== undefined
          ? `${translations[lang].predictionTextHigh} /stats: ${lastStats.phishing24h} phishing in 24h`
          : translations[lang].predictionTextHigh
    },
    high: {
      title: translations[lang].predictionTitleHigh,
      text:
        lastStats?.phishing24h !== undefined
          ? `${translations[lang].predictionTextHigh} /stats: ${lastStats.phishing24h} phishing in 24h`
          : translations[lang].predictionTextHigh
    },
    medium: {
      title: translations[lang].predictionTitleMedium,
      text: translations[lang].predictionTextMedium
    },
    low: {
      title: translations[lang].predictionTitleLow,
      text: translations[lang].predictionTextLow
    }
  };

  ui.predictionTitle.textContent = predictions[sev].title;
  ui.predictionText.textContent = predictions[sev].text;

  ui.explanationsList.innerHTML = "";
  buildExplanations(score, state.threat, reputationOverride?.hits7d || 0).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ui.explanationsList.appendChild(li);
  });

  ui.actionsList.innerHTML = "";
  buildActions(sev === "low" ? "low" : sev === "medium" ? "medium" : "high", state.threat).forEach(
    (item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ui.actionsList.appendChild(li);
    }
  );

  if (force) {
    pushIncident({
      time: getNowTime(),
      type: state.threat,
      asset: buildAssetName(state.threat),
      risk: sev === "critical" ? "high" : sev,
      status: "open"
    });
  }
};

const buildAssetName = (threat) => {
  if (threat === "phishing") return "mail-gw-0" + Math.ceil(Math.random() * 3);
  if (threat === "ransomware") return "srv-backup-0" + Math.ceil(Math.random() * 2);
  return "voice-gw-0" + Math.ceil(Math.random() * 2);
};

const applyServerResult = (result, threat) => {
  const lang = getLang();
  const sev = result.severity;
  const score = result.score;

  const riskLabel =
    sev === "high"
      ? translations[lang].riskHigh
      : sev === "medium"
      ? translations[lang].riskMedium
      : translations[lang].riskLow;

  ui.riskLevel.textContent = riskLabel;
  ui.riskLevel.className = `risk-level ${sev}`;
  ui.threatBadge.className = `panel-chip ${sev}`;
  ui.threatBadge.textContent = translations[lang].criticalThreat;

  ui.riskSummary.textContent = result.summary || translations[lang].summaryMedium;

  updateScoreRing(score);
  ui.severityValue.textContent = riskLabel;
  ui.confidenceMetricValue.textContent = `${ui.modelConfidence.value}%`;
  ui.lastUpdatedValue.textContent = getNowTime();

  ui.predictionTitle.textContent =
    sev === "high"
      ? translations[lang].predictionTitleHigh
      : sev === "medium"
      ? translations[lang].predictionTitleMedium
      : translations[lang].predictionTitleLow;

  ui.predictionText.textContent =
    sev === "high"
      ? translations[lang].predictionTextHigh
      : sev === "medium"
      ? translations[lang].predictionTextMedium
      : translations[lang].predictionTextLow;

  ui.explanationsList.innerHTML = "";
  (result.explanations || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ui.explanationsList.appendChild(li);
  });

  ui.actionsList.innerHTML = "";
  (result.actions || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ui.actionsList.appendChild(li);
  });

  pushIncident({
    time: getNowTime(),
    type: threat,
    asset: buildAssetName(threat),
    risk: sev === "high" ? "high" : sev === "medium" ? "medium" : "low",
    status: "open"
  });
};

const analyzeRemote = async () => {
  const lang = getLang();
  const state = gatherState();
  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        threat: state.threat,
        region: state.region,
        anomaly: state.anomaly,
        loginAttempts: state.login,
        confidence: state.confidence,
        signalText: ui.signalText.value
      })
    });
    if (!res.ok) throw new Error("api");
    const data = await res.json();
    applyServerResult(data, state.threat);
  } catch (e) {
    ui.riskSummary.textContent = "Живой анализ недоступен: нет ответа API";
    ui.riskLevel.textContent = translations[lang].riskLow;
    ui.riskLevel.className = "risk-level safe";
    ui.threatBadge.className = "panel-chip safe";
    ui.threatBadge.textContent = translations[lang].criticalThreat;
    ui.actionsList.innerHTML = "";
    ui.explanationsList.innerHTML = "";
  }
};

const signalToThreat = (signal) => {
  const map = {
    email: "phishing",
    identity: "phishing",
    network: "phishing",
    voice: "deepfake",
    endpoint: "ransomware",
    cloud: "ransomware",
    dns: "phishing",
    app: "phishing"
  };
  return map[signal] || "phishing";
};

const applyScenario = (scenario) => {
  incidents = [...scenarioPresets[scenario], ...baseIncidents];
  updateScenarioChips(scenario);
  updateHeroMedia(scenario);
  renderIncidents();
};

const resetForm = () => {
  ui.anomalyRate.value = 68;
  ui.anomalyValue.textContent = "68%";
  ui.loginAttempts.value = 14;
  ui.modelConfidence.value = 84;
  ui.confidenceValue.textContent = "84%";
  ui.signalText.value =
    "URGENT: reset your corporate password within 15 minutes to avoid account suspension.";
  clearReputationOverride();
  updateAnalysis(false);
};

const exportReport = () => {
  const state = gatherState();
  const blob = new Blob(
    [
      `CyberShield AI report\nTime: ${new Date().toISOString()}\nScore: ${ui.riskScore.textContent}\nThreat: ${state.threat}\nAnomaly: ${state.anomaly}\nConfidence: ${state.confidence}\nLogin attempts: ${state.login}\n`
    ],
    { type: "text/plain" }
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cybershield-report.txt";
  a.click();
  URL.revokeObjectURL(url);
};

const runHealthCheck = async () => {
  const lang = getLang();
  ui.apiHealth.textContent = translations[lang].apiLabel;
  try {
    const res = await fetch("/api/stats");
    if (!res.ok) throw new Error("api");
    ui.apiHealth.textContent = translations[lang].apiOk;
  } catch (e) {
    ui.apiHealth.textContent = translations[lang].apiFail;
  }
};

const loadStats = async () => {
  const lang = getLang();
  ui.metricPhishing.textContent = translations[lang].metricsLoading;
  try {
    const res = await fetch("/api/stats");
    if (res.ok) {
      const data = await res.json();
      lastStats = data;
      ui.metricPhishing.textContent = data.phishing24h ?? "—";
      ui.metricRansomware.textContent = "—";
      ui.metricMTTR.textContent = "—";
      updateAnalysis(false);
    } else {
      ui.metricPhishing.textContent = "—";
      ui.metricRansomware.textContent = "—";
      ui.metricMTTR.textContent = "—";
    }
  } catch {
    ui.metricPhishing.textContent = "—";
    ui.metricRansomware.textContent = "—";
    ui.metricMTTR.textContent = "—";
  }
};

const handleQuickScan = async (event) => {
  event.preventDefault();
  const lang = getLang();
  if (ui.scanFile.files?.length) {
    const file = ui.scanFile.files[0];
    const form = new FormData();
    form.append("file", file);
    ui.quickScanResult.textContent = "Проверка файла…";
    try {
      const res = await fetch("/api/scan/file", {
        method: "POST",
        body: form
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "scan error");
      reputationOverride = { score: data.score, hits7d: 0 };
      ui.quickScanResult.textContent = `File ${data.severity}: score ${data.score} (${data.source})`;
      updateAnalysis(true);
    } catch (e) {
      ui.quickScanResult.textContent = "Ошибка проверки файла или ключа API нет.";
      reputationOverride = null;
    }
    return;
  }

  const url = ui.scanUrl.value.trim();
  if (!url) return;
  ui.quickScanResult.textContent = "…";
  try {
    const res = await fetch("/api/scan/url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    reputationOverride = { score: data.score, hits7d: data.phishstatsHits7d ?? 0 };
    ui.quickScanResult.textContent = `${translations[lang].quickScanFound} ${data.score} (${data.phishstatsHits7d ?? 0} ${translations[lang].quickScanHits})`;
    updateAnalysis(true);
  } catch (e) {
    ui.quickScanResult.textContent = translations[lang].quickScanError;
    reputationOverride = null;
  }
};

const executeActions = () => {
  const lang = getLang();
  ui.actionsStatus.textContent = translations[lang].actionStatusRun;
  setTimeout(() => {
    ui.actionsStatus.textContent = translations[lang].actionStatusDone;
  }, 1200);
};

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};

// Event bindings
ui.languageSelect.addEventListener("change", (e) => setLanguage(e.target.value));

ui.anomalyRate.addEventListener("input", (e) => {
  ui.anomalyValue.textContent = `${e.target.value}%`;
  clearReputationOverride();
  updateAnalysis(false);
});

ui.modelConfidence.addEventListener("input", (e) => {
  ui.confidenceValue.textContent = `${e.target.value}%`;
  clearReputationOverride();
  updateAnalysis(false);
});

ui.loginAttempts.addEventListener("input", () => {
  clearReputationOverride();
  updateAnalysis(false);
});

ui.signalText.addEventListener("input", () => {
  clearReputationOverride();
  updateAnalysis(false);
});

ui.threatType.addEventListener("change", (e) => {
  clearReputationOverride();
  updateHeroMedia(e.target.value);
  updateScenarioChips(e.target.value);
  updateAnalysis(false);
});

ui.sourceRegion.addEventListener("change", updateAnalysis);

ui.analyzeDemoBtn.addEventListener("click", () => analyzeRemote());
ui.threatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  analyzeRemote();
});

ui.loadScenarioBtn.addEventListener("click", () => {
  const current = [...ui.scenarioChips].find((c) => c.classList.contains("active"))?.dataset
    .scenario;
  const next =
    current === "phishing" ? "ransomware" : current === "ransomware" ? "deepfake" : "phishing";
  applyScenario(next);
  updateAnalysis(false);
});

ui.exportReportBtn.addEventListener("click", exportReport);
ui.resetFormBtn.addEventListener("click", resetForm);
ui.runActionsBtn.addEventListener("click", executeActions);
ui.themeToggle.addEventListener("click", toggleTheme);
ui.quickScanForm.addEventListener("submit", handleQuickScan);

ui.scenarioChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    applyScenario(chip.dataset.scenario);
    updateAnalysis(false);
  });
});

ui.legendPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    activeSignal = pill.dataset.signal || pill.textContent.trim().toLowerCase().split("/")[0].split(" ")[0];
    ui.legendPills.forEach((p) => p.classList.toggle("active", p === pill));
    const threat = signalToThreat(activeSignal);
    setActiveSignalLabel(pill.textContent.trim());
    ui.threatType.value = threat;
    updateHeroMedia(threat);
    updateScenarioChips(threat);
    updateAnalysis(true);
  });
});

// Initial bootstrap
applyScenario("phishing");
setLanguage("ru");
updateHeroMedia("phishing");
renderIncidents();
updateAnalysis(false);
runHealthCheck();
loadStats();
analyzeRemote();
if (ui.legendPills.length) ui.legendPills[0].click();
