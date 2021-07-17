import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';

import PressableBlock from 'src/components/PressableBlock';
import Fonts from 'src/styles/Fonts';

export const Container = styled.ScrollView`
  flex: 1;
  width: ${Dimensions.get('window').width};
  padding: 24px;
`;

export const StepText = styled.Text`
  margin-bottom: 16px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;

  color: ${({ theme }) => theme.foreground};
`;

export const TypesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface IStyledPressableBlockProps {
  odd: boolean;
}

export const StyledPressableBlock = styled(
  PressableBlock,
)<IStyledPressableBlockProps>`
  width: 40%;

  ${({ odd }) =>
    odd
      ? css`
          margin-right: 8px;
        `
      : css`
          margin-left: 8px;
        `};
`;
