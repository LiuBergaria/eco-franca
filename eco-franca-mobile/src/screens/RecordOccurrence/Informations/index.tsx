import React, { useState, useMemo, useCallback, useRef } from 'react';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Yup from 'yup';

import Button from 'src/components/Button';
import informationsSchema from 'src/schemas/RecordOccurrence/informationsSchema';
import getValidationErrors from 'src/utils/getValidationErrors';

import Photo from './Photo';
import {
  Container,
  FormContainer,
  Loader,
  ObservationInput,
  PhotoContainer,
  PhotoPlaceholder,
  StepText,
} from './styles';

interface IAddiotionalReturnData {
  assets: Asset[];
  occurrenceDate: string;
}

interface IProps {
  onNext: (data: IData & IAddiotionalReturnData) => void;
}

interface IData {
  observations: string;
}

const Informations = ({ onNext }: IProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoadingAssets, setIsLoadingAssets] = useState(false);

  const insets = useSafeAreaInsets();

  const submit: SubmitHandler<IData> = async (data): Promise<void> => {
    try {
      await informationsSchema.validate(data, { abortEarly: false });

      onNext({ ...data, assets, occurrenceDate: new Date().toISOString() });
    } catch (e) {
      if (e instanceof Yup.ValidationError) {
        formRef?.current?.setErrors(getValidationErrors(e));
      }
    }
  };

  const getImages = (): void => {
    setIsLoadingAssets(true);

    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 10 - assets.length,
      },
      (response) => {
        if (response.assets) {
          setAssets([...assets, ...response.assets]);
        }

        setIsLoadingAssets(false);
      },
    );
  };

  const removeFn = useCallback((index: number): void => {
    setAssets((oldAssets) => {
      const newAssets = [...oldAssets];

      newAssets.splice(index, 1);

      return newAssets;
    });
  }, []);

  const placeholders = useMemo(() => {
    const length = (3 - (assets.length % 3)) % 3;

    return Array.from({ length }, (_, i) => i);
  }, [assets.length]);

  const containerStyle = {
    paddingBottom: insets.bottom + 24,
    paddingTop: 24,
  };

  return (
    <Container contentContainerStyle={containerStyle}>
      <StepText>
        4. Preencha a data, hora, observações e selecione fotos
      </StepText>

      <FormContainer ref={formRef} onSubmit={submit}>
        {/* Data e Hora */}

        <ObservationInput
          name={'description'}
          placeholder={'Observações'}
          multiline={true}
        />
      </FormContainer>

      {isLoadingAssets && <Loader />}

      <PhotoContainer>
        {assets.map((asset, i) => (
          <Photo key={asset.uri} asset={asset} removeFn={() => removeFn(i)} />
        ))}

        {placeholders.map((placeholder) => (
          <PhotoPlaceholder key={placeholder} />
        ))}
      </PhotoContainer>

      {assets.length < 10 && (
        <Button
          title={'Adicionar imagens'}
          colorStyle={'teal'}
          onPress={getImages}
          disabled={isLoadingAssets}
        />
      )}

      {assets.length !== 0 && (
        <Button
          title={'Próximo'}
          onPress={() => formRef.current?.submitForm()}
        />
      )}
    </Container>
  );
};

export default Informations;
