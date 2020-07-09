import React, { Component } from 'react'
import './App.scss'
import {
  InputAdornment,
  Input,
  Select,
  Button,
  MenuItem
} from '@material-ui/core'
import { Form, Field } from 'react-final-form'
import axios from 'axios'

const currURL =
  'https://free.currconv.com/api/v7/currencies?apiKey=7c75ab8096c89ac26891'

class App extends Component {
  state = {
    open: false,
    currList: [],
    selectedCurr: 'PLN'
  }

  componentDidMount() {
    axios
      .get(currURL)
      .then(curr =>
        this.setState({
          currList: curr.data.results
        })
      )
      .catch(err => console.log(err))
  }

  handleSelect = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open, currList } = this.state

    const currSelect =
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
          <Form
            onSubmit={formObj => {
              console.log(formObj)
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name='quantity'>
                  {({ input }) => (
                    <Input
                      endAdornment={<InputAdornment>$</InputAdornment>}
                      fullWidth
                      placeholder='Wpisz kwotę'
                      {...input}
                    />
                  )}
                </Field>
                <Field name='result'>
                  {({ input }) => (
                    <Input
                      style={{ marginTop: '45px' }}
                      endAdornment={<InputAdornment>$</InputAdornment>}
                      fullWidth
                      placeholder='Wynik'
                      {...input}
                    />
                  )}
                </Field>
                <div className='selects'>
                  <Field name='result'>
                    {({ input }) => (
                      <Select
                        variant='outlined'
                        name='leftSelect'
                        value={this.state.selectedCurr}
                        onChange={this.handleSelect}
                        displayEmpty
                      >
                        {currSelect}
                      </Select>
                    )}
                  </Field>
                  <Field name='result'>
                    {({ input }) => (
                      <Select
                        variant='outlined'
                        name='rightSelect'
                        value={this.state.selectedCurr}
                        onChange={this.handleSelect}
                        displayEmpty
                      >
                        {currSelect}
                      </Select>
                    )}
                  </Field>
                </div>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  type='submit'
                  onClick={this.handleOpen}
                >
                  Konwertuj
                </Button>
              </form>
            )}
          </Form>
        </main>
        <div
          style={open ? { width: '640px' } : { width: '120px' }}
          className='historical'
        >
          <div></div>
        </div>
      </div>
    )
  }
}

export default App
