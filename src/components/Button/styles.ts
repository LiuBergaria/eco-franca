import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

interface IContainerProps {
  color: string;
}

interface ITitleProps {
  textColor: string;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  width: 100%;

  padding: 12px;
  margin-bottom: 16px;

  background-color: ${({ color }) => color};

  border-radius: 4px;
`;

export const Title = styled.Text<ITitleProps>`
  color: ${({ textColor }) => textColor};
  text-align: center;
  font-size: 14px;
  font-family: ${Fonts.Inter.SemiBold};
`;
