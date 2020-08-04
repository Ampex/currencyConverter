export const validate = values => {
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
