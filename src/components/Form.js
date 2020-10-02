import React from "react"
import { Form, Field } from "react-final-form"
import {
  InputAdornment,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Input,
  CircularProgress,
} from "@material-ui/core"
import SwapHorizIcon from "@material-ui/icons/SwapHoriz"
import { TextField, Select } from "mui-rff"
import { useLocation, Redirect } from "react-router-dom"
import { validate } from "./Validate"
import useCurrList from "../hooks/useCurrList"
import useAPIcontext from "../hooks/useAPIcontext"

const MainForm = () => {
  const { data } = useCurrList()
  const {
    addError,
    toogleOpen,
    history,
    addHistory,
    result,
    addResult,
  } = useAPIcontext()

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  const currSelectList = data ? (
    Object.keys(data)
      .sort()
      .map((curr) => (
        <MenuItem key={curr} value={curr}>
          {curr}
        </MenuItem>
      ))
  ) : (
    <MenuItem value=''>Błąd</MenuItem>
  )

  const query = useQuery()
  const q = {
    v: query.get("value"),
    f: query.get("from"),
    t: query.get("to"),
  }

  const handleSubmit = async (val) => {
    const currs = `${val.from}_${val.to}`
    const time = new Date().toLocaleDateString()
    toogleOpen(true)
    await fetch(
      `https://prepaid.currconv.com/api/v7/convert?apiKey=${process.env.REACT_APP_API_KEY}&q=${currs}&compact=ultra`
    )
      .then((resp) => resp.json())
      .then((data) => {
        addResult((data[currs] * val.quantity).toFixed(2))
        addHistory([
          {
            time,
            after: (data[currs] * val.quantity).toFixed(2),
            value: val.quantity,
            from: val.from,
            to: val.to,
          },
          ...history,
        ])
      })
      .catch(() => addError("Coś poszło nie tak. Spróbuj ponownie..."))
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{
        quantity: q.v || "",
        from: (q.f && q.f.toUpperCase()) || "",
        to: (q.t && q.t.toUpperCase()) || "",
      }}
      validate={validate}
      render={({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Field name='quantity'>
            {({ input }) => (
              <TextField
                {...input}
                type='number'
                label='Wpisz kwotę'
                name='quantity'
                style={{ marginBottom: 25 }}
                inputProps={{
                  tabIndex: 1,
                }}
                InputProps={{
                  endAdornment: values.from && (
                    <InputAdornment>{values.from}</InputAdornment>
                  ),
                }}
              />
            )}
          </Field>
          <FormControl focused={false} fullWidth>
            <InputLabel>Wynik</InputLabel>
            <Input
              readOnly
              type='number'
              name='converted'
              required
              value={result || ""}
              inputProps={{
                tabIndex: -1,
              }}
              endAdornment={
                values.to && <InputAdornment>{values.to}</InputAdornment>
              }
            />
          </FormControl>

          <div className='selects'>
            <Field name='from'>
              {({ input }) => (
                <Select
                  {...input}
                  label='Konwertuj z'
                  variant='outlined'
                  name='from'
                  inputProps={{
                    tabIndex: 2,
                  }}
                >
                  {currSelectList}
                </Select>
              )}
            </Field>
            <SwapHorizIcon fontSize='large' color='primary' />
            <Field name='to'>
              {({ input }) => (
                <Select
                  {...input}
                  label='Konwertuj na'
                  variant='outlined'
                  name='to'
                  inputProps={{
                    tabIndex: 3,
                  }}
                >
                  {currSelectList}
                </Select>
              )}
            </Field>
          </div>

          <Button
            fullWidth
            size='large'
            variant='contained'
            color='primary'
            type='submit'
            disabled={submitting}
          >
            {submitting && (
              <CircularProgress
                color='primary'
                size={30}
                style={{ position: "absolute" }}
              />
            )}
            Konwertuj
          </Button>
          <Redirect
            sensitive
            to={{
              pathname: "/currencyConverter/",
              search: `${values.quantity && `${`?value=${values.quantity}`}`}${
                values.from && `${`&from=${values.from}`}`
              }${values.to && `${`&to=${values.to}`}`}`,
            }}
          />
        </form>
      )}
    />
  )
}
export default MainForm
