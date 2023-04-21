import { transparentize } from 'polished';

import Colors from './Colors';

const Themes = {
  light: {
    background: Colors.white,
    foreground: Colors.black,
    animatedSquare: transparentize(0.9, Colors.teal),
  },
  dark: {
    background: Colors.black,
    foreground: Colors.white,
    animatedSquare: transparentize(0.9, Colors.white),
  },
};

export default Themes;
