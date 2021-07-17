import React from 'react';

import { Container, Item, Text } from './styles';

interface IProps {
  selected: number | undefined;
  setSelected: (value: number | undefined) => void;
}

const Switch = ({ selected, setSelected }: IProps): JSX.Element => {
  return (
    <Container>
      <Item
        selected={selected === 0}
        onPress={() => setSelected(selected === 0 ? undefined : 0)}
        activeOpacity={0.8}
      >
        <Text selected={selected === 0}>Sim</Text>
      </Item>

      <Item
        selected={selected === 1}
        onPress={() => setSelected(selected === 1 ? undefined : 1)}
        activeOpacity={0.8}
      >
        <Text selected={selected === 1}>Não</Text>
      </Item>
    </Container>
  );
};

export default Switch;
