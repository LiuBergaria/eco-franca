import * as Yup from 'yup';

const personalSectionSchema = Yup.object().shape({
  first_name: Yup.string().required('Esse campo é obrigatório'),
  last_name: Yup.string().required('Esse campo é obrigatório'),
  phone_number: Yup.string().required('Esse campo é obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Esse campo é obrigatório'),
});

export default personalSectionSchema;
