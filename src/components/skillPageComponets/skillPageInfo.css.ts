import { style } from '@vanilla-extract/css';

export const skillPageInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: '20px',
  marginBottom: '20px',
  flexWrap: 'wrap',
});

export const skillPageInfoParagraph = style({
  fontSize: '25px',
  fontWeight: '600',
  marginBottom: '25px',
});

export const skillPageInfoItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const skillPageInfoItemWapper = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: 'fit-content',
  gap: '30px',
  marginBottom: '4%',
  height: 'fit-content',
});

export const skillPageInfoItemGap = style({
  marginBottom: '4%',
});

export const skillPageInfoItemImg = style({
  width: '50px',
  height: '50px',
  marginRight: '5px',
  alignSelf: 'center',
});

export const skillPageInfoItemImg2 = style({
  width: '55px',
  height: '55px',
  marginTop: '5px',
});

export const skillPageInfoItemImgSvg = style({
  width: '70px',
  height: 'fit-content',
  marginBottom: '5px',
});

export const skillPageInfoItemImgLogo = style({
  width: '50px',
  height: '50px',
  marginLeft: '5px',
});

export const skillPageInfoItemImgText = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0',
});

export const skillPageInfoItemText = style({
  textAlign: 'center',
});

export const skillPageInfoItemIcon = style({
  fontSize: '50px',
  alignSelf: 'center',
});
