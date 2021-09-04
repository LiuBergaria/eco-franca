import React from 'react';

import HelpMeButton from 'src/components/HelpMeButton';
import { useModal } from 'src/contexts/modal';
import OccurrenceTypes from 'src/enums/OccurrenceTypes';
import getOccurrenceTypeInformation from 'src/utils/getOccurrenceTypeInformation';

import ProblemsHelpers from './ProblemsHelpers';
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
  const { openModal, setModalContent } = useModal();

  const submit = (type: OccurrenceTypes): void => {
    onNext({ category: type });
  };

  const handleHelper = (type: OccurrenceTypes): void => {
    setModalContent(ProblemsHelpers[type]);

    openModal();
  };

  return (
    <Container>
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
              floatElement={
                <HelpMeButton onPress={() => handleHelper(enumType)} />
              }
              onPress={() => submit(enumType)}
            />
          );
        })}
      </TypesContainer>
    </Container>
  );
};

export default SelectProblem;
