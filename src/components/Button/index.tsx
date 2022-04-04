import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export default function Button({
  isLoading,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container type="button" {...rest} disabled={isLoading || rest.disabled}>
      {isLoading ? 'Carregando...' : children}
    </Container>
  );
}
