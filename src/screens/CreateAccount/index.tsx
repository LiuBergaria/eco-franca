import React, { useRef, useCallback, useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';

import { StackActions, useNavigation } from '@react-navigation/native';

import { useHeader } from 'src/contexts/header';
import api from 'src/services/api';

import CPFSectionBlock from './CPFSectionBlock';
import PasswordSectionBlock from './PasswordSectionBlock';
import PersonalSectionBlock from './PersonalSectionBlock';
import {
  Container,
  HorizontalScroll,
  Loader,
  LoaderContainer,
  LoaderText,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

const CreateAccount = (): JSX.Element => {
  const scrollRef = useRef<ScrollView>(null);
  const data = useRef({});

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const { addGoBackCallback, resetGoBackCallback } = useHeader();

  const scrollTo = useCallback((page: number) => {
    scrollRef.current?.scrollTo({
      x: Dimensions.get('window').width * (page - 1),
    });
  }, []);

  useEffect(() => {
    scrollTo(currentPage);

    if (currentPage === 1) {
      resetGoBackCallback();
    } else {
      const goBack = (): void => {
        setCurrentPage(currentPage - 1);
      };

      addGoBackCallback(goBack);
    }
  }, [scrollTo, currentPage, resetGoBackCallback, addGoBackCallback]);

  const createUser = async (): Promise<void> => {
    setIsLoading(true);

    const response = await api.post('/citizen', data.current);

    setIsLoading(false);

    if (response.status === 204) {
      resetGoBackCallback();
      navigation.dispatch(StackActions.pop(1));
      navigation.navigate('CreateAccountSuccess');
    }
  };

  return (
    <Container>
      <Wrapper>
        {!isLoading && (
          <>
            <Title>Crie sua{'\n'}conta</Title>
            <Subtitle>Faça seu cadastro de{'\n'}forma rápida e fácil</Subtitle>

            <HorizontalScroll
              ref={scrollRef}
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              snapToAlignment={'center'}
              snapToInterval={Dimensions.get('window').width}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            >
              <CPFSectionBlock
                goNext={(incomingData) => {
                  data.current = { ...data.current, ...incomingData };

                  setCurrentPage(currentPage + 1);
                }}
              />
              <PersonalSectionBlock
                goNext={(incomingData) => {
                  data.current = { ...data.current, ...incomingData };

                  setCurrentPage(currentPage + 1);
                }}
              />
              <PasswordSectionBlock
                goNext={(incomingData) => {
                  data.current = { ...data.current, ...incomingData };

                  createUser();
                }}
              />
            </HorizontalScroll>
          </>
        )}

        {isLoading && (
          <LoaderContainer>
            <Loader />
            <LoaderText>Criando sua conta, por favor aguarde!</LoaderText>
          </LoaderContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default CreateAccount;
