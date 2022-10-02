import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import OccurrenceTypes from 'src/enums/OccurrenceTypes';
import getOccurrenceTypeInformation from 'src/utils/getOccurrenceTypeInformation';

import {
  Container,
  StepText,
  StyledPressableBlock,
  TypesContainer,
} from './styles';

interface IProps {
  onNext: (data: IData) => void;
}

interface IData {
  category: OccurrenceTypes;
}

const items = [
  OccurrenceTypes.DescarteIrregularDeResiduos,
  OccurrenceTypes.Desmatamento,
  OccurrenceTypes.LoteamentoIrregular,
  OccurrenceTypes.UsoIndevidoDeAreaPublica,
  OccurrenceTypes.MausTratosContraAnimais,
  OccurrenceTypes.AbandonoDeAnimais,
];

const SelectProblem = ({ onNext }: IProps): JSX.Element => {
  const insets = useSafeAreaInsets();

  const submit = (type: OccurrenceTypes): void => {
    onNext({ category: type });
  };

  const containerStyle = {
    paddingBottom: insets.bottom + 24,
    paddingTop: 24,
  };

  return (
    <Container contentContainerStyle={containerStyle}>
      <StepText>1. Escolha o tipo de problema</StepText>

      <TypesContainer>
        {items.map((enumType, i) => {
          const { icon, title } = getOccurrenceTypeInformation(enumType);

          return (
            <StyledPressableBlock
              key={icon}
              title={title}
              icon={icon}
              lightStyle={i === 0 || i === 3 || i === 4}
              isRow={false}
              odd={i % 2 === 0}
              onPress={() => submit(enumType)}
            />
          );
        })}
      </TypesContainer>
    </Container>
  );
};

export default SelectProblem;
