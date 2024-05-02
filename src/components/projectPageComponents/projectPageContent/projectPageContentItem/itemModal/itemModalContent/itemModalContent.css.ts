import { style } from '@vanilla-extract/css';

export const itemModalContentScrollbar = style({
  '::-webkit-scrollbar': {
    width: '2px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(220, 20, 60)',
    borderRadius: '8px',
  },
});
