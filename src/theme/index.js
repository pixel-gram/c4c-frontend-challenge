import { createMuiTheme } from '@material-ui/core';


const palette = {
  primary: {
    main: '#0B2B5B',
    light: '#3A719B',
  },
  globalBackground: {
    main: "#CDE7ED"
  }
}
export const theme = createMuiTheme({
  palette,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: palette.globalBackground.main
        },
      },
    },
  },
  typography: {
    color: palette.primary.main,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    h1: {
      fontSize: '30px',
      lineHeight: '40px',
      /* or 133% */
      textAlign: 'center',
    },
    h2: {
      fontSize: '25px',
      lineHeight: '40px',
      /* or 133% */
      textAlign: 'center',
    },
    h3: {
      fontSize: '24px',
      lineHeight: '32px'
    },
    h4: {
      fontSize: '20px',
      lineHeight: '24px'

    },
    body1: {
      fontSize: '20px',
      lineHeight: '32px'
    }
  }
})
