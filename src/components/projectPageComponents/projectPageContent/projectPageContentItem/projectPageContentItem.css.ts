import { style } from '@vanilla-extract/css';

export const ItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #C1C1BB',
  borderRadius: '30px',
  marginTop: '2rem',
  width: '32%',
  height: '40vh',
  marginLeft: '2%',
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
  height: '195px',
  overflow: 'hidden',
  borderRadius: '30px 30px 0 0',
});

export const ItemImgOverdog = style({
  width: '80%',
  height: '170px',
  overflow: 'hidden',
  marginTop: '10px',
  borderRadius: '30px 30px 0 0',
});

export const ItemImgDocuments = style({
  width: '90%',
  height: '190px',
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
