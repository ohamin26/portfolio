import { style, globalStyle } from '@vanilla-extract/css';

export const globalStyleExample = style({
  margin: 0,
});

// 배경 이미지를 만들어주는 코드
// 모눈 종이 배경 이미지
globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: 'Pretendard-Regular',
  background: '#fff',
  backgroundImage: `
    linear-gradient(rgba(224, 224, 224, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(224, 224, 224, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, #fff 100px, transparent 100px),
    linear-gradient(transparent 99px, transparent 100px),
    linear-gradient(#cdcccc, #cdcccc)`,
  backgroundSize: `100% 10px, 10px 100%, 100px 100%, 100px 100px, 100px 100px`,
});

globalStyle('*::-webkit-scrollbar', {
  width: '10px',
});

globalStyle('*::-webkit-scrollbar-thumb', {
  backgroundColor: '#cdcccc',
  borderRadius: '10px',
});

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0',
});

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'row',
  padding: '0',
  margin: '0',
});

export const pageSideBar = style({
  position: 'fixed',
  left: '0',
  top: '0',
  '@media': {
    'screen and (max-width: 1200px)': {
      display: 'none',
    },
  },
});

export const pageContent = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '30%',
  '@media': {
    'screen and (max-width: 1200px)': {
      marginLeft: '15%',
    },
    'screen and (max-width: 700px)': {
      marginLeft: '0%',
    },
    'screen and (min-width: 1600px)': {
      marginLeft: '35%',
    },
  },
});

export const projectPageContent = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
});
