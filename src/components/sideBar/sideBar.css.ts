// Sidebar.css.ts
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const sidebarContainer = style({
  width: '250px',
  height: '100vh',
  backgroundColor: '#f8f9fa',
  padding: '10px',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  paddingTop: '70%',
});

export const activeItem = style({
  backgroundColor: '#e2e6ea',
});

export const menuButton = style({
  border: 'none',
  backgroundColor: 'transparent',
  width: '100%',
  cursor: 'pointer',
  padding: '0',
  margin: '0',
  outline: 'none',
});

export const menuLink = style({
  textDecoration: 'none',
  color: 'black',
  width: '100%',
  cursor: 'pointer',
  padding: '0',
  margin: '0',
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
  fontSize: '20px',
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
      ActiveBorderBottom: '',
      UnActiveBorderBottom: '',
    },
  },
  defaultVariants: {
    active: 'ActiveBorderBottom',
  },
});

export const menuItemIcon = style({
  marginRight: '5px',
  fontSize: '20px',
});
