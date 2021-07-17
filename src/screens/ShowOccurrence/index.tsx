import React from 'react';

import OccurrenceCard from 'src/components/OccurenceCard';
import OccurrenceStatus from 'src/enums/OccurrenceStatus';
import OccurrenceTypes from 'src/enums/OccurrenceTypes';

import RequestHistory from './RequestHistory';
import { Container, Title, Wrapper } from './styles';

const data = {
  id: '1',
  category: OccurrenceTypes.DescarteIrregularDeResiduos,
  newNotification: true,
  number: '12355/2021',
  violationNumber: '98422',
  status: OccurrenceStatus.Encaminhamento2Promotoria,
  datetime: new Date('2021-05-22T11:07:12.351Z'),
};

const histories = [
  {
    datetime: new Date('2021-11-30T23:05:12.351Z'),
    title: 'Solicitação criada',
    commentary: 'Exemplo de comentário de troca de status',
  },
  {
    datetime: new Date('2021-11-30T23:05:12.351Z'),
    title: 'Solicitação criada2ß',
  },
  {
    datetime: new Date('2021-11-30T23:05:12.351Z'),
    title: 'Solicitação criada3',
    commentary: 'Exemplo de comentário de troca de status',
  },
];

const footer =
  'Para acompanhar o pedido, entre em contato pelo email policiaambiental@gov.com.br ou pelo telefone (016) 99999-9999';

const ShowOccurrence = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Title>Ocorrência {data.number ? `n° ${data.number}` : 'criada'}</Title>

        <OccurrenceCard data={data} lightStyle={true} />
        <RequestHistory histories={histories} footer={footer} />
      </Wrapper>
    </Container>
  );
};

export default ShowOccurrence;
