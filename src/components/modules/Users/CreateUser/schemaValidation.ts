import * as Yup from 'yup'

export const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório').trim(),
  email: Yup.string()
    .required('Email obrigatório')
    .email('Digite um e-mail valido')
    .trim(),
  password: Yup.string()
    .min(6, 'No minimo 6 digitos')
    .required('Senha obrigatório'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Senha não conhecidem')

})