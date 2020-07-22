import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'

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
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
