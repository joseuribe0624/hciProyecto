import yup from './Validate'



export const login_schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})
