interface IProps {
  quantity: number | string
  from: string
  to: string
}

export const validate = (values: IProps) => {
  const errors = {} as any
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
