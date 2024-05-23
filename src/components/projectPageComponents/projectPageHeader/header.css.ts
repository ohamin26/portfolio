import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  marginTop: '5%',
  display: 'flex',
  width: '100vh',
  height: 'fit-content',
});

export const headerIconWrapper = style({
  fontSize: '2rem',
  color: '#333',
  borderBottom: '1px solid #C1C1BB',
  '@media': {
    'screen and (max-width: 1600px)': {
      width: '100%',
    },
  },
  width: '83%',
  alignSelf: 'start',
  display: 'flex',
});

export const headerIcon = style({
  marginLeft: '3px',
  marginBottom: '3px',
});

export const headerTitle = style({
  fontSize: '25px',
  marginLeft: '15px',
  textAlign: 'center',
});
