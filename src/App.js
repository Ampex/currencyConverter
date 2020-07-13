import React, { Component } from 'react'
import './App.scss'
import { MenuItem } from '@material-ui/core'
import MainForm from './components/MainForm'
import currenciesJSON from './currencies.json'

class App extends Component {
  state = {
    currList: currenciesJSON.results
  }

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleSubmit = async values => {
    fetch(
      `https://prepaid.currconv.com/api/v7/convert?q=${values.selectFrom}_${values.selectTo},${values.selectTo}_${values.selectFrom}&compact=ultra&date=2017-12-31&endDate=2020-01-05&apiKey=pr_13edd894c11d47de925447de28461118`
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          historical: data
        })
      )
  }

  render() {
    const { currList } = this.state

    const currSelectList =
      currList &&
      Object.keys(currList).map(curr => (
        <MenuItem key={curr} value={curr}>
          {curr}
        </MenuItem>
      ))

    return (
      <div className='container'>
        <main>
          <h3>Konwerter walut</h3>
          <MainForm
            onSubmit={this.handleSubmit}
            currList={currSelectList}
            handleOpen={this.handleOpen}
          />
        </main>
        <div className='historical'>
          <div>test</div>
        </div>
      </div>
    )
  }
}

export default App
