import React, { useMemo } from 'react';

import PhotosLoader from './Loader';
import {
  Container,
  NoPhotosText,
  ObservationText,
  Photo,
  Wrapper,
  PhotoPlaceholder,
} from './styles';

interface IProps {
  photos?: string[];
}

const Photos = ({ photos }: IProps): JSX.Element => {
  const placeholders = useMemo(() => {
    if (!photos) {
      return [];
    }

    const length = (3 - (photos.length % 3)) % 3;

    return Array.from({ length }, (_, i) => i);
  }, [photos]);

  return (
    <Container>
      {(!photos || !photos.length) && (
        <NoPhotosText>
          As fotos não estão mais{'\n'}disponíveis no servidor (*)
        </NoPhotosText>
      )}

      {photos && photos.length && (
        <Wrapper>
          {photos.map((photo) => (
            <Photo key={photo} source={{ uri: photo }} />
          ))}

          {placeholders.map((i) => (
            <PhotoPlaceholder key={i} />
          ))}
        </Wrapper>
      )}

      <ObservationText>
        *As fotos são armazenadas fora do servidor de tempos em tempos
      </ObservationText>
    </Container>
  );
};

Photos.Loader = PhotosLoader;

export default Photos;
