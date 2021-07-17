import React from 'react';

import OccurrenceCard from 'src/components/OccurenceCard';
import OccurrenceStatus from 'src/enums/OccurrenceStatus';
import OccurrenceTypes from 'src/enums/OccurrenceTypes';

import { Container, List, Title } from './styles';

const data = [
  {
    id: '1',
    category: OccurrenceTypes.DescarteIrregularDeResiduos,
    newNotification: true,
    number: '12355/2021',
    violationNumber: '98422',
    status: OccurrenceStatus.Encaminhamento2Promotoria,
    datetime: new Date('2021-05-22T11:07:12.351Z'),
  },
  {
    id: '2',
    category: OccurrenceTypes.Desmatamento,
    newNotification: false,
    number: '11235/2021',
    violationNumber: undefined,
    status: OccurrenceStatus.NaoProcede,
    datetime: new Date('2021-01-02T15:21:12.351Z'),
  },
  {
    id: '3',
    category: OccurrenceTypes.MausTratosContraAnimais,
    newNotification: false,
    number: undefined,
    violationNumber: undefined,
    status: OccurrenceStatus.SolicitacaoCriada,
    datetime: new Date('2021-11-30T23:05:12.351Z'),
  },
];

const MyOccurrences = (): JSX.Element => {
  return (
    <Container>
      <Title>Minhas ocorrências</Title>

      <List
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <OccurrenceCard data={item.item} lightStyle={item.index % 2 === 0} />
        )}
      />
    </Container>
  );
};

export default MyOccurrences;
