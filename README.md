# 📺 나만의 블로그

- 배포 URL :
- Test ID :
- Test PW :

<br>

## 프로젝트 소개

- 저에 대한 정보와 진행했던 프로젝트에 대한 내용을 담은 나만의 블로그입니다.
- 웹페이지로 제작되었으며 노션 웹페이지를 참고하여 제작하였습니다.

<br>

## 팀원 구성

<div align="center">

|                                                                     **오하민**                                                                     |
| :------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img width="140px" src="https://avatars.githubusercontent.com/u/113972482?v=4"height=150 width=150> <br/> @ohamin26] (https://github.com/ohamin26) |

</div>

<br>

## 1. 개발 환경

- Front : typescript, React, vanilla-extract, Redux
- 버전 및 이슈관리 : Github, Github Issues, storybook
- 서비스 배포 환경 : Netlify
  <br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, vanilla-extract

- React
  - 컴포넌트화를 통해 추후 유지보수와 재사용성에 특화된 React를 선택하였습니다.
- Vanilla-extract
  - emotion, tailwind, vanilla-extract 중에 고민하였으나 zero-runtime CSS인 vanilla-extract가 개인 프로젝트가 적합하다 판단되어 선택하였습니다.

### Redux

- 기존 recoil과 zustand를 주로 사용하였으나 다양한 기술 경험을 위해 선택하였습니다.

### Storybook

- storybook을 사용하여 컴포넌트의 문서화와 재사용성을 높이기 위해 도입했습니다.

### eslint, prettier

- eslint와 prettier를 통해 일관된 코드를 작성하기 위해 도입했습니다.

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
     ├── App.tsx
     ├── main.tsx
     ├── stories
     ├── asset
     ├── routes
     └── styles
           └── Globalstyled.tsx
```

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 :
- UI 구현 :
- 기능 구현 :

<br>

### 작업 관리

- Gihub와 storybook을 통해 관리하였습니다.

## 5. 페이지별 기능

## 6. 트러블 슈팅
