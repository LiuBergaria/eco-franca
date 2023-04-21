import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

function getValidationErrors(err: ValidationError): IErrors {
  const validationErrors: IErrors = {};

  err.inner.forEach(({ path, message }) => {
    if (path) {
      validationErrors[path] = message;
    }
  });

  return validationErrors;
}

export default getValidationErrors;
