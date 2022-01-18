import styled from 'styled-components/native';

import Fonts from 'src/styles/Fonts';

export const Container = styled.View`
  flex: 1;

  width: 100%;
  align-items: center;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;

  width: 100%;
  padding: 24px;
`;

export const Header = styled.Text`
  font-family: ${Fonts.Inter.Medium};
  font-size: 20px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

export const PersonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
`;

export const PersonInfoContainer = styled.View`
  flex: 1;
`;

export const PersonName = styled.Text`
  font-family: ${Fonts.Inter.Medium};
  font-size: 20px;

  flex: 1;
  margin-right: 16px;
  margin-bottom: 24px;
`;

export const PersonPhoto = styled.Image`
  width: 90px;
  aspect-ratio: 1;
`;

export const LinkedInContainer = styled.Text`
  font-family: ${Fonts.Inter.SemiBold};
  font-size: 14px;
`;
