import React from 'react';

import { format } from 'date-fns';

import OccurrenceStatus from 'src/enums/OccurrenceStatus';
import OccurrenceTypes from 'src/enums/OccurrenceTypes';
import getOccurrenceStatusInformation from 'src/utils/getOccurrenceStatusInformation';
import getOccurrenceTypeInformation from 'src/utils/getOccurrenceTypeInformation';

import OccurrenceCardLoader from './Loader';
import {
  Container,
  FieldContainer,
  FieldName,
  FieldValue,
  Icon,
  NewNotificationBadge,
  Row,
  DatetimeContainer,
  DatetimeIcon,
  DatetimeText,
} from './styles';

export interface IOccurrence {
  id: string;
  category: OccurrenceTypes;
  status: OccurrenceStatus;
  description: string;
  occurrenceNumber: string | null;
  violationNumber: string | null;
  newNotification: boolean;
  occurrenceDate: Date;
}

interface IProps {
  data: IOccurrence;
  lightStyle?: boolean;
  onPress?: () => void;
}

const OccurrenceCard = ({
  data: {
    category,
    status,
    occurrenceNumber,
    violationNumber,
    newNotification,
    occurrenceDate,
  },
  lightStyle,
  onPress,
}: IProps): JSX.Element => {
  const datetime = new Date(occurrenceDate);

  const { title, icon } = getOccurrenceTypeInformation(
    OccurrenceTypes[category],
  );

  const { title: statusTitle } = getOccurrenceStatusInformation(
    OccurrenceStatus[status],
  );

  return (
    <Container
      activeOpacity={onPress ? 0.8 : 1}
      lightStyle={lightStyle}
      onPress={onPress}
    >
      <Row>
        <FieldValue lightStyle={lightStyle}>{title}</FieldValue>

        <Row>
          <Icon name={icon} lightStyle={lightStyle} />

          {newNotification && <NewNotificationBadge />}
        </Row>
      </Row>

      <Row>
        <FieldContainer>
          <FieldName lightStyle={lightStyle}>N° da ocorrência</FieldName>
          <FieldValue lightStyle={lightStyle}>
            {occurrenceNumber ?? '-'}
          </FieldValue>
        </FieldContainer>

        <FieldContainer>
          <FieldName lightStyle={lightStyle} right={true}>
            N° do auto de infração
          </FieldName>
          <FieldValue lightStyle={lightStyle} right={true}>
            {violationNumber ?? '-'}
          </FieldValue>
        </FieldContainer>
      </Row>

      <Row>
        <FieldContainer>
          <FieldName lightStyle={lightStyle}>Status</FieldName>
          <FieldValue lightStyle={lightStyle}>{statusTitle}</FieldValue>
        </FieldContainer>
      </Row>

      <DatetimeContainer>
        <DatetimeIcon lightStyle={lightStyle} />
        <DatetimeText lightStyle={lightStyle}>
          {format(datetime, 'HH:mm')} de {format(datetime, 'dd/MM/yy')}
        </DatetimeText>
      </DatetimeContainer>
    </Container>
  );
};

OccurrenceCard.Loader = OccurrenceCardLoader;

export default OccurrenceCard;
