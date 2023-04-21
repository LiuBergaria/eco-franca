import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  background-color: ${Colors.teal};

  padding: 24px;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;

  font-family: ${Fonts.Inter.SemiBold};
  font-size: 14px;
  color: ${Colors.white};

  text-align: center;
`;

export const HistoryContainer = styled.View``;

export const DatetimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 8px;
`;

export const DatetimeText = styled.Text`
  font-family: ${Fonts.Inter.Medium};
  font-size: 12px;

  color: ${Colors.lightTeal};
`;

export const DatetimeIcon = styled(FontAwesome5Icon).attrs({
  name: 'clock',
  solid: true,
  size: 12,
})`
  margin-right: 8px;

  color: ${Colors.lightTeal};
`;

export const HistoryTextContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const HistoryText = styled.Text`
  font-family: ${Fonts.Inter.Medium};
  font-size: 14px;

  color: ${Colors.white};
`;

interface IBadgeProps {
  last: boolean;
}

export const Badge = styled.View<IBadgeProps>`
  width: 20px;
  height: 20px;
  margin-right: 8px;

  background-color: ${({ last }) => (last ? Colors.teal : Colors.lightTeal)};

  border: 2px solid ${Colors.lightTeal};
  border-radius: 10px;
`;

export const HistoryCommentary = styled.View`
  background-color: ${Colors.white};

  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const HistoryCommentaryText = styled.Text`
  font-family: ${Fonts.Inter.Medium};
  font-size: 12px;

  color: ${Colors.black};
`;

export const FooterSeparator = styled.View`
  width: 100%;
  height: 2px;

  background-color: ${Colors.white};

  margin-bottom: 16px;
`;

export const FooterText = styled.Text`
  font-family: ${Fonts.Inter.Medium};
  font-size: 14px;

  color: ${Colors.white};
`;
