import * as Yup from 'yup'

const schema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    cpf: Yup.string().required(),
    phone_number: Yup.string().required(),
})

export default schema
