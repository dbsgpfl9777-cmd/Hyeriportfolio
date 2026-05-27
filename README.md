# Yoon Hyeri · Sound Design Portfolio

사운드 디자이너 윤혜리의 포트폴리오 웹사이트입니다.
토스 디자인 가이드 철학(예측 가능성 / 사용자 자율성 / 짧고 능동적인 카피 / 일관성)을 기반으로 제작했어요.

## 폴더 구조

```
yoonhyeri-portfolio/
├── index.html          # 페이지 전체 마크업
├── css/
│   └── style.css       # 디자인 토큰 + 모든 스타일
├── js/
│   └── main.js         # 네비/스크롤/Experience/Portfolio 인터랙션
├── assets/
│   ├── images/         # 포트폴리오 썸네일 등 이미지
│   └── videos/         # 영상 파일 (또는 외부 링크로 대체 가능)
└── README.md
```

## 로컬에서 미리보기

별도 빌드 도구 없이 정적 파일로 만들어졌어요. 그냥 `index.html`을 브라우저로 열면 됩니다.
다만 일부 브라우저에서 `file://` 경로일 때 일부 동작이 제한될 수 있어서, 간단한 로컬 서버 사용을 권장해요.

```bash
# Python이 설치되어 있다면
python3 -m http.server 8080

# 또는 VS Code의 Live Server 확장 사용
```

이후 `http://localhost:8080` 으로 접속하면 됩니다.

## GitHub Pages 배포 방법

1. GitHub에서 새 리포지토리를 만들어요. (예: `yoonhyeri-portfolio`)
2. 이 폴더 안의 파일들을 그대로 업로드해요. (Web UI에서 드래그앤드롭 가능)
3. 리포지토리 페이지에서 **Settings → Pages** 로 이동해요.
4. **Source**를 `Deploy from a branch`로 두고, Branch는 `main`, 폴더는 `/ (root)`로 선택 후 저장.
5. 잠시 후 `https://<본인깃허브아이디>.github.io/yoonhyeri-portfolio/` 에서 접속할 수 있어요.

## 콘텐츠 수정 가이드

### 1) 프로필 정보 바꾸기
`index.html`에서 `<!-- PROFILE -->` 섹션을 찾아 텍스트를 직접 수정하면 돼요.

### 2) 경력 / 프로젝트 데이터 바꾸기
`js/main.js` 상단의 `COMPANY_DATA` 객체를 수정해요. 각 회사의 `summary`(주요 경험/주요 성과)와 `projects` 배열을 자유롭게 늘리고 줄일 수 있어요.

### 3) 포트폴리오 작업 추가/수정
`js/main.js`의 `PORTFOLIO_DATA` 배열에서 항목을 수정해요. `tags` 배열에 들어가는 값(`'rpg'`, `'trailer'` 등)이 필터와 연결돼요.

### 4) 썸네일 이미지 넣기
`assets/images/` 폴더에 이미지(예: `dragon-dogma.jpg`)를 넣고, `js/main.js`의 `renderPortfolio` 함수 안의 `.pf-card__thumb` 부분을 아래처럼 바꿔주세요.

```html
<div class="pf-card__thumb" style="background-image:url('assets/images/dragon-dogma.jpg');background-size:cover;background-position:center;"></div>
```

### 5) 영상 연결하기
포트폴리오 디테일 영상은 자동재생되지 않고, 사용자가 클릭해서 재생하는 구조예요.
`js/main.js`의 `openPortfolioDetail` 함수에서 `pfVideo.innerHTML` 부분을 아래 중 하나로 바꿔주세요.

**YouTube 임베드**
```html
<iframe src="https://www.youtube.com/embed/영상ID" allowfullscreen></iframe>
```

**Vimeo 임베드**
```html
<iframe src="https://player.vimeo.com/video/영상ID" allowfullscreen></iframe>
```

**MP4 직접 재생**
```html
<video src="assets/videos/내영상.mp4" controls preload="metadata"></video>
```

### 6) 연락처 정보
`index.html`의 `<!-- CONTACT -->` 섹션에서 전화번호, 이메일, 외부 링크를 수정해요.
- Resume PDF: `<a class="contact__item contact__item--accent" href="여기에 PDF 경로" download>` 형태로 연결
- 이력서 파일은 `assets/` 폴더 안에 넣고 `assets/이력서.pdf` 처럼 경로를 적어주면 다운로드 가능

## 디자인 시스템 요약

| 항목 | 값 |
| --- | --- |
| Main Blue | `#0064FF` |
| Background | `#F7F8FA` |
| Card | `#FFFFFF` |
| Text | `#191F28` |
| Card Radius | `24px` |
| Card Padding | `32px` |
| Shadow | `0 2px 8px rgba(15, 23, 42, 0.04)` |
| Font | Pretendard Variable |

## 반응형 대응

- 데스크탑 (1200px 이상): 4열 포트폴리오, 사이드 30/70 Experience 레이아웃
- 태블릿 (960px 이하): 2열 포트폴리오, 1열 Experience, 햄버거 메뉴 전환
- 모바일 (560px 이하): 1열, 카드 패딩 축소, 폰트 사이즈 조정

## 기술 스택

- HTML5 / CSS3 / Vanilla JavaScript
- 외부 라이브러리 없음 (Pretendard 폰트 CDN만 사용)
- 빌드 도구 없음

가벼우면서도 빠르게 동작해요. GitHub Pages, Netlify, Vercel 어디든 그대로 올리면 됩니다.
