# 📆 [Paywork] Monthly Calendar Component

- **개요**: 오늘 날짜와 선택된 날짜를 표시하며, 월 단위로 버튼 조작이 가능한 달력 컴포넌트
- **사용된 기술스택**: React.js, Redux, styled-components, Moment.js

---

## 🏠 배포 주소

### <a href="https://ha3158987.github.io/Paywork_Calendar/" target="_blank">✨ 배포링크 ✨</a>

---

## 🛠 설치 및 실행방법

1. git 클론

```javascript
git clone https://github.com/ha3158987/Paywork_Calendar.git
```

2. paywork-calendar 디렉토리 진입 후 의존성 패키지 설치

```javascript
yarn install
```

3. 실행

```javascript
yarn start
```

---

## 📋 구현 목록

### 필수기능·요구사항

- [x] create-react-app을 사용합니다.
- [x] 외부 UI 라이브러리는 일체 사용하지 않습니다.(단, Sass, styled-components 계열과 UI 이외 moment 등 은 가능)
- [x] calendar 컴포넌트의 크기는 width 430px, height 460px 입니다.
- [x] 첫 렌더에서 오늘 날짜에 해당하는 월 캘린더를 보여줍니다.
- [x] 날짜는 배열로 관리합니다.
- [x] 각 날짜를 선택 가능하며, focus 날짜는 배경색 생깁니다.
- [x] 오늘 날짜는 항상 배경색이 존재합니다.
- [x] 월 캘린더에서 해당 달이 아닌 날짜도 띄워주되 다른 색상으로 처리 합니다.
- [x] 월 캘린더에서 해당 달이 아닌 날짜를 선택하면, 그 달로 넘어갑니다.
- [x] 화살표로 월을 바꿉니다.
- [x] 이번 달로 돌아오는 버튼이 있습니다.

### 추가기능·요구사항

- [x] 함수형 컴포넌트를 사용해 React의 Hooks를 기반으로 개발하였습니다.
- [x] 캘린더 조작 버튼(`<`, `>`, `이번달`)과 `DatesOfMonth`(N일)를 별도의 컴포넌트로 분리하였습니다.
- [x] 추상화된 `Button.jsx` 컴포넌트를 통해 버튼의 재사용성을 높이고자 하였습니다.
- [x] Custom Hook(`useCalendar.js`)을 만들어 캘린더의 기능을 분리하였습니다.
- [x] Redux를 통해 전역상태를 관리하고, Props Drilling을 방지하였습니다.
- [x] 배포를 진행하였습니다.

---

## 🗂 디렉토리 구조

- 모든 디렉토리는 추후 프로젝트의 확장가능성을 고려해 복수형(s)으로 네이밍하였습니다.

### Components

![image](https://user-images.githubusercontent.com/65105537/133948660-052acf99-ec6d-4f84-9096-4c96834929f8.png)

- `Calendar`: 캘린더를 구성하는 컴포넌트들이 포함됩니다.
- `Common`: 범용성이 있으며 재사용이 가능한 컴포넌트가 포함됩니다.

### Hooks

- Custom Hook이 포함됩니다. 캘린더 데이터를 구성하는 함수들을 하나의`useCalendar`라는 Custom Hook으로 구현하였습니다.

### ReduxStore

- `Modules`: 전역으로 관리되어야 하는 상태의 `initial state`, `action`생성함수, `reducer`함수를 포함한 파일이 하나의 모듈로서 저장됩니다.
- `Helpers`: 모듈 내의 복잡한 로직이나 반복되는 로직을 별도의 파일로 분리하여 가독성을 높였습니다. `Helper` > `calendar.js`는 `Modules` > `calendar.js` 모듈 정의를 돕는 역할을 합니다.

### Styles

- Global하게 적용되는 style파일이 포함됩니다.

---

## 🌳 Git 사용전략

### Branching 전략

- `develop` 브랜치

  - 배포 전 개발단계에서 사용되는 브랜치입니다.
  - 기능 개발이 완료되면 pull request를 통해 `develop`브랜치로 merge 합니다.
  - merge된 이후 임시브랜치 삭제와 관련 issue 자동 삭제 기능 사용을 위해 `develop`브랜치를 **default**로 설정하였습니다.

- 임시 브랜치
  - 기능 개발을 위해 임시로 만들어진 브랜치입니다.
  - `feat/...`, `fix/...` 등 커밋타입 + 구현하는 기능명의 조합으로 브랜치명을 설정해 브랜치의 목적을 명확히 알 수 있게 하였습니다. ex) `feat/calendarUI`

### Issue 관리 전략

- 작업 시작 전 기능단위로 issue를 발행하였습니다.
- 발행된 issue번호는 `#issue번호`로 관련 커밋 메세지에 포함시켜 어떤 기능에 관한 커밋인지 알 수 있게 하였습니다. ex) `feat: 초기 개발 환경 설정 (#1)`
- pull request 발행시에도 본문에 issue번호를 포함하여 어떤 기능 구현이 완료되었는 지 알 수 있게 하였습니다. ex)`Close #1`

### 기타

- issue와 pull request에 Template을 설정해 일관된 형식으로 편리하게 작성할 수 있도록 하였습니다.

---

## 🙋🏻‍♀️ 회고

본 과제를 진행하며 새롭게 배우고 느낀점과 설계과정을 기록하였습니다. <br>
아래 링크를 클릭하시면 해당 포스팅을 보실 수 있습니다.

### <a href="https://velog.io/@grinding_hannah/TIL-%EB%8B%AC%EB%A0%A5-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-%ED%9A%8C%EA%B3%A0%EB%A1%9D" target="_blank">🖋 포스팅 보러가기 🖋</a>
