import { useContext } from "react"
import { APIContext } from "../contexts/APIContext"

export interface IProps {
  error: any
  addError: (prop: string) => void
  open: boolean
  toogleOpen: (prop: boolean) => void
  history: {}
  addHistory: unknown | any
  result: {}
  addResult: (prop: string) => void
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
