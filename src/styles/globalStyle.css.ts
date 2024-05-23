import { style, globalStyle } from '@vanilla-extract/css';

export const globalStyleExample = style({
  margin: 0,
});

// 배경 이미지를 만들어주는 코드
// 모눈 종이 배경 이미지
globalStyle('body', {
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

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  padding: '0',
  margin: '0',
});

export const pageContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const projectPageContent = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
});
