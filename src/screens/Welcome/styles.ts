import styled from 'styled-components/native';

import Button from 'src/components/Button';
import Logo from 'src/components/Logo';
import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  width: 100%;
  padding: 24px;

  align-items: center;
`;

export const SizedLogo = styled(Logo)`
  width: 30%;

  margin-bottom: 48px;
`;

export const Title = styled.Text`
  margin-bottom: 48px;

  font-family: ${Fonts.Archivo.SemiBold};
  font-size: 36px;
  text-align: center;

  color: ${({ theme }) => theme.foreground};
`;

export const Subtitle = styled.Text`
  margin-bottom: 48px;

  font-family: ${Fonts.Inter.Medium};
  font-size: 18px;
  color: ${Colors.teal};
  text-align: center;
`;

export const ActionsContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const ActionText = styled.Text`
  margin-bottom: 8px;

  font-family: ${Fonts.Inter.Regular};
  font-size: 16px;

  color: ${({ theme }) => theme.foreground};
`;

export const StyledButton = styled(Button)`
  margin-bottom: 8px;
`;
