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

const validate = values => {
  const errors = {}
  if (!values.valueFrom) {
    errors.valueFrom = 'Nieprawidłowa wartość'
  }
  if (!values.selectFrom) {
    errors.selectFrom = 'Wybierz walutę'
  }
  if (!values.selectTo) {
    errors.selectTo = 'Wybierz walutę'
  }
  return errors
}

const MainForm = props => {
  return (
    <Form
      onSubmit={props.onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Field name='valueFrom'>
            {({ input }) => (
              <TextField
                type='number'
                label='Wpisz kwotę'
                name='valueFrom'
                required
                InputProps={{
                  endAdornment: values.selectFrom && (
                    <InputAdornment>{values.selectFrom}</InputAdornment>
                  )
                }}
                {...input}
              />
            )}
          </Field>
          <Field noValidate name='converted'>
            {({ input }) => (
              <FormControl disabled fullWidth>
                <InputLabel>Wynik</InputLabel>
                <Input
                  name='converted'
                  required
                  endAdornment={
                    values.selectTo && (
                      <InputAdornment>{values.selectTo}</InputAdornment>
                    )
                  }
                  {...input}
                />
              </FormControl>
            )}
          </Field>

          <div className='selects'>
            <Field name='selectFrom'>
              {({ input }) => (
                <Select
                  required
                  label='Konwertuj z'
                  variant='outlined'
                  name='selectFrom'
                  value={values.selectFrom}
                  {...input}
                >
                  {props.currList}
                </Select>
              )}
            </Field>
            <SwapHorizIcon fontSize='large' color='primary' />
            <Field name='selectTo'>
              {({ input }) => (
                <Select
                  required
                  label='Konwertuj na'
                  variant='outlined'
                  name='selectTo'
                  value={values.selectTo}
                  {...input}
                >
                  {props.currList}
                </Select>
              )}
            </Field>
          </div>

          <Button
            fullWidth
            variant='contained'
            color='primary'
            type='submit'
            disabled={submitting || pristine}
          >
            {submitting && <CircularProgress />}
            Konwertuj
          </Button>
        </form>
      )}
    />
  )
}

export default MainForm
