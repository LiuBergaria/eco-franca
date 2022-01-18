import React from 'react';
import { Linking } from 'react-native';

import ArturPhoto from 'src/assets/artur-photo.jpeg';
import GabrielPhoto from 'src/assets/gabriel-photo.jpeg';
import HelilPhoto from 'src/assets/helil-photo.png';
import PedroPhoto from 'src/assets/pedro-photo.jpeg';
import {
  darkBlockStyleColors,
  lightBlockStyleColors,
} from 'src/components/PressableBlock';

import {
  Container,
  Wrapper,
  PersonContainer,
  PersonName,
  PersonPhoto,
  PersonInfoContainer,
  LinkedInContainer,
  Header,
} from './styles';

const persons = [
  {
    linkedIn: 'https://www.linkedin.com/in/helil-bergaria/',
    name: 'Helil Barbosa Bergária',
    photo: HelilPhoto,
    colors: lightBlockStyleColors,
  },
  {
    linkedIn: 'https://www.linkedin.com/in/gabrielgarciasp/',
    name: 'Gabriel Henrique Leal Garcia',
    photo: GabrielPhoto,
    colors: darkBlockStyleColors,
  },
  {
    linkedIn: 'https://www.linkedin.com/in/pedro-reis-bab804176/',
    name: 'Pedro Lima Reis',
    photo: PedroPhoto,
    colors: lightBlockStyleColors,
  },
  {
    linkedIn: 'https://www.linkedin.com/in/artursilvestredeoliveira/',
    name: 'Artur Silvestre de Oliveira',
    photo: ArturPhoto,
    colors: darkBlockStyleColors,
  },
];

const AboutTheApp = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Header
          style={{
            backgroundColor: darkBlockStyleColors.backgroundColor,
            color: darkBlockStyleColors.textColor,
          }}
        >
          Projeto desenvolvido no 5º Hackathon da Uni-FACEF
        </Header>

        {persons.map((person) => (
          <PersonContainer
            style={{ backgroundColor: person.colors.backgroundColor }}
            key={person.name}
          >
            <PersonInfoContainer>
              <PersonName style={{ color: person.colors.textColor }}>
                {person.name}
              </PersonName>

              <LinkedInContainer
                style={{ color: person.colors.textColor }}
                onPress={() => Linking.openURL(person.linkedIn)}
              >
                Clique aqui para abrir{'\n'}o perfil do LinkedIn
              </LinkedInContainer>
            </PersonInfoContainer>
            <PersonPhoto source={person.photo} />
          </PersonContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default AboutTheApp;
