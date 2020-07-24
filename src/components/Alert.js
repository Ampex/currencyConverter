import React, { useState, useEffect } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Snackbar, Backdrop } from '@material-ui/core'

const ALert = () => {
  const [online, setOffline] = useState(true)

  useEffect(() => {
    window.addEventListener('online', () => setOffline(true))
    window.addEventListener('offline', () => setOffline(false))
  })

  return (
    <Backdrop open={!online}>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open>
        <Alert severity='error'>
          <AlertTitle>
            <strong>Jesteś offline</strong>
          </AlertTitle>
          Utracono połączenie z serwerem. Sprawdź swoją sieć.
        </Alert>
      </Snackbar>
    </Backdrop>
  )
}

export default ALert
