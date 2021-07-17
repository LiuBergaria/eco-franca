import React from 'react';

import HelpMeButton from 'src/components/HelpMeButton';

import {
  Container,
  StepText,
  TypesContainer,
  Wrapper,
  StyledPressableBlock,
} from './styles';

const items = [
  { title: 'Descarte irregular de resíduos', icon: 'dumpster' },
  { title: 'Desmatamento', icon: 'tree' },
  { title: 'Loteamento irregular', icon: 'house-damage' },
  { title: 'Uso indevido de área pública', icon: 'exclamation-triangle' },
  { title: 'Maus tratos contra animais', icon: 'dog' },
  { title: 'Abandono de animais', icon: 'horse' },
];

const RecordOccurrence = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <StepText>1. Escolha o tipo de problema</StepText>

        <TypesContainer>
          {items.map((item, i) => (
            <StyledPressableBlock
              key={item.icon}
              title={item.title}
              icon={item.icon}
              lightStyle={i === 0 || i === 3 || i === 4}
              isRow={false}
              odd={i % 2 === 0}
              floatElement={<HelpMeButton />}
            />
          ))}
        </TypesContainer>
      </Wrapper>
    </Container>
  );
};

export default RecordOccurrence;
