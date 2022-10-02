import React from 'react';
import { Linking } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MPSPLogo from 'src/assets/mpsp-logo.jpeg';
import PrefeituraLogo from 'src/assets/prefeitura-logo.jpeg';
import {
  darkBlockStyleColors,
  lightBlockStyleColors,
} from 'src/components/PressableBlock';

import {
  Container,
  Wrapper,
  PersonsHeader,
  PersonContainer,
  PersonName,
  PersonInfoContainer,
  PersonsNote,
  LinkedInText,
  Header,
  SupportersHeader,
  SupportersContainer,
  SupporterPhoto,
} from './styles';

const persons = [
  {
    linkedIn: 'https://www.linkedin.com/in/helil-bergaria/',
    name: 'Helil Barbosa Bergária',
    colors: lightBlockStyleColors,
  },
  {
    linkedIn: 'https://www.linkedin.com/in/gabrielgarciasp/',
    name: 'Gabriel Henrique Leal Garcia',
    colors: darkBlockStyleColors,
  },
  {
    linkedIn: 'https://www.linkedin.com/in/pedro-reis-bab804176/',
    name: 'Pedro Lima Reis',
    colors: lightBlockStyleColors,
  },
  {
    linkedIn: 'https://www.linkedin.com/in/artursilvestredeoliveira/',
    name: 'Artur Silvestre de Oliveira',
    colors: darkBlockStyleColors,
  },
];

const textIndentation = '  ';

const AboutTheApp = (): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <Wrapper contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}>
        <Header
          style={{
            backgroundColor: lightBlockStyleColors.backgroundColor,
            color: lightBlockStyleColors.textColor,
          }}
        >
          {textIndentation}O software EcoFranca foi desenvolvido a partir de um
          evento chamado V Hackathon promovido pelo Departamento de Computação
          do Uni-FACEF com o objetivo de empoderar o cidadão francano nas
          questões ambientais e de urbanismo.
          {'\n\n' + textIndentation}Através desta solução, o cidadão pode enviar
          denúncias com os dados pertinentes, incluindo fotos, para a Guarda
          Civil Municipal. Assim, o cidadão terá em suas mãos as ocorrências
          enviadas, bem como as atualizações das providências tomadas pelas
          autoridades competentes de cada ocorrência.
        </Header>

        <PersonsHeader
          style={{
            backgroundColor: darkBlockStyleColors.backgroundColor,
            color: darkBlockStyleColors.textColor,
          }}
        >
          Conheça nossos desenvolvedores
          {'\n'}(apenas durante o V Hackathon)
        </PersonsHeader>

        {persons.map((person) => (
          <PersonContainer
            style={{ backgroundColor: person.colors.backgroundColor }}
            onPress={() => Linking.openURL(person.linkedIn)}
            key={person.name}
          >
            <PersonInfoContainer>
              <PersonName style={{ color: person.colors.textColor }}>
                {person.name}
              </PersonName>

              <LinkedInText style={{ color: person.colors.textColor }}>
                Clique aqui para abrir o perfil do LinkedIn
              </LinkedInText>
            </PersonInfoContainer>
          </PersonContainer>
        ))}

        <PersonsNote
          style={{
            backgroundColor: lightBlockStyleColors.backgroundColor,
            color: lightBlockStyleColors.textColor,
          }}
        >
          Os desenvolvedores acima foram responsáveis pela criação da aplicação
          inicial e não se encontram no time de manuntenção do aplicativo. Caso
          tenha problemas, procure a prefeitura.
        </PersonsNote>

        <SupportersHeader
          style={{
            backgroundColor: lightBlockStyleColors.backgroundColor,
            color: lightBlockStyleColors.textColor,
          }}
        >
          Conheça nossos apoiadores
        </SupportersHeader>
        <SupportersContainer
          style={{ backgroundColor: darkBlockStyleColors.backgroundColor }}
        >
          <SupporterPhoto source={MPSPLogo} resizeMode={'contain'} />
          <SupporterPhoto source={PrefeituraLogo} resizeMode={'contain'} />
        </SupportersContainer>
      </Wrapper>
    </Container>
  );
};

export default AboutTheApp;
