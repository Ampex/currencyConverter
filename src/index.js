import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
  overrides: {
    MuiSelect: {
      root: {
        width: '100px'
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
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister()
