import { transparentize } from 'polished';

const custom = {
  black: '#393E46',
  teal: '#00ADB5',
  lightTeal: '#AAD8D3',
  white: '#F5F5F5',
  red: '#DC1637',
  transparent: 'transparent',
};

const placeholders = {
  teal: transparentize(0.45, custom.teal),
  lightTeal: transparentize(0.3, custom.lightTeal),
};

const Colors = {
  ...custom,
  placeholders,
};

export default Colors;
