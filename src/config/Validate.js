import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'El campo es requerido.'
  },
  string: {
    email: 'Proporcione un email valido.'
  }
})

export default yup
