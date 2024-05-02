import { style } from '@vanilla-extract/css';

export const ItemContainer = style({
  position: 'sticky',
  top: '0',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: '1.3rem',
  color: '#C1C1BB',
  marginBottom: '1rem',
  marginTop: '3px',
});

export const ItemTitle = style({
  fontSize: '1rem',
  color: '#C1C1BB',
  marginTop: '1px',
});
