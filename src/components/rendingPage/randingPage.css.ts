import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
  height: '100vh',
  display: 'flex',
  background: '#fff',
  backgroundImage: `
    linear-gradient(rgba(224, 224, 224, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(224, 224, 224, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, #fff 100px, transparent 100px),
    linear-gradient(transparent 99px, transparent 100px),
    linear-gradient(#cdcccc, #cdcccc)`,
  backgroundSize: `100% 10px, 10px 100%, 100px 100%, 100px 100px, 100px 100px`,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const hero = style({
  textAlign: 'center',
  color: 'black',
});

export const ctaButton = style({
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px',
});
