import React from 'react';

import Button from 'src/components/Button';
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

const informations = {
  name: 'Artur Silvestre de Oliveira',
  document: '123.456.789-10',
  whatsapp: '16 99211-1235',
  email: 'artuzinho@hotmail.com',
};

const MyAccount = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Title>Minha conta</Title>

      <InformationsContainer>
        <Row>
          <FieldContainer>
            <FieldName>Nome</FieldName>
            <FieldValue>{informations.name}</FieldValue>
          </FieldContainer>
        </Row>

        <Row>
          <FieldContainer>
            <FieldName>CPF</FieldName>
            <FieldValue>{informations.document}</FieldValue>
          </FieldContainer>

          <FieldContainer>
            <FieldName right={true}>WhatsApp</FieldName>
            <FieldValue right={true}>{informations.whatsapp}</FieldValue>
          </FieldContainer>
        </Row>

        <Row noMargin={true}>
          <FieldContainer>
            <FieldName>E-mail</FieldName>
            <FieldValue>{informations.email}</FieldValue>
          </FieldContainer>
        </Row>
      </InformationsContainer>

      <Button
        title={'Alternar para modo ' + (theme === 'light' ? 'escuro' : 'claro')}
        colorStyle={'teal'}
        onPress={toggleTheme}
      />

      <Button title={'Sair'} colorStyle={'red'} />
    </Container>
  );
};

export default MyAccount;
