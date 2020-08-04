import React, { useState, useCallback } from 'react'

export const APIContext = React.createContext({
  error: null,
  addError: () => {},
  open: false,
  toogleOpen: () => {},
  history: [],
  addHistory: () => {},
  result: false,
  addResult: () => {}
})

export default function APIProvider({ children }) {
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(false)
  const [history, setHistory] = useState([])
  const [result, setResult] = useState(false)

  const addError = message => setError({ message })
  const addHistory = entry => setHistory(entry)
  const addResult = score => setResult(score)

  const contextValue = {
    error,
    addError: useCallback(message => addError(message), []),
    open,
    toogleOpen: useCallback(state => setOpen(state || !open), [open]),
    history,
    addHistory: useCallback(entry => addHistory(entry), []),
    result,
    addResult: useCallback(score => addResult(score), [])
  }

  return (
    <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>
  )
}
