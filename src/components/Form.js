import React from 'react'
import { Form, Field } from 'react-final-form'
import {
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  Input,
  CircularProgress
} from '@material-ui/core'
import { TextField, Select } from 'mui-rff'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz'
import { useLocation, Redirect } from 'react-router-dom'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}
const validate = values => {
  const errors = {}
  if (!values.quantity || values.quantity <= 0) {
    errors.quantity = 'Nieprawidłowa wartość'
  }
  if (!values.from) {
    errors.from = 'Wybierz walutę'
  }
  if (!values.to) {
    errors.to = 'Wybierz walutę'
  }
  return errors
}

const MainForm = props => {
  const query = useQuery()
  const q = {
    v: query.get('v'),
    f: query.get('from'),
    t: query.get('to')
  }

  return (
    <Form
      onSubmit={props.onSubmit}
      initialValues={{
        quantity: q.v || '',
        from: (q.f && q.f.toUpperCase()) || '',
        to: (q.t && q.t.toUpperCase()) || ''
      }}
      validate={validate}
      render={({ handleSubmit, submitting, pristine, values }) => (
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
                  tabIndex: 1
                }}
                InputProps={{
                  endAdornment: values.from && (
                    <InputAdornment>{values.from}</InputAdornment>
                  )
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
              value={props.result || ''}
              inputProps={{
                tabIndex: -1
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
                    tabIndex: 2
                  }}
                >
                  {props.currList}
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
                    tabIndex: 3
                  }}
                >
                  {props.currList}
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
                style={{ position: 'absolute' }}
              />
            )}
            Konwertuj
          </Button>
          <Redirect
            sensitive
            to={{
              pathname: '/currencyConverter/',
              search: `${values.quantity && `${`?value=${values.quantity}`}`}${
                values.from && `${`&from=${values.from}`}`
              }${values.to && `${`&to=${values.to}`}`}`
            }}
          />
        </form>
      )}
    />
  )
}

export default MainForm
