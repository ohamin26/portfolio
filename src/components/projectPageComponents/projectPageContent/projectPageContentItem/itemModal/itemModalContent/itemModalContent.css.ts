import { style } from '@vanilla-extract/css';

export const itemModalContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const itemModalContent = style({
  padding: '2rem',
  marginLeft: '15%',
  width: '70%',
  '@media': {
    '(max-width: 1200px)': {
      marginLeft: '10%',
      width: '80%',
    },
    '(max-width: 730px)': {
      marginLeft: '10%',
      width: '80%',
    },
    '(max-width: 600px)': {
      marginLeft: '2%',
    },
  },
});
