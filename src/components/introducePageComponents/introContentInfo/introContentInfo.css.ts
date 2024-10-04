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
  marginTop: '20px',
  width: '150px',
  height: '150px',
  borderRadius: '30px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
});

export const introContentContact = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '25px',
  marginLeft: '5px',
  '@media': {
    'screen and (max-width: 1000px)': {
      marginLeft: '100px',
    },
  },
});

export const introContentContactContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  marginBottom: '12px',
});

export const introContentContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  marginBottom: '5px',
  '@media': {
    'screen and (max-width: 1000px)': {
      flexDirection: 'column',
    },
  },
});

export const introContentContactWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '0',
  '@media': {
    'screen and (max-width: 1000px)': {
      flexDirection: 'row',
      marginLeft: '0',
    },
  },
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
  marginTop: '20px',
  marginLeft: '80px',
  '@media': {
    'screen and (max-width: 1000px)': {
      marginLeft: '0px',
    },
  },
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
  '@media': {
    'screen and (max-width: 768px)': {
      width: '420px',
    },
  },
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
