import * as Yup from 'yup';

const pickAddressSchema = Yup.object().shape({
  address: Yup.string().required('Esse campo é obrigatório'),
  number: Yup.string().required('Esse campo é obrigatório'),
  district: Yup.string().required('Esse campo é obrigatório'),
  reference: Yup.string(),
});

export default pickAddressSchema;
