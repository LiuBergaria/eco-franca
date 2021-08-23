import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  background-color: ${Colors.teal};

  padding: 12px 24px;
  margin-bottom: 16px;
  border-radius: 4px;
`;

const FieldRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const FieldContainer = styled.View`
  flex: 1;
  margin-bottom: 8px;
`;

const FieldName = styled.Text`
  color: ${Colors.white};

  font-family: ${Fonts.Inter.Medium};
  font-size: 12px;
`;

const FieldValue = styled.Text`
  color: ${Colors.white};

  font-family: ${Fonts.Inter.Medium};
  font-size: 14px;
`;

export const Field = {
  Row: FieldRow,
  Container: FieldContainer,
  Name: FieldName,
  Value: FieldValue,
};
