import styled from 'styled-components/native';

import Logo from 'src/components/Logo';

export const Container = styled.SafeAreaView`
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

export const SizedLogo = styled(Logo)`
  width: 32%;
  margin-bottom: 32px;
`;

export const ItemsContainer = styled.View`
  width: 100%;
`;
