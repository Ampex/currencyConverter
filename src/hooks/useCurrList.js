import { useState, useEffect } from 'react'
import useAPIcontext from './useAPIcontext'

export default function useCurrList() {
  const { addError } = useAPIcontext()
  const [response, setResponse] = useState({ data: false })

  useEffect(() => {
    const handleErrors = res => {
      if (!res.ok) {
        addError('Wystąpił problem z serwerem. Spróbuj ponownie...')
      }
      return res.json()
    }

    fetch(
      `https://prepaid.currconv.com/api/v7/currencies?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(handleErrors)
      .then(data => setResponse({ data: data.results }))
      .catch(err => console.log(err))
  }, [addError, setResponse])

  return response
}
