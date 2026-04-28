import { style } from '@vanilla-extract/css'

export const body = style({
  margin: 0,
})

export const subtleLink = style({
  textDecoration: 'none',
  color: 'inherit',
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

export const appRoot = style({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const brand = style([subtleLink, {
  fontWeight: 'bold',
}]);

export const navLink = style([subtleLink]);

export const outlet = style({
  display: 'block',
})
