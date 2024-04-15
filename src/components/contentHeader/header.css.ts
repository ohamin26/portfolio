import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  width: 'fit-content',
  height: 'fit-content',
  marginTop: '16px',
});

export const headerIcon = style({
  fontSize: '40px',
});

export const headerParagraph = style({
  fontSize: '25px',
  fontWeight: '500',
});
