import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  width: 'fit-content',
  height: 'fit-content',
  marginTop: '8px',
});

export const headerIcon = style({
  fontSize: '50px',
});

export const headerParagraph = style({
  fontSize: '30px',
  fontWeight: '500',
});
