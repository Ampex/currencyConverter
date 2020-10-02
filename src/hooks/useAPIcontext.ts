import { useContext } from "react"
import { APIContext } from "../contexts/APIContext"

export interface IProps {
  error: any
  addError: () => void
  open: boolean
  toogleOpen: () => void
  history: unknown
  addHistory: unknown
  result: unknown
  addResult: () => void
}

function useAPIContext() {
  const {
    error,
    addError,
    open,
    toogleOpen,
    history,
    addHistory,
    result,
    addResult,
  }: IProps = useContext(APIContext)
  return {
    error,
    addError,
    open,
    toogleOpen,
    history,
    addHistory,
    result,
    addResult,
  }
}

export default useAPIContext
