import styled, { css } from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;

  padding: 24px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${({ theme }) => theme.foreground};
`;

export const InformationsContainer = styled.View`
  background-color: ${Colors.lightTeal};

  padding: 24px;
  margin-bottom: 16px;

  border-radius: 4px;
`;

interface IRowProps {
  noMargin?: boolean;
}

export const Row = styled.View<IRowProps>`
  flex-direction: row;
  justify-content: space-between;

  ${({ noMargin }) =>
    !noMargin &&
    css`
      margin-bottom: 16px;
    `}
`;

export const FieldContainer = styled.View``;

interface IFieldProps {
  right?: boolean;
}

export const FieldName = styled.Text<IFieldProps>`
  font-family: ${Fonts.Inter.Medium};
  font-size: 12px;

  color: ${Colors.black};

  ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}
`;

export const FieldValue = styled.Text<IFieldProps>`
  font-family: ${Fonts.Inter.Medium};
  font-size: 14px;

  color: ${Colors.black};

  ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}
`;
