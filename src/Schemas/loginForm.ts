import * as yup from 'yup'

const loginFormSchema = yup.object().shape({
  username: yup.string().required('El nombre de usuario es obligatorio'),
  password: yup.string().required('La contraseña esa obligatoria')
})
export default loginFormSchema
