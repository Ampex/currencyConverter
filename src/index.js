import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      fontSizeLarge: {
        width: '80px'
      }
    },
    MuiTableCell: {
      stickyHeader: {
        backgroundColor: '#3578eb',
        color: '#ffffff',
        fontWeight: 700
      },
      body: {
        color: '#ffffff'
      }
    }
  },
  palette: {
    primary: {
      main: '#3578eb'
    },
    secondary: {
      main: '#ffffff'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
