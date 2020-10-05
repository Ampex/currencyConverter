import { useState, useEffect } from "react"
import useAPIcontext from "./useAPIcontext"

interface IProps {
  ok: boolean
  json: () => any
}

export default function useCurrList() {
  const { addError } = useAPIcontext()
  const [response, setResponse] = useState({ data: false })

  const errorText = "Wystąpił problem z serwerem. Spróbuj ponownie..."

  useEffect(() => {
    const handleErrors = (res: IProps) => {
      if (!res.ok) {
        addError(errorText)
      }
      return res.json()
    }

    fetch(
      `https://prepaid.currconv.com/api/v7/currencies?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(handleErrors)
      .then((data) => {
        setResponse({ data: data.results })
      })

      .catch((err) => console.log(err))
  }, [addError, setResponse])

  return response
}
