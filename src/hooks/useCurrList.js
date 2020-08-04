import { useState, useEffect } from 'react'
import useAPIcontext from './useAPIcontext'

export default function useCurrList() {
  const { addError } = useAPIcontext()
  const [response, setResponse] = useState({ data: false })

  useEffect(() => {
    fetch(
      `https://prepaid.currconv.com/api/v7/currencies?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then(data => setResponse({ data: data.results }))
      .catch(() => addError('Wystąpił problem z serwerem. Spróbuj ponownie...'))
  }, [addError, setResponse])

  return response
}
