import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

interface IItemProps {
  selected: boolean;
}

export const Item = styled.TouchableOpacity<IItemProps>`
  width: 48%;
  background-color: ${({ selected }) =>
    selected ? Colors.teal : Colors.lightTeal};
  padding: 12px;
  border-radius: 4px;
`;

interface ITextProps {
  selected: boolean;
}

export const Text = styled.Text<ITextProps>`
  color: ${({ selected }) => (selected ? Colors.white : Colors.black)};
  text-align: center;
  font-size: 14px;
  font-family: ${Fonts.Inter.Medium};
`;
