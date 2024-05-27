import { style } from '@vanilla-extract/css';

export const introContentEduContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  marginBottom: '30px',
  width: '100%',
});

export const introContentEduTitle = style({
  fontSize: '20px',
  marginBottom: '17px',
});

export const introContentEduItem = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '20px',
  width: '100%',
  '@media': {
    'screen and (max-width: 1000px)': {
      width: '70%',
    },
    'screen and (max-width: 680px)': {
      width: '100%',
    },
  },
});

export const introContentEduItemImg = style({
  width: '30px',
  height: '30px',
  marginRight: '20px',
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
});
