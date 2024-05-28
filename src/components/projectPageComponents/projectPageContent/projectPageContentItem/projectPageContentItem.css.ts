import { style } from '@vanilla-extract/css';

export const ItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #C1C1BB',
  borderRadius: '30px',
  marginTop: '2rem',
  width: '40%',
  height: '50vh',
  marginLeft: '6%',
  '@media': {
    '(max-width: 700px)': {
      width: '80%',
      marginLeft: '10%',
    },
  },
});

export const ItemContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '70%',
  alignItems: 'center',
  width: '100%',
  borderBottom: '1px solid #C1C1BB',
});

export const ItemImg = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '30px 30px 0 0',
});

export const ItemImgOverdog = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  marginTop: '10px',
  borderRadius: '30px 30px 0 0',
});

export const ItemImgDocuments = style({
  width: '100%',
  height: '100%',
  marginTop: '10px',
  overflow: 'hidden',
  borderRadius: '30px 30px 0 0',
});

export const ItemTitle = style({
  fontSize: '15px',
  fontWeight: 'bold',
  marginTop: '1rem',
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
