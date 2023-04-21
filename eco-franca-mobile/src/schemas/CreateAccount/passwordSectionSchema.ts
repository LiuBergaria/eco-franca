import * as Yup from 'yup';

const passwordSectionSchema = Yup.object().shape({
  password: Yup.string().required('Esse campo é obrigatório'),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), null],
      'Senha e confirmação de senha estão diferentes',
    )
    .required('Esse campo é obrigatório'),
});

export default passwordSectionSchema;
