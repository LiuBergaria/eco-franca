import React from 'react';
import { Text } from 'react-native';

import OccurrenceTypes from 'src/enums/OccurrenceTypes';

const DescarteIrregularDeResiduosHelper = (): JSX.Element => {
  return <Text>Placeholder 1</Text>;
};

const DesmatamentoHelper = (): JSX.Element => {
  return <Text>Placeholder 2</Text>;
};

const LoteamentoIrregularHelper = (): JSX.Element => {
  return <Text>Placeholder 3</Text>;
};

const UsoIndevidoDeAreaPublicaHelper = (): JSX.Element => {
  return <Text>Placeholder 4</Text>;
};

const MausTratosContraAnimaisHelper = (): JSX.Element => {
  return <Text>Placeholder 5</Text>;
};

const AbandonoDeAnimaisHelper = (): JSX.Element => {
  return <Text>Placeholder 6</Text>;
};

export default {
  [OccurrenceTypes.DescarteIrregularDeResiduos]:
    DescarteIrregularDeResiduosHelper,
  [OccurrenceTypes.Desmatamento]: DesmatamentoHelper,
  [OccurrenceTypes.LoteamentoIrregular]: LoteamentoIrregularHelper,
  [OccurrenceTypes.UsoIndevidoDeAreaPublica]: UsoIndevidoDeAreaPublicaHelper,
  [OccurrenceTypes.MausTratosContraAnimais]: MausTratosContraAnimaisHelper,
  [OccurrenceTypes.AbandonoDeAnimais]: AbandonoDeAnimaisHelper,
};
