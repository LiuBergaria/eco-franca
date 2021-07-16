import React from 'react';
import { ImageProps, TouchableOpacity } from 'react-native';

import LogoImage from 'src/assets/logo-black.png';
import DarkLogoImage from 'src/assets/logo-white.png';
import { useTheme } from 'src/contexts/theme';

import { Image } from './styles';

type IProps = Omit<ImageProps, 'source'>;

const Logo = (props: IProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  const source = theme === 'light' ? LogoImage : DarkLogoImage;

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Image source={source} {...props} />
    </TouchableOpacity>
  );
};

export default Logo;
