import React, { useCallback } from 'react';

import Button from 'src/components/Button';
import { useAuth } from 'src/contexts/auth';
import { useTheme } from 'src/contexts/theme';

import {
  Container,
  FieldContainer,
  FieldName,
  FieldValue,
  InformationsContainer,
  Row,
  Title,
} from './styles';

const MyAccount = (): JSX.Element | null => {
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();

  const logout = useCallback(() => {
    signOut();
  }, [signOut]);

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Title>Minha conta</Title>

      <InformationsContainer>
        <Row>
          <FieldContainer>
            <FieldName>Nome</FieldName>
            <FieldValue>{user.first_name + ' ' + user.last_name}</FieldValue>
          </FieldContainer>
        </Row>

        <Row>
          <FieldContainer>
            <FieldName>CPF</FieldName>
            <FieldValue>{user.cpf}</FieldValue>
          </FieldContainer>

          <FieldContainer>
            <FieldName right={true}>WhatsApp</FieldName>
            <FieldValue right={true}>{user.phone_number}</FieldValue>
          </FieldContainer>
        </Row>

        <Row noMargin={true}>
          <FieldContainer>
            <FieldName>E-mail</FieldName>
            <FieldValue>{user.email}</FieldValue>
          </FieldContainer>
        </Row>
      </InformationsContainer>

      <Button
        title={'Alternar para modo ' + (theme === 'light' ? 'escuro' : 'claro')}
        colorStyle={'teal'}
        onPress={toggleTheme}
      />

      <Button title={'Sair'} colorStyle={'red'} onPress={logout} />
    </Container>
  );
};

export default MyAccount;
