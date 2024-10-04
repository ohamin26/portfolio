import { style } from '@vanilla-extract/css';

export const ItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #C1C1BB',
  borderRadius: '30px',
  marginTop: '2rem',
  width: '40%',
  height: '37vh',
  marginLeft: '6%',
  '@media': {
    '(max-width: 700px)': {
      width: '63%',
      marginLeft: '18%',
      height: '31vh',
    },
    '(min-width: 1600px)': {
      height: '25vh',
      width: '37%',
      marginLeft: '3%',
    },
  },
});

export const ItemContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '80%',
  alignItems: 'center',
  width: '100%',
  borderBottom: '1px solid #C1C1BB',
});

export const ItemImg = style({
  width: '70%',
  height: '70%',
  marginTop: '8%',
  overflow: 'hidden',
  borderRadius: '30px 30px 0 0',
  cursor: 'pointer',
  '@media': {
    '(min-width: 1600px)': {
      marginTop: '11%',
    },
  },
});

export const ItemImgWashhub = style({
  width: '60%',
  height: '85%',
  marginTop: '8%',
  overflow: 'hidden',
  borderRadius: '30px 30px 0 0',
  cursor: 'pointer',
  '@media': {
    '(min-width: 468px)': {
      width: '50%',
      height: '80%',
    },
  },
});

export const ItemImgOverdog = style({
  width: '40%',
  height: '60%',
  marginTop: '12%',
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: '30px 30px 0 0',
  '@media': {
    '(min-width: 1600px)': {
      marginTop: '15%',
    },
  },
});

export const ItemImgDocuments = style({
  width: '70%',
  height: '70%',
  marginTop: '8%',
  overflow: 'hidden',
  cursor: 'pointer',
  borderRadius: '30px 30px 0 0',
  '@media': {
    '(min-width: 1600px)': {
      marginTop: '11%',
    },
  },
});

export const ItemTitle = style({
  fontSize: '15px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '5%',
  marginBottom: '5%',
  textAlign: 'center',
});

export const ModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: '1',
    width: '100%',
    MdHeight: '100vh',
  },
  content: {
    width: '80%',
    height: '85%',
    margin: 'auto',
    marginTop: '1%',
    borderRadius: '10px',
    border: '1px solid #C1C1BB',
    zIndex: '150',
    padding: '0.5rem',
    paddingTop: '5px',
  },
};
