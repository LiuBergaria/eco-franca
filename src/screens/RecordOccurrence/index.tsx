import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Informations from './Informations';
import PickAddress from './PickAddress';
import PickAddressType from './PickAddressType';
import SelectProblem from './SelectProblem';
import { Container, HorizontalScroll } from './styles';
import ViolatorInformations from './ViolatorInformations';

const RecordOccurrence = (): JSX.Element => {
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
        <SelectProblem onNext={() => setCurrentPage(currentPage + 1)} />
        <PickAddressType onNext={() => setCurrentPage(currentPage + 1)} />
        <PickAddress onNext={() => setCurrentPage(currentPage + 1)} />
        <Informations />
        <ViolatorInformations />
      </HorizontalScroll>
    </Container>
  );
};

export default RecordOccurrence;
