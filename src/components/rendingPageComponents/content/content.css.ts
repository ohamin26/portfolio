import { style } from '@vanilla-extract/css';

// container
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

// 첫 번째 문단
export const paragraph1 = style({
  fontSize: '30px',
  fontWeight: '700',
  margin: '0',
  marginTop: '60px',
  padding: '0',
  textAlign: 'center',
  lineHeight: '1.5',
  color: '#333',
});

// 두 번째 문단
export const paragraph2 = style({
  fontSize: '30px',
  fontWeight: '700',
  margin: '0',
  marginTop: '10px',
  padding: '0',
  textAlign: 'center',
  lineHeight: '1.5',
  color: '#333',
});

// 이미지
export const img = style({
  width: '80vh',
  height: '60vh',
});

// 버튼
export const button = style({
  width: '100px',
  height: '50px',
  fontSize: '20px',
  fontWeight: '700',
  backgroundColor: 'black',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#555',
  },
  fontFamily: 'Pretendard-Regular',
});
