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
    }
  },
  palette: {
    primary: {
      main: '#3578eb'
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
