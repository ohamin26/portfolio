import { style } from '@vanilla-extract/css';

export const ItemModalImgContainer = style({
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ItemModalImg = style({
  width: '350px',
  height: '450px',
  '@media': {
    '(max-width: 700px)': {
      height: '200px',
    },
  },
});

export const ItemModalImgDocuments = style({
  width: '100%',
  height: '550px',
  '@media': {
    '(max-width: 700px)': {
      height: '200px',
    },
  },
});

export const ItemModalImgButton = style({
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  padding: '0',
  margin: '0',
  transition: 'all 0.3s',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

export const ItemModalImgButtonSize = style({
  fontSize: '30px',
});
