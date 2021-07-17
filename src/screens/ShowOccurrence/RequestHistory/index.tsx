import React from 'react';

import { format } from 'date-fns';

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

interface IProps {
  histories: Array<{
    datetime: Date;
    title: string;
    commentary?: string;
  }>;
  footer?: string;
}

const RequestHistory = ({ histories, footer }: IProps): JSX.Element => {
  return (
    <Container>
      <Title>Histórico da solicitação</Title>

      {histories.map((history, i) => (
        <HistoryContainer key={history.title}>
          <DatetimeContainer>
            <DatetimeIcon />
            <DatetimeText>
              {format(history.datetime, 'HH:mm')} de{' '}
              {format(history.datetime, 'dd/MM/yy')}
            </DatetimeText>
          </DatetimeContainer>

          <HistoryTextContainer>
            <Badge last={i === histories.length - 1} />
            <HistoryText>{history.title}</HistoryText>
          </HistoryTextContainer>

          {!!history.commentary && (
            <HistoryCommentary>
              <HistoryCommentaryText>
                {history.commentary}
              </HistoryCommentaryText>
            </HistoryCommentary>
          )}
        </HistoryContainer>
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
