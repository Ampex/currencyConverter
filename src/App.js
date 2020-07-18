import React, { Component } from 'react'
import './App.scss'
import { MenuItem } from '@material-ui/core'
import MainForm from './components/MainForm'
import Historical from './components/Historical'
import currenciesJSON from './currencies.json'

class App extends Component {
  state = {
    currList: [],
    historical: []
  }

  componentDidMount() {
    fetch(
      'https://free.currconv.com/api/v7/currencies?apiKey=7c75ab8096c89ac26891'
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          currList: data.results || currenciesJSON.results
        })
      )
    localStorage.getItem('history') &&
      this.setState({
        historical: JSON.parse(localStorage.getItem('history'))
      })
  }

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleSubmit = async val => {
    const currs = `${val.selectFrom}_${val.selectTo}`
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
              after: data[currs],
              value: val.valueFrom,
              selectFrom: val.selectFrom,
              selectTo: val.selectTo
            },
            ...this.state.historical
          ]
        })
      )
    localStorage.setItem('history', JSON.stringify(this.state.historical))
  }

  render() {
    const { currList, historical } = this.state

    const currSelectList =
      currList &&
      Object.keys(currList).map(curr => (
        <MenuItem key={curr} value={curr}>
          {curr}
        </MenuItem>
      ))

    return (
      <div className='container'>
        <div className='wrapper'>
          <main>
            <h3>Konwerter walut</h3>
            <MainForm
              onSubmit={this.handleSubmit}
              currList={currSelectList}
              handleOpen={this.handleOpen}
            />
          </main>
          <div className='historical'>
            <Historical entries={historical} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
