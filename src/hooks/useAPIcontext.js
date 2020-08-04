import { useContext } from 'react'
import { APIContext } from '../contexts/APIContext'

function useAPIContext() {
  const {
    error,
    addError,
    open,
    toogleOpen,
    history,
    addHistory,
    result,
    addResult
  } = useContext(APIContext)
  return {
    error,
    addError,
    open,
    toogleOpen,
    history,
    addHistory,
    result,
    addResult
  }
}

export default useAPIContext
