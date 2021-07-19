import React from 'react';

import { Container, Loader, Text } from './styles';

interface IProps {
  isLoading: boolean;
  loadingType: 'upload' | 'occurrence';
}

const Loading = ({ isLoading, loadingType }: IProps): JSX.Element => {
  return (
    <Container>
      <Loader />

      <Text>
        {loadingType === 'upload' ? 'Subindo imagens' : 'Criando ocorrência'}
      </Text>
    </Container>
  );
};

export default Loading;
