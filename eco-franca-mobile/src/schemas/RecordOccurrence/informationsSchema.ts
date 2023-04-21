import * as Yup from 'yup';

const informationsSchema = Yup.object().shape({
  description: Yup.string().required('Esse campo é obrigatório'),
});

export default informationsSchema;
