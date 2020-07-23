import React, { Component } from 'react'
import './App.scss'
import { MenuItem } from '@material-ui/core'
import Form from './components/Form'
import Historical from './components/Historical'
import currenciesJSON from './currencies.json'
import { Route } from 'react-router-dom'

const isMobile = window.innerWidth <= 1200

class App extends Component {
  state = {
    currList: [],
    historical: [],
    result: false,
    open: false
  }

  componentDidMount() {
    fetch(
      `https://free.currconv.com/api/v7/currencies?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          currList: data.results || currenciesJSON.results
        })
      )
    localStorage.getItem('history') &&
      this.setState({
        historical: JSON.parse(localStorage.getItem('history')) || []
      })
  }

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleClear = () => {
    localStorage.removeItem('history')
    this.setState({ historical: [] })
  }

  handleSubmit = async val => {
    const currs = `${val.from}_${val.to}`
    const time = new Date().toLocaleDateString()
    await fetch(
      `https://free.currconv.com/api/v7/convert?apiKey=7c75ab8096c89ac26891&q=${currs}&compact=ultra`
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          historical: [
            {
              time,
              after: (data[currs] * val.quantity).toFixed(2),
              value: val.quantity,
              from: val.from,
              to: val.to
            },
            ...this.state.historical
          ],
          open: true,
          result: (data[currs] * val.quantity).toFixed(2)
        })
      )
    localStorage.setItem('history', JSON.stringify(this.state.historical))
  }

  render() {
    const { currList, historical, open, result } = this.state
    const currSelectList =
      currList &&
      Object.keys(currList)
        .sort()
        .map(curr => (
          <MenuItem key={curr} value={curr}>
            {curr}
          </MenuItem>
        ))

    return (
      <div className='container'>
        <div
          style={open && !isMobile ? { width: '1150px' } : { width: '600px' }}
          className='wrapper'
        >
          <main>
            <h3>Konwerter walut</h3>
            <Form
              onSubmit={this.handleSubmit}
              currList={currSelectList}
              handleOpen={this.handleOpen}
              result={result}
            />
          </main>
          <div
            style={
              open
                ? {
                    transform: `${
                      isMobile ? 'translate(70px, 570px)' : 'translate(560px)'
                    }`
                  }
                : { transform: 'translate(70px)' }
            }
            className='historical'
          >
            <Historical
              clear={this.handleClear}
              status={open}
              toogle={this.handleOpen}
              entries={historical}
            />
            <Route path='/user/:username' component={Form} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
