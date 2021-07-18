import { cpf } from 'cpf-cnpj-validator';
import * as Yup from 'yup';

const cpfSectionSchema = Yup.object().shape({
  cpf: Yup.string()
    .length(11, 'CPF inválido')
    .test(
      'valid-cpf',
      'CPF inválido',
      (value) => value !== undefined && cpf.isValid(value),
    )
    .required('Esse campo é obrigatório'),
});

export default cpfSectionSchema;
