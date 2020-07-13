import React from 'react'
import { Form, Field } from 'react-final-form'
import {
  InputAdornment,
  Select,
  Button,
  Input,
  FormControl,
  FormHelperText,
  InputLabel
} from '@material-ui/core'

import SwapHorizIcon from '@material-ui/icons/SwapHoriz'

const validate = values => {
  const errors = {}
  if (!values.valueFrom) {
    errors.valueFrom = 'Nieprawidłowa wartość'
  }
  if (!values.converted) {
    errors.converted = 'Nieprawidłowa wartość'
  }
  if (!values.selectFrom) {
    errors.selectFrom = 'Nieprawidłowa wartość'
  }
  if (!values.selectTo) {
    errors.selectTo = 'Nieprawidłowa wartość'
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
              <FormControl fullWidth>
                <InputLabel>Wpisz kwotę</InputLabel>
                <Input
                  name='valueFrom'
                  required
                  endAdornment={
                    values.selectFrom && (
                      <InputAdornment>{values.selectFrom}</InputAdornment>
                    )
                  }
                  {...input}
                />
                <FormHelperText>{validate.errors}</FormHelperText>
              </FormControl>
            )}
          </Field>
          <Field name='converted'>
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
                <FormHelperText>{validate.errors}</FormHelperText>
              </FormControl>
            )}
          </Field>

          <div className='selects'>
            <Field name='selectFrom' component='select'>
              {({ input }) => (
                <FormControl variant='outlined'>
                  <InputLabel>Konwertuj z</InputLabel>
                  <Select
                    required
                    name='selectFrom'
                    labelWidth={96}
                    value={values.selectFrom}
                    {...input}
                  >
                    {props.currList}
                  </Select>
                </FormControl>
              )}
            </Field>
            <SwapHorizIcon fontSize='large' color='primary' />
            <Field name='selectTo'>
              {({ input }) => (
                <FormControl variant='outlined'>
                  <InputLabel>Konwertuj na</InputLabel>
                  <Select
                    required
                    name='selectTo'
                    labelWidth={96}
                    value={values.selectTo}
                    {...input}
                  >
                    {props.currList}
                  </Select>
                </FormControl>
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
            Konwertuj
          </Button>
          {console.log(values)}
        </form>
      )}
    />
  )
}

export default MainForm
