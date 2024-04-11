import { style } from '@vanilla-extract/css';

export const introContentEduContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
});

export const introContentEduTitle = style({
  fontSize: '20px',
  marginBottom: '17px',
});

export const introContentEduItem = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '20px',
});

export const introContentEduItemImg = style({
  width: '30px',
  height: '30px',
  marginRight: '20px',
  marginLeft: '10px',
  borderRadius: '100%',
});

export const introContentEduItemTitle = style({
  fontSize: '16px',
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
});

export const introContentEduItemLink = style({
  fontSize: '12px',
  textDecoration: 'none',
  color: 'black',
});

export const introContentEduItemDate = style({
  fontSize: '14px',
  marginLeft: 'auto',
});
