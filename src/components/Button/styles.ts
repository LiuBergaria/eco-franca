import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

interface IContainerProps {
  color: string;
}

interface ITitleProps {
  textColor: string;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  background-color: ${({ color }) => color};
  padding: 12px;
  border-radius: 4px;
`;

export const Title = styled.Text<ITitleProps>`
  color: ${({ textColor }) => textColor};
  text-align: center;
  font-size: 14px;
  font-family: ${Fonts.Inter.SemiBold};
`;
