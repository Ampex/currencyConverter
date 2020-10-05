import React, { useState, useCallback } from "react"

export const APIContext = React.createContext({
  error: null,
  addError: () => {},
  open: false,
  toogleOpen: () => {},
  history: [],
  addHistory: {},
  result: false,
  addResult: () => {},
})

export default function APIProvider({ children }: any) {
  const [error, setError] = useState<unknown>(null)
  const [open, setOpen] = useState(false)
  const [history, setHistory] = useState([])
  const [result, setResult] = useState(false)

  const addError = (message: string) => setError({ message })
  const addHistory = (entry: never[]) => setHistory(entry)
  const addResult = (score: boolean) => setResult(score)

  const contextValue: any = {
    error,
    addError: useCallback((message) => addError(message), []),
    open,
    toogleOpen: useCallback((state) => setOpen(state || !open), [open]),
    history,
    addHistory: useCallback((entry) => addHistory(entry), []),
    result,
    addResult: useCallback((score) => addResult(score), []),
  }

  return (
    <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>
  )
}
