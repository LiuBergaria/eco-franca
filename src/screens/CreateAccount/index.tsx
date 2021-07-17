import React, { useRef, useCallback, useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CPFSectionBlock from './CPFSectionBlock';
import PasswordSectionBlock from './PasswordSectionBlock';
import PersonalSectionBlock from './PersonalSectionBlock';
import {
  Container,
  HorizontalScroll,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

const CreateAccount = (): JSX.Element => {
  const scrollRef = useRef<ScrollView>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const navigation = useNavigation();

  const scrollTo = useCallback((page: number) => {
    scrollRef.current?.scrollTo({
      x: Dimensions.get('window').width * (page - 1),
    });
  }, []);

  useEffect(() => {
    if (currentPage === 4) {
      navigation.navigate('CreateAccountSuccess');
    } else {
      scrollTo(currentPage);
    }
  }, [scrollTo, currentPage, navigation]);

  return (
    <Container>
      <Wrapper>
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
          <CPFSectionBlock goNext={() => setCurrentPage(currentPage + 1)} />
          <PersonalSectionBlock
            goNext={() => setCurrentPage(currentPage + 1)}
          />
          <PasswordSectionBlock
            goNext={() => setCurrentPage(currentPage + 1)}
          />
        </HorizontalScroll>
      </Wrapper>
    </Container>
  );
};

export default CreateAccount;
