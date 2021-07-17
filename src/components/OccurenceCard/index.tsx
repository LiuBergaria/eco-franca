import React from 'react';

import { format } from 'date-fns';

import OccurrenceStatus from 'src/enums/OccurrenceStatus';
import OccurrenceTypes from 'src/enums/OccurrenceTypes';
import getOccurrenceStatusInformation from 'src/utils/getOccurrenceStatusInformation';
import getOccurrenceTypeInformation from 'src/utils/getOccurrenceTypeInformation';

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

interface IProps {
  data: {
    category: OccurrenceTypes;
    newNotification: boolean;
    number?: string;
    violationNumber?: string;
    status: OccurrenceStatus;
    datetime: Date;
  };
  lightStyle?: boolean;
  onPress?: () => void;
}

const OccurrenceCard = ({
  data: {
    category,
    newNotification,
    number,
    violationNumber,
    status,
    datetime,
  },
  lightStyle,
  onPress,
}: IProps): JSX.Element => {
  const { title, icon } = getOccurrenceTypeInformation(category);

  const { title: statusTitle } = getOccurrenceStatusInformation(status);

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
          <FieldValue lightStyle={lightStyle}>{number ?? '-'}</FieldValue>
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

export default OccurrenceCard;
