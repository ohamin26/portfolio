import { style } from '@vanilla-extract/css';

export const introContentInfo = style({
  display: 'flex',
  flexDirection: 'column',
});

export const introContentInfoContainer = style({
  display: 'flex',
  flexDirection: 'row',
});

export const introContentInfoImg = style({
  marginTop: '40px',
  width: '150px',
  height: '150px',
  borderRadius: '40%',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
});

export const introContentContact = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '35px',
  marginLeft: '5px',
});

export const introContentContactContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  marginBottom: '5px',
});

export const introContentContactIcon = style({
  fontSize: '22px',
  marginRight: '10px',
});

export const introContentContactParagragh = style({
  fontSize: '16px',
});

export const introContentContactLink = style({
  fontSize: '17px',
  textDecoration: 'none',
  color: 'black',
});

export const introContentIntroduce = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '40px',
  marginLeft: '80px',
});

export const introContentIntroduceTitle = style({
  fontSize: '20px',
  marginBottom: '17px',
});

export const introContentIntroduceContent = style({
  width: '500px',
  height: '280px',
  backgroundColor: '#FFFCFC',
  borderRadius: '10px',
  border: '1px solid #E5E5E5',
  display: 'flex',
});

export const introContentIntroduceContentIcon = style({
  fontSize: '40px',
  marginTop: '10px',
  marginLeft: '10px',
});

export const introContentIntroduceContentText = style({
  fontSize: '17px',
  marginLeft: '10px',
  marginTop: '15px',
});
