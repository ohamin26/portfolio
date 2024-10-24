# 📺 나만의 블로그

- 배포 URL : [https://ohamin26.netlify.app](https://ohamin26.netlify.app)

<br>

## 프로젝트 소개

- 📑 이 프로젝트는 저에 대한 정보와 제가 진행한 프로젝트에 대한 내용을 담고 있습니다.
- 💻 노션 웹페이지를 참고하여 웹 페이지 형식으로 제작하였습니다.
- 👍 웹 페이지에 최적화 되어있습니다. 웹 페이지에서 보는 것을 권장합니다.

<div align="center">

<img src="https://github.com/ohamin26/portfolio/assets/113972482/7074a634-87f3-4cf3-a304-03d77642b87f"> | | <img src="https://github.com/ohamin26/portfolio/assets/113972482/91354c0d-026f-47ec-a44f-74e892b43306">
--- |  --- | --- |

![skill - 복사본](https://github.com/ohamin26/portfolio/assets/113972482/bc89127f-1b02-4b9e-aa25-7aa518a2057a) |  | ![project_detail](https://github.com/ohamin26/portfolio/assets/113972482/b121819f-c52c-4106-b5ce-76368d1a7ba5)
--- | --- | --- |

</div>
<br>

## 팀원 구성

<div>

| **오하민** | 
| :------: |  
| [<img width="140px" src="https://avatars.githubusercontent.com/u/113972482?v=4" height=150 width=150> <br/> @ohamin26](https://github.com/ohamin26) | 

</div>

<br>

## 1. 개발 환경

- 💻 **프론트엔드** : TypeScript, React, Vanilla-extract, Redux-toolkit
- 📝 **버전 및 이슈관리** : Github, Github-actions
- 🌐 **서비스 배포 환경** : Netlify
  <br>

## 2. 채택한 개발 기술과 브랜치 전략

- **React**
    - 컴포넌트화를 통해 추후 유지 보수와 재사용성이 용이하다 판단하여 선택하였습니다. 
- **Vanilla-extract**
    - CSS에서 JS문법을 사용할 수 있다는 장점을 가지고 있으며,
    - zero-runtime CSS인 vanilla-extract를 개인 프로젝트에 적합하다고 판단하였습니다.
- **Redux-toolkit**
    - 클라이언트 상태를 관리하기 위해 redux를 선택하였습니다.
    - 빠른 개발과 효율성 측면에서 redux-toolkit을 선택하였습니다.
- **Eslint, Prettier**
    - 일관된 코드를 작성하기 위해 도입하였습니다.
- **Github-actions**
    - CI/CD 구축를 위해 Github-actions를 도입하였습니다.

### 브랜치 전략

- Git-flow를 채택하였으며, main, dev, feat로 구분하여 진행하였습니다.
  - **main** 배포용으로 최종적으로 적용할 기능만을 합쳤습니다.
  - **dev** 모든 기능을 합치고 개발과 테스트 단계에 사용하는 브랜치 입니다.
  - **Feat** 개발을 효율적으로 진행하기 위해 기능 단위로 브랜치을 생성하여 dev 브랜치에 합치는 방식으로 진행하였습니다.

<br>

## 3. 프로젝트 구조

```
├── README.md
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── pmpm-lock.json
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html
│
├── .storybook
│    ├── main.ts
│    └── preview.ts
│
└── src
     ├── api
     └── components
           ├── contentHeader
           ├── introducePageCOmponents
           ├── projectPageComponents
           ├── skillPageComponents
           ├── rendingPage
           └── sideBar
     └── redux
           ├── reducers
           ├── slice
           └── store
     └── routes
           └── introducePage.tsx
     ├── App.tsx
     ├── main.tsx
     └── styles
           ├── fonts
           └── globalStyle.css.ts
```

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024년 4월 7일 ~ 2024년 5월 7일

<br>

### 작업 관리

- Gihub를 통해 관리하였습니다.
