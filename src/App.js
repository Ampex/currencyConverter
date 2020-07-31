import React, { useState, useEffect } from 'react'
import './App.scss'
import { MenuItem } from '@material-ui/core'
import Form from './components/Form'
import Historical from './components/Historical'
import Alert from './components/Alert'
import currenciesJSON from './currencies.json'
import { Route } from 'react-router-dom'

const isMobile = window.innerWidth <= 1200

const App = () => {
  const [currList, setCurrList] = useState([])
  const [historical, setHistorical] = useState([])
  const [open, setOpen] = useState(false)

  const status = response => {
    if (response.ok) return response
    else return response.json().then(resp => Promise.reject(resp))
  }

  useEffect(() => {
    const url = `https://free.currconv.com/api/v7/currencies?apiKey=${process.env.REACT_APP_API_KEY}`
    fetch(url)
      .then(status)
      .then(data => setCurrList(data.results || currenciesJSON.results))
      .catch(err => console.log(err))
    localStorage.getItem('history') &&
      setHistorical(JSON.parse(localStorage.getItem('history')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(historical))
  }, [historical])

  const currSelectList =
    currList &&
    Object.keys(currList)
      .sort()
      .map(curr => (
        <MenuItem key={curr} value={curr}>
          {curr}
        </MenuItem>
      ))

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleClear = () => {
    localStorage.removeItem('history')
    setHistorical([])
  }

  const handleSubmit = async val => {
    const currs = `${val.from}_${val.to}`
    const time = new Date().toLocaleDateString()
    await fetch(
      `https://free.currconv.com/api/v7/convert?apiKey=7c75ab8096c89ac26891&q=${currs}&compact=ultra`
    )
      .then(response => response.json())
      .then(data =>
        setHistorical([
          {
            time,
            after: (data[currs] * val.quantity).toFixed(2),
            value: val.quantity,
            from: val.from,
            to: val.to
          },
          ...historical
        ])
      )
      .catch(err => console.log(err))
    setOpen(true)
  }

  return (
    <div className='container'>
      <Alert />

      <div
        style={open && !isMobile ? { width: '1150px' } : { width: '600px' }}
        className='wrapper'
      >
        <main>
          <h3>Konwerter walut</h3>
          <Form
            onSubmit={handleSubmit}
            currList={currSelectList}
            handleOpen={handleOpen}
            result={historical[0] && historical[0].after}
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
            clear={handleClear}
            status={open}
            toogle={handleOpen}
            entries={historical}
          />
          <Route path='/user/:username' component={Form} />
        </div>
      </div>
    </div>
  )
}

export default App
