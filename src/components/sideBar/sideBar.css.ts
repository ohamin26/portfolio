import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: 'fit-content',
  marginLeft: '30px',
});

export const profile = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '20px',
  width: 'fit-content',
});

export const profileImage = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'orange',
  marginRight: '10px',
  marginLeft: '5px',
});

export const profileName = style({
  fontSize: '20px',
  textAlign: 'center',
});

export const menu = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '150px',
  marginBottom: 'auto',
  width: 'fit-content',
});

export const menuItem = style({
  display: 'flex',
  flexDirection: 'row',
  cursor: 'pointer',
  fontSize: '20px',
  alignItems: 'center',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
  marginBottom: '60px',
});

export const menuItemIconArrow = style({
  fontSize: '30px',
});

export const menuItemParagraph = recipe({
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    paddingRight: '20px',
  },
  variants: {
    active: {
      ActiveBorderBottom: { borderBottom: '2px solid #000000' },
      UnActiveBorderBottom: { borderBottom: '2px solid grey' },
    },
  },
  defaultVariants: {
    active: 'ActiveBorderBottom',
  },
});

export const menuItemIcon = style({
  marginRight: '5px',
  fontSize: '30px',
});
