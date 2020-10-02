import React, { FC } from "react"
import { Alert, AlertTitle } from "@material-ui/lab"
import { Snackbar, Backdrop } from "@material-ui/core"
import useAPIcontext, { IProps } from "../hooks/useAPIcontext"

const ALert: FC<IProps> = () => {
  const { error } = useAPIcontext()

  return (
    <Backdrop open={error !== null}>
      <Snackbar open anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={() => window.location.reload()} severity='error'>
          <AlertTitle>
            <strong>Błąd</strong>
          </AlertTitle>
          {error && error.message}
        </Alert>
      </Snackbar>
    </Backdrop>
  )
}

export default ALert
