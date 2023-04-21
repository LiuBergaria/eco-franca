import styled from 'styled-components/native';

import Colors from 'src/styles/Colors';
import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  background-color: ${Colors.lightTeal};

  padding: 12px 24px;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const NoPhotosText = styled.Text`
  color: ${Colors.black};

  font-family: ${Fonts.Inter.SemiBold};
  font-size: 14px;

  text-align: center;
`;

export const ObservationText = styled.Text`
  margin-top: 16px;
  color: ${Colors.black};

  font-family: ${Fonts.Inter.Medium};
  font-size: 12px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Photo = styled.Image`
  width: 30%;
  aspect-ratio: 1;
  margin-bottom: 16px;
`;

export const PhotoPlaceholder = styled.View`
  width: 30%;
  height: 1;
`;
