import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
`;

export const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'flex-end',
  },
})`
  flex: 1;

  width: 100%;
  padding: 24px;
`;

export const ItemsContainer = styled.View`
  width: 100%;
`;
