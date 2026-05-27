/* ============================================================
   Yoon Hyeri · Sound Design Portfolio
   ============================================================ */

/* ============== DATA ============== */
// 회사별 요약 정보
const COMPANY_DATA = {
  baka: {
    name: 'Studio BAKA',
    period: '2021.07 — 2024.01 · 2Y 6M',
    role: 'Sound Designer',
    summary: [
      {
        title: '주요 경험',
        items: [
          '사업 제안 음향 파트 기획',
          '현장 녹음 및 장비 구축',
          '멀티채널 사운드 디자인',
          '선곡 및 음악 편집, 믹싱'
        ]
      },
      {
        title: '주요 성과 및 실적',
        items: [
          '프로젝트 전반의 사운드 파트 담당, 다수 프로젝트 완수',
          '다양한 파트와 원활한 협업 진행',
          '회사 설립 초기 합류, 스튜디오 구축 및 운영 매뉴얼 제작 주도'
        ]
      }
    ],
    projects: [
      { name: '미디어아트 《공명의 시간》', year: '2023', category: 'Media Art' },
      { name: '전시 《사라지는 경계》', year: '2023', category: 'Exhibition' },
      { name: '미디어파사드 《빛의 결》', year: '2023', category: 'Media Facade' },
      { name: '몰입형 전시 《Connection》', year: '2022', category: 'Exhibition' },
      { name: '브랜드 프로모션 영상', year: '2022', category: 'Promotion' },
      { name: '인터랙티브 콘텐츠 《숨》', year: '2022', category: 'Interactive' },
      { name: '사운드 라이브러리 v1', year: '2022', category: 'Library' },
      { name: '오디오북 《달의 노래》', year: '2022', category: 'Audio Book' },
      { name: '전시 《깊은 숲의 소리》', year: '2022', category: 'Exhibition' },
      { name: '미디어아트 《빛과 소리》', year: '2021', category: 'Media Art' },
      { name: '단편 영화 《여름의 끝》', year: '2021', category: 'Film' },
      { name: '광고 《Re:born》', year: '2021', category: 'Commercial' },
      { name: '사운드 라이브러리 v2', year: '2023', category: 'Library' },
      { name: '브랜드 사운드 로고', year: '2023', category: 'Branding' },
      { name: '전시 《기억의 결》', year: '2023', category: 'Exhibition' }
    ]
  },
  talkback: {
    name: 'Talkback Studio',
    period: '2019.07 — 2020.03 · 8M',
    role: 'Sound Operator',
    summary: [
      {
        title: '주요 경험',
        items: [
          '동시 녹음 오퍼레이팅',
          '예능, 드라마, 콘텐츠 현장 녹음 진행',
          '후반 작업을 위한 사운드 정리 및 전달'
        ]
      },
      {
        title: '주요 성과 및 실적',
        items: [
          '런닝맨, 범인은 바로 너 등 예능 프로그램 동시녹음 참여',
          '세븐틴, NCT 자체 콘텐츠 동시녹음 참여',
          '독립 영화 및 웹드라마 동시녹음 다수 진행'
        ]
      }
    ],
    projects: [
      { name: '런닝맨', year: '2019', category: '예능' },
      { name: '범인은 바로 너', year: '2019', category: '예능' },
      { name: '세븐틴 자체 콘텐츠', year: '2019', category: 'Content' },
      { name: 'NCT 자체 콘텐츠', year: '2019', category: 'Content' },
      { name: '독립 영화 《빛이 사라지면》', year: '2019', category: 'Film' },
      { name: '독립 영화 《여름밤》', year: '2020', category: 'Film' },
      { name: '웹드라마 《코너의 끝》', year: '2020', category: 'Drama' },
      { name: '웹드라마 《다음 정거장》', year: '2020', category: 'Drama' },
      { name: '단편 광고 영상', year: '2020', category: 'Commercial' }
    ]
  }
};

// 포트폴리오 15개 더미 데이터
const PORTFOLIO_DATA = [
  { id: 1,  title: "Dragon's Dogma 2",       cat: 'RPG / Trailer',         tags: ['rpg','trailer','unreal'] },
  { id: 2,  title: 'Black Myth: Wukong',     cat: 'RPG / Trailer',         tags: ['rpg','trailer','unreal'] },
  { id: 3,  title: 'Lies of P',              cat: 'RPG / Ingame',          tags: ['rpg','ingame','unreal'] },
  { id: 4,  title: 'Stellar Blade',          cat: 'Action / Ingame',       tags: ['ingame','unreal'] },
  { id: 5,  title: 'Ori and the Will of the Wisps', cat: 'Adventure / Ambience', tags: ['ingame'] },
  { id: 6,  title: 'P의 거짓 OST 작업',       cat: 'RPG / Music',           tags: ['rpg'] },
  { id: 7,  title: 'Mobile Game UI',         cat: 'Mobile / UI',           tags: ['ui','casual'] },
  { id: 8,  title: 'Horror Game Teaser',     cat: 'Horror / Trailer',      tags: ['horror','trailer'] },
  { id: 9,  title: 'Subculture Project A',   cat: 'Subculture / Ingame',   tags: ['subculture','ingame'] },
  { id: 10, title: 'Subculture Project B',   cat: 'Subculture / UI',       tags: ['subculture','ui'] },
  { id: 11, title: 'Casual Puzzle Game',     cat: 'Casual / UI',           tags: ['casual','ui'] },
  { id: 12, title: 'UE5 Tech Demo',          cat: 'Unreal / Trailer',      tags: ['unreal','trailer'] },
  { id: 13, title: 'Horror Short',           cat: 'Horror / Ingame',       tags: ['horror','ingame'] },
  { id: 14, title: 'RPG Cinematic',          cat: 'RPG / Trailer',         tags: ['rpg','trailer'] },
  { id: 15, title: 'Indie Casual Game',      cat: 'Casual / Ingame',       tags: ['casual','ingame'] }
];

/* ============== HELPERS ============== */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ============== NAV: scroll state + mobile toggle + active section ============== */
const nav = $('#nav');
const navToggle = $('#navToggle');
const navMenu = $('.nav__menu');
const navLinks = $$('.nav__link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 24) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
}, { passive: true });

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('is-open');
  navMenu.classList.toggle('is-open');
});
// 메뉴 클릭 시 모바일에서는 닫기
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('is-open');
    navMenu.classList.remove('is-open');
  });
});

// Active section by IntersectionObserver
const sections = ['profile','experience','portfolio','contact'].map(id => $('#' + id));
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.dataset.target === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
sections.forEach(s => s && sectionObserver.observe(s));

/* ============== REVEAL on scroll ============== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => revealObserver.observe(el));

// Intro 섹션 - 시야에서 벗어나면 다시 사라지도록 (재진입 시 다시 나타남)
const introSection = $('#intro');
if (introSection) {
  const introObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      introSection.classList.toggle('is-in', entry.isIntersecting);
    });
  }, { threshold: 0.35 });
  introObserver.observe(introSection);
}

/* ============== EXPERIENCE ============== */
const expEmpty   = $('#expEmpty');
const expSummary = $('#expSummary');
const expDetail  = $('#expDetail');
const expBack    = $('#expBack');
const expLayout  = $('#expLayout');
const expSummaryTitle = $('#expSummaryTitle');
const expSummaryBody  = $('#expSummaryBody');
const expProjectsList = $('#expProjectsList');
const expProjectsCount = $('#expProjectsCount');
const expDetailList   = $('#expDetailList');
const expDetailTitle  = $('#expDetailTitle');
const expDetailMeta   = $('#expDetailMeta');

let currentCompany = null;

function showPanel(which) {
  [expEmpty, expSummary, expDetail].forEach(p => p.hidden = true);
  which.hidden = false;
  // 디테일 모드일 때만 좌측 축소
  expLayout.classList.toggle('is-detail', which === expDetail);
}

function renderCompanySummary(companyKey) {
  const data = COMPANY_DATA[companyKey];
  currentCompany = companyKey;

  expSummaryTitle.textContent = data.name;
  // 본문 (주요 경험 / 주요 성과)
  expSummaryBody.innerHTML = data.summary.map(sec => `
    <div class="exp-section">
      <h4>${sec.title}</h4>
      <ul>${sec.items.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  `).join('');

  // 프로젝트 카드 그리드
  expProjectsCount.textContent = data.projects.length;
  expProjectsList.innerHTML = data.projects.map((p, idx) => `
    <button class="exp-project" data-project-idx="${idx}">
      <p class="exp-project__name">${p.name}</p>
      <p class="exp-project__year">${p.year}</p>
    </button>
  `).join('');

  // 회사 카드 active 상태 토글
  $$('.company-card').forEach(c => {
    c.classList.toggle('is-active', c.dataset.company === companyKey);
  });

  showPanel(expSummary);

  // 프로젝트 카드 클릭 바인딩
  $$('#expProjectsList .exp-project').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.projectIdx, 10);
      renderProjectDetail(companyKey, idx);
    });
  });
}

function renderProjectDetail(companyKey, projectIdx) {
  const data = COMPANY_DATA[companyKey];
  const project = data.projects[projectIdx];

  expDetailList.innerHTML = data.projects.map((p, idx) => `
    <button class="exp-detail__list-item ${idx === projectIdx ? 'is-active' : ''}" data-idx="${idx}">
      <p class="exp-detail__list-item-name">${p.name}</p>
      <p class="exp-detail__list-item-year">${p.year}</p>
    </button>
  `).join('');

  expDetailTitle.textContent = project.name;
  expDetailMeta.textContent  = `${project.category} · ${project.year}`;

  showPanel(expDetail);

  // 사이드 리스트 재바인딩
  $$('#expDetailList .exp-detail__list-item').forEach(item => {
    item.addEventListener('click', () => {
      renderProjectDetail(companyKey, parseInt(item.dataset.idx, 10));
    });
  });
}

// 회사 "자세히 보기" 버튼
$$('.company-card__btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    renderCompanySummary(btn.dataset.companyBtn);
  });
});
// 회사 카드 자체 클릭으로도 진입 가능
$$('.company-card').forEach(card => {
  card.addEventListener('click', () => {
    renderCompanySummary(card.dataset.company);
  });
});

// 디테일 → 요약으로 돌아가기
expBack.addEventListener('click', () => {
  if (currentCompany) showPanel(expSummary);
});

/* ============== PORTFOLIO ============== */
const pfFilter = $('#portfolioFilter');
const pfCards  = $('#portfolioCards');
const pfGrid   = $('#portfolioGrid');
const pfDetail = $('#portfolioDetail');
const pfBack   = $('#pfBack');

const pfTitle    = $('#pfTitle');
const pfCategory = $('#pfCategory');
const pfVideo    = $('#pfVideo');

function renderPortfolio(filter = 'all') {
  const list = filter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.tags.includes(filter));

  if (list.length === 0) {
    pfCards.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--color-text-mute);padding:48px 0;">해당 카테고리의 작업이 아직 없어요.</p>`;
    return;
  }

  pfCards.innerHTML = list.map(p => `
    <article class="pf-card" data-pf-id="${p.id}">
      <div class="pf-card__thumb">
        <span class="pf-card__thumb-label">THUMBNAIL</span>
      </div>
      <div class="pf-card__body">
        <h3 class="pf-card__title">${p.title}</h3>
        <p class="pf-card__cat">${p.cat}</p>
      </div>
    </article>
  `).join('');

  $$('.pf-card', pfCards).forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.pfId, 10);
      openPortfolioDetail(id);
    });
  });
}

function openPortfolioDetail(id) {
  const data = PORTFOLIO_DATA.find(p => p.id === id);
  if (!data) return;

  pfTitle.textContent = data.title;
  pfCategory.textContent = data.cat;

  // 영상 자리: 클릭 기반 재생, 자동재생 X
  // 실제 영상이 들어올 자리. data-* 속성에 URL을 주입하면 동작하도록 만듬
  pfVideo.innerHTML = `
    <div class="pf-video__placeholder">
      <div>
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.08)"/><path d="M10 8.5v7l6-3.5-6-3.5Z" fill="rgba(255,255,255,0.85)"/></svg>
        <div>VIDEO PLAYER</div>
        <small>YouTube · Vimeo · MP4 링크를 연결하세요</small>
      </div>
    </div>
  `;

  pfGrid.hidden = true;
  pfDetail.hidden = false;
  // 디테일 진입 시 섹션 최상단으로 스크롤
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closePortfolioDetail() {
  pfDetail.hidden = true;
  pfGrid.hidden = false;
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 필터
pfFilter.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  $$('.pill', pfFilter).forEach(p => p.classList.remove('is-active'));
  btn.classList.add('is-active');
  renderPortfolio(btn.dataset.filter);
});

pfBack.addEventListener('click', closePortfolioDetail);

// 초기 렌더링
renderPortfolio('all');
