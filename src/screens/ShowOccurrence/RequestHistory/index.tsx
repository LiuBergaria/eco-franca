import React from 'react';

import { format } from 'date-fns';

import OccurrenceStatus from 'src/enums/OccurrenceStatus';
import getOccurrenceStatusInformation from 'src/utils/getOccurrenceStatusInformation';

import {
  Container,
  Title,
  HistoryContainer,
  DatetimeText,
  DatetimeIcon,
  HistoryText,
  Badge,
  HistoryCommentary,
  FooterSeparator,
  FooterText,
  DatetimeContainer,
  HistoryTextContainer,
  HistoryCommentaryText,
} from './styles';

export interface IHistory {
  historyDate: string;
  title: OccurrenceStatus;
  description?: string;
}

interface IHistoryProps {
  history: IHistory;
  isLast: boolean;
}

const History = ({ history, isLast }: IHistoryProps): JSX.Element => {
  const { title } = getOccurrenceStatusInformation(
    OccurrenceStatus[history.title],
  );

  return (
    <HistoryContainer>
      <DatetimeContainer>
        <DatetimeIcon />
        <DatetimeText>
          {format(new Date(history.historyDate), 'HH:mm')} de{' '}
          {format(new Date(history.historyDate), 'dd/MM/yy')}
        </DatetimeText>
      </DatetimeContainer>

      <HistoryTextContainer>
        <Badge last={isLast} />
        <HistoryText>{title}</HistoryText>
      </HistoryTextContainer>

      {!!history.description && (
        <HistoryCommentary>
          <HistoryCommentaryText>{history.description}</HistoryCommentaryText>
        </HistoryCommentary>
      )}
    </HistoryContainer>
  );
};

interface IRequestHistoryProps {
  histories: IHistory[];
  footer?: string;
}

const RequestHistory = ({
  histories,
  footer,
}: IRequestHistoryProps): JSX.Element => {
  return (
    <Container>
      <Title>Histórico da solicitação</Title>

      {histories.map((history, i) => (
        <History
          key={history.title}
          history={history}
          isLast={i === histories.length - 1}
        />
      ))}

      {!!footer && (
        <>
          <FooterSeparator />
          <FooterText>{footer}</FooterText>
        </>
      )}
    </Container>
  );
};

export default RequestHistory;
