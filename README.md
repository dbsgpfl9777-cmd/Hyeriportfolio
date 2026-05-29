# Yoon Hyeri · Sound Design Portfolio

사운드 디자이너 윤혜리의 포트폴리오 웹사이트입니다.

## 폴더 구조

```
yoonhyeri-portfolio/
├── index.html          # 페이지 골격
├── css/style.css       # 디자인 토큰 + 모든 스타일
├── js/main.js          # 데이터 + 인터랙션
├── assets/images/      # 포트폴리오 이미지 (여기에 파일 업로드)
├── assets/videos/      # 영상 파일 (혹은 외부 링크 사용)
└── README.md
```

## 콘텐츠 수정 가이드 ✏️

콘텐츠는 거의 다 `js/main.js`의 **상단 데이터 영역**에서 수정해요.

---

### 1) Experience 프로젝트 수정

`js/main.js`의 `COMPANY_DATA` 안에서 회사별 `projects` 배열을 수정해요.

```javascript
{
  name:     '프로젝트 이름',
  year:     '2023',
  category: 'Sound Library',
  intro:    '프로젝트 소개 글입니다.\n줄바꿈도 가능해요.',
  output:   [
    '결과물 1',
    '결과물 2',
    { text: '관련 링크 텍스트', url: 'https://example.com' }
  ],
  role:     '내가 맡은 역할을 적어요.'
}
```

#### 산출물 결과에 링크 넣기

`output` 배열 안에 일반 글과 링크를 자유롭게 섞을 수 있어요.

- **일반 글** → `'그냥 문자열'`
- **링크** → `{ text: '보이는 글자', url: '실제 주소' }`

링크는 자동으로 블루 + 화살표 아이콘으로 표시되고, 새 탭에서 열려요.

#### 줄바꿈

`\n` 을 넣으면 줄바꿈돼요. 예: `'첫 줄.\n둘째 줄.'`

---

### 2) Portfolio 작업 수정

`js/main.js`의 `PORTFOLIO_DATA` 배열을 수정해요.

```javascript
{
  id:       1,
  title:    'Lies of P',
  cat:      'RPG / Ingame',
  tags:     ['rpg', 'ingame', 'unreal'],
  video:    'https://youtu.be/영상ID',
  meta: {
    period: '2023.01 ~ 2024.03',
    engine: 'Unreal Engine 5',
    tools:  'Pro Tools, Wwise, Dolby Atmos'
  },
  sections: {
    introduction: [
      { type: 'text',  value: '소개 글입니다.' },
      { type: 'image', src: 'assets/images/intro-1.jpg', alt: '인트로 이미지' }
    ],
    ambience:  [ { type: 'text', value: '...' } ],
    voice:     [ { type: 'text', value: '...' } ],
    sfx:       [ { type: 'text', value: '...' } ],
    ui:        [ { type: 'text', value: '...' } ]
  }
}
```

#### 영상 연결하기

`video` 필드에 주소를 그대로 넣으면 자동으로 임베드돼요.

- `https://www.youtube.com/watch?v=abc123` (유튜브 일반 주소) OK
- `https://youtu.be/abc123` (단축 주소) OK
- `https://vimeo.com/123456789` (Vimeo) OK
- `''` (빈 값) → placeholder 표시

#### 섹션 안에 글 + 이미지 같이 넣기

각 섹션(introduction/ambience/voice/sfx/ui)은 **배열**입니다. 글과 이미지를 자유롭게 섞어 쓸 수 있어요.

```javascript
introduction: [
  { type: 'text',  value: '첫 번째 글입니다.\n줄바꿈도 됩니다.' },
  { type: 'image', src: 'assets/images/screenshot-1.png', alt: '스크린샷 설명' },
  { type: 'text',  value: '이미지 아래 추가 설명입니다.' },
  { type: 'image', src: 'assets/images/screenshot-2.png', alt: '두 번째 이미지' }
]
```

이미지는 `assets/images/` 폴더에 파일을 올린 뒤 `src`에 경로를 적으면 돼요.

비어있는 섹션 (`[]`)은 자동으로 "세부 내용은 추후 추가됩니다."로 표시돼요.

#### 필터 태그

`tags` 배열의 값이 화면 위쪽 필터 버튼과 매칭돼요.

사용 가능: `trailer`, `ingame`, `ui`, `casual`, `subculture`, `rpg`, `horror`, `unreal`

---

### 3) 그 외 자주 수정하는 것

| 무엇을 | 어디서 |
| --- | --- |
| Landing 이름 | `index.html` |
| Intro 문구 | `index.html` |
| Profile 본인정보 | `index.html` |
| Skills 항목 | `index.html` |
| 회사 정보 (회사명, 기간 등) | `js/main.js` (`COMPANY_DATA` 상단) |
| 연락처 (전화/이메일) | `index.html` |
| 색상 | `css/style.css` (맨 위 `:root`) |

---

## GitHub에서 수정하는 방법

1. GitHub 리포지토리 → 수정할 파일 클릭 (예: `js/main.js`)
2. 우측 상단 **✏️ 연필 아이콘** 클릭
3. 텍스트 수정
4. 화면 아래 **`Commit changes`** 클릭
5. 1~2분 뒤 사이트 자동 반영 → 새로고침

## 로컬에서 미리보기

```bash
python3 -m http.server 8080
```

이후 `http://localhost:8080` 으로 접속.

## 디자인 시스템 요약

| 항목 | 값 |
| --- | --- |
| Main Blue | `#0064FF` |
| Background | `#F7F8FA` |
| Card | `#FFFFFF` |
| Text | `#191F28` |
| Card Radius | `24px` |
| Font | Pretendard Variable |
