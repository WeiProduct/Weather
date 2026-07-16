// ===== i18n =====
const I18N = {
  'en': {
    skip: 'Skip to content',
    brandName: 'AI Weather',
    navHow: 'How it works', navFeatures: 'Features', navTry: 'Try it', navScreenshots: 'Screenshots', navFaq: 'FAQ', navGet: 'Get App',
    eyebrowHow: 'How it works', eyebrowFeatures: 'Features', eyebrowTry: 'Interactive demo', eyebrowShots: 'Screens', eyebrowPrivacy: 'Privacy', eyebrowCompare: 'Why AI Weather', eyebrowFaq: 'FAQ',
    heroEyebrow: '✦ AI-powered weather',
    heroTitle: 'Let the weather plan your day',
    heroSubtitle: 'Check conditions, scan the forecast, manage your cities, and turn the weather into clear daily decisions — what to wear, when to go, what to prepare.',
    downloadBtn: 'Download on App Store', learnMore: 'Learn more',
    trust1: '📍 Permission-based location', trust2: '🌆 Multi-city', trust3: '🌏 EN / 中文',
    wxCity: 'San Francisco', wxAi: 'AI insight',
    wxCond: 'Partly Cloudy', wxRange: 'H:24°  L:15°',
    wxFeels: 'Feels', wxHum: 'Humidity', wxWind: 'Wind', wxNow: 'Now',
    wxFoot: 'Rain likely around 4 PM · bring an umbrella',
    chipA: '☂️ Rain at 4 PM', chipB: '🧥 Light jacket',
    proofRating: 'Weather · Lifestyle',
    stat1: 'Native app', stat2: 'Forecast outlook', stat3: 'Bilingual UI', stat4: 'Ads · Accounts',
    howTitle: 'Three steps to a weather-ready day', howSub: 'From forecast to a real decision in seconds.',
    step1Title: 'Add your cities', step1Desc: 'Add your home city and anywhere you travel, and grant location for instant local weather.',
    step2Title: 'Check conditions & forecast', step2Desc: 'See current weather, hourly changes, and the multi-day outlook at a single glance.',
    step3Title: 'Plan with confidence', step3Desc: 'Turn the forecast into decisions: what to wear, when to head out, what to prepare.',
    personasTitle: 'Made for your kind of day',
    persona1T: 'Commuters', persona1D: 'Hourly changes decide when you leave.',
    persona2T: 'Travelers', persona2D: 'Keep every destination city one swipe away.',
    persona3T: 'Family planners', persona3D: 'Watch the weather where your people are.',
    persona4T: 'Outdoor movers', persona4D: 'Find the dry, cool window for your run.',
    featuresTitle: 'Everything you need to read the sky', featuresSub: 'A practical weather surface, not just a list of numbers.',
    feature1Title: 'Current conditions', feature1Desc: 'Temperature, condition, feels-like, and the context you need first — all up front.',
    feature2Title: 'Hourly & multi-day forecast', feature2Desc: 'Scan short-term changes hour by hour and plan several days ahead with a clear outlook.',
    feature3Title: 'City management', feature3Desc: 'Save multiple locations for home, travel, and family, and switch between them instantly.',
    feature4Title: 'Practical guidance', feature4Desc: 'Clothing tips, weather alerts, and preparation cues turned from raw conditions.',
    feature5Title: 'Bilingual interface', feature5Desc: 'Full English and Simplified Chinese, with a one-tap switch anytime you like.',
    feature6Title: 'Privacy-minded', feature6Desc: 'Location is permission-based and used only to fetch weather — no account, no ads.',
    tryTitle: 'From forecast to decision — try it', trySub: 'Pick a sky. This is what AI Weather does with every forecast.',
    tryScSun: 'Sunny 28°', tryScRain: 'Rain at 4 PM', tryScWind: 'Windy 12°', tryScCold: 'Cold snap −2°',
    tryWear: 'Wear', tryBring: 'Bring', tryTime: 'Timing',
    trySunWear: 'Light, breathable layers + sunscreen', trySunBring: 'Sunglasses and a water bottle', trySunTime: 'Best outdoor window: before noon',
    tryRainWear: 'Waterproof shoes — skip the suede', tryRainBring: 'Umbrella before 3:30 PM', tryRainTime: 'Head out before the 4 PM rain',
    tryWindWear: 'Windbreaker over a warm layer', tryWindBring: 'Zip your pockets, hold your hat', tryWindTime: 'Calmer air before 10 AM',
    tryColdWear: 'Heavy coat, gloves and a scarf', tryColdBring: 'Lip balm and a warm drink', tryColdTime: 'Warmest stretch: 1–3 PM',
    screenshotsTitle: 'Real app screens', screenshotsSub: 'Swipe through — tap any shot to zoom in.',
    shot1: 'Current conditions at a glance', shot2: 'Deeper weather details', shot3: 'Hourly & multi-day forecast', shot4: 'Manage all your cities', shot5: 'Units & preferences', shot6: 'Switch language anytime',
    dayEyebrow: 'One day, four glances', dayTitle: 'A day with AI Weather', daySub: 'Four quick glances, zero weather surprises.',
    dayT1: '7:30 AM', dayC1: 'Glance at conditions before getting dressed.',
    dayT2: '8:15 AM', dayC2: 'Hourly view picks your commute window.',
    dayT3: '3:40 PM', dayC3: 'Rain cue: grab the umbrella before you leave.',
    dayT4: '9:00 PM', dayC4: 'Scan the 7-day outlook, plan tomorrow.',
    privacyTitle: 'Location is used for weather — with your permission',
    privacyDesc: 'Weather needs location. AI Weather asks first, uses it only to fetch forecasts from weather providers, and you stay in control — change or revoke access anytime in Settings. No account required.',
    pp1: 'Permission-based location', pp2: 'Revoke anytime in Settings', pp3: 'No account needed', pp4: 'No ads, no tracking',
    cmpTitle: 'Numbers everywhere. Decisions here.', cmpSub: 'What you actually get when you check the weather.',
    cmpCap: 'What you get', cmpColA: 'Checking a browser', cmpColB: 'Typical weather widget', cmpColC: 'AI Weather',
    cmpRow1: 'Hourly & 7-day numbers', cmpRow2: 'What to wear / bring', cmpRow3: 'Multiple cities in one place', cmpRow4: 'EN / 中文 one-tap switch', cmpRow5: 'No account, no ads',
    cmpYes: 'Yes', cmpNo: 'No', cmpPart: 'Partly',
    faqTitle: 'Frequently Asked Questions',
    q1: 'Does AI Weather need an internet connection?', a1: 'Yes. Weather data is fetched from weather providers, so a connection is needed to refresh current conditions and forecasts.',
    q2: 'How is my location used?', a2: 'Location is permission-based and used only to retrieve weather for your area. You can deny, change, or revoke access anytime in system Settings.',
    q3: 'Can I track more than one city?', a3: 'Yes. Add and manage multiple cities for home, travel, and family, and switch between them at any time.',
    q4: 'Do I need to create an account?', a4: 'No. AI Weather works without sign-up or account creation.',
    q5: 'Which languages does AI Weather support?', a5: 'AI Weather offers a bilingual interface in English and Simplified Chinese, and you can switch anytime.',
    downloadTitle: 'Download AI Weather', downloadSubtitle: 'Make the forecast work for your day.', downloadNote: 'Free on the App Store · for iOS',
    footerRights: 'AI Weather. All rights reserved.', footerMadeBy: 'Built by WeiProduct',
    footerTag: 'Weather, turned into decisions.', footerExplore: 'Explore', footerLegal: 'Legal & contact',
    footerPrivacy: 'Privacy', footerSupport: 'Support', footerTerms: 'Terms',
    stickySub: 'Forecasts & planning · Free', stickyGet: 'Get'
  },
  'zh-CN': {
    skip: '跳到主要内容',
    brandName: 'AI 天气',
    navHow: '使用流程', navFeatures: '功能特点', navTry: '在线体验', navScreenshots: '应用截图', navFaq: '常见问题', navGet: '获取 App',
    eyebrowHow: '使用流程', eyebrowFeatures: '功能特点', eyebrowTry: '互动演示', eyebrowShots: '应用截图', eyebrowPrivacy: '隐私', eyebrowCompare: '为什么选 AI 天气', eyebrowFaq: '常见问题',
    heroEyebrow: '✦ AI 驱动的天气助手',
    heroTitle: '让天气帮你规划这一天',
    heroSubtitle: '查看实况、浏览预报、管理城市，把天气变成清晰的日常决定——穿什么、几点出门、要准备什么。',
    downloadBtn: 'App Store 下载', learnMore: '了解更多',
    trust1: '📍 定位需授权', trust2: '🌆 多城市', trust3: '🌏 中英双语',
    wxCity: '旧金山', wxAi: 'AI 提示',
    wxCond: '多云转晴', wxRange: '高:24°  低:15°',
    wxFeels: '体感', wxHum: '湿度', wxWind: '风速', wxNow: '现在',
    wxFoot: '约下午 4 点可能有雨 · 记得带伞',
    chipA: '☂️ 下午 4 点有雨', chipB: '🧥 建议穿外套',
    proofRating: '天气 · 生活工具',
    stat1: '原生应用', stat2: '预报展望', stat3: '双语界面', stat4: '广告 · 账号',
    howTitle: '三步开启看天气的一天', howSub: '从预报到实际决定，只需几秒。',
    step1Title: '添加你的城市', step1Desc: '添加常住城市和旅行目的地，授权定位即可获取本地天气。',
    step2Title: '查看实况与预报', step2Desc: '实况天气、逐时变化和多日展望，一眼看全。',
    step3Title: '从容规划每一天', step3Desc: '把预报变成决定：穿什么、几点出门、要准备什么。',
    personasTitle: '为你的一天而生',
    persona1T: '通勤族', persona1D: '逐时变化决定你几点出门。',
    persona2T: '旅行者', persona2D: '目的地城市一滑即达。',
    persona3T: '牵挂家人', persona3D: '随时看家人所在城市的天气。',
    persona4T: '户外爱好者', persona4D: '找到干爽凉快的运动窗口。',
    featuresTitle: '看懂天气所需的一切', featuresSub: '实用的天气界面，而不只是一堆数字。',
    feature1Title: '实时天气', feature1Desc: '温度、天气状况、体感温度和你最需要的关键信息，一开始就呈现。',
    feature2Title: '逐时与多日预报', feature2Desc: '逐小时查看短期变化，也能提前规划未来数天的天气走势。',
    feature3Title: '城市管理', feature3Desc: '保存常住、旅行和家人所在的多个城市，随时快速切换。',
    feature4Title: '实用建议', feature4Desc: '把天气状况转化为穿衣提示、天气提醒和出行准备建议。',
    feature5Title: '中英双语', feature5Desc: '完整支持中文和英文界面，随时一键切换。',
    feature6Title: '注重隐私', feature6Desc: '定位需你授权，且仅用于获取天气——无需账号，没有广告。',
    tryTitle: '从预报到决定——试试看', trySub: '选一种天气。这就是 AI 天气对每份预报做的事。',
    tryScSun: '晴 28°', tryScRain: '下午 4 点有雨', tryScWind: '大风 12°', tryScCold: '降温 −2°',
    tryWear: '穿什么', tryBring: '带什么', tryTime: '出行时机',
    trySunWear: '轻薄透气穿搭 + 防晒', trySunBring: '太阳镜和水杯', trySunTime: '最佳户外时段：中午前',
    tryRainWear: '防水鞋——别穿麂皮', tryRainBring: '3:30 前带伞出门', tryRainTime: '赶在下午 4 点降雨前出门',
    tryWindWear: '保暖内搭 + 防风外套', tryWindBring: '拉好口袋，按住帽子', tryWindTime: '上午 10 点前风更小',
    tryColdWear: '厚外套、手套和围巾', tryColdBring: '润唇膏和一杯热饮', tryColdTime: '最暖时段：13–15 点',
    screenshotsTitle: '真实应用截图', screenshotsSub: '左右滑动，点击可放大查看。',
    shot1: '实况天气一目了然', shot2: '更深入的天气详情', shot3: '逐时与多日预报', shot4: '管理你的所有城市', shot5: '单位与偏好设置', shot6: '随时切换语言',
    dayEyebrow: '一天四次，看一眼就够', dayTitle: '与 AI 天气的一天', daySub: '一天看四眼，天气不突袭。',
    dayT1: '早上 7:30', dayC1: '出门穿衣前先看一眼实况。',
    dayT2: '上午 8:15', dayC2: '逐时预报帮你选好通勤时段。',
    dayT3: '下午 3:40', dayC3: '降雨提示：出发前记得带伞。',
    dayT4: '晚上 9:00', dayC4: '浏览 7 天展望，规划明天。',
    privacyTitle: '定位仅用于获取天气，且需你授权',
    privacyDesc: '天气服务需要定位。AI 天气会先征得同意，仅用它向天气服务商获取预报，你随时可在设置中更改或撤销权限。无需账号。',
    pp1: '定位需授权', pp2: '随时在设置中撤销', pp3: '无需注册账号', pp4: '无广告 · 无追踪',
    cmpTitle: '数字到处都有，决定只在这里。', cmpSub: '看天气时，你真正能得到什么。',
    cmpCap: '你得到什么', cmpColA: '随手网页搜', cmpColB: '普通天气小组件', cmpColC: 'AI 天气',
    cmpRow1: '逐时与 7 天数据', cmpRow2: '穿什么 / 带什么', cmpRow3: '多城市集中管理', cmpRow4: '中英一键切换', cmpRow5: '无账号 · 无广告',
    cmpYes: '支持', cmpNo: '不支持', cmpPart: '部分支持',
    faqTitle: '常见问题',
    q1: 'AI 天气需要联网吗？', a1: '需要。天气数据来自天气服务商，因此刷新实况和预报时需要联网。',
    q2: '我的定位会被如何使用？', a2: '定位需你授权，且仅用于获取你所在区域的天气。你可随时在系统设置中拒绝、更改或撤销。',
    q3: '可以关注多个城市吗？', a3: '可以。你可以添加并管理常住、旅行和家人所在的多个城市，随时切换。',
    q4: '需要注册账号吗？', a4: '不需要。AI 天气无需注册或创建账号即可使用。',
    q5: 'AI 天气支持哪些语言？', a5: 'AI 天气提供中文和英文双语界面，可随时切换。',
    downloadTitle: '立即下载 AI 天气', downloadSubtitle: '让预报为你的一天服务。', downloadNote: 'App Store 免费下载 · 适用于 iOS',
    footerRights: 'AI 天气. 保留所有权利。', footerMadeBy: 'Built by WeiProduct',
    footerTag: '把天气变成决定。', footerExplore: '页面导航', footerLegal: '法律与联系',
    footerPrivacy: '隐私政策', footerSupport: '支持', footerTerms: '条款',
    stickySub: '预报与规划 · 免费', stickyGet: '获取'
  }
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'en';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-switch').forEach(b => { b.textContent = currentLang === 'en' ? '中文' : 'EN'; });
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
  renderTryCards(false);
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  applyLang(saved);
}

// ===== Try-it scenario demo =====
let tryScenario = 'Sun';

function renderTryCards(animate) {
  const t = I18N[currentLang];
  document.querySelectorAll('#tryGrid .try-card').forEach(card => {
    const out = card.querySelector('.try-out');
    if (!out) return;
    const key = 'try' + tryScenario + card.getAttribute('data-slot');
    if (t[key] !== undefined) out.textContent = t[key];
    if (animate) { card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap'); }
  });
}

function initTryDemo() {
  const chips = document.querySelectorAll('.try-chip');
  if (!chips.length) return;
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      tryScenario = chip.getAttribute('data-scenario');
      chips.forEach(c => {
        const on = c === chip;
        c.classList.toggle('active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      renderTryCards(true);
    });
  });
  renderTryCards(false);
}

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0f1a' : '#1769ff');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
function initTheme() {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
}

// ===== Gallery =====
function initGallery() {
  const track = document.getElementById('galTrack');
  if (!track) return;
  const shots = Array.from(track.children);
  const dotsWrap = document.getElementById('galDots');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  shots.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'screenshot ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => shots[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function activeIndex() {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    shots.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - c);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  track.addEventListener('scroll', () => {
    const i = activeIndex();
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }, { passive: true });

  const step = () => (shots[1] ? shots[1].offsetLeft - shots[0].offsetLeft : 300);
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="close">&times;</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const close = () => lb.classList.remove('open');
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  track.querySelectorAll('.phone').forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img');
      lbImg.src = img.src; lbImg.alt = img.alt;
      lb.classList.add('open');
    });
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's'; io.observe(el); });
}

// ===== Nav + sticky =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const progress = document.getElementById('scrollProgress');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initTryDemo();
  initGallery();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  ['langSwitch', 'langSwitchFooter'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.addEventListener('click', () => applyLang(currentLang === 'en' ? 'zh-CN' : 'en'));
  });
  ['themeToggle', 'themeToggleFooter'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});
