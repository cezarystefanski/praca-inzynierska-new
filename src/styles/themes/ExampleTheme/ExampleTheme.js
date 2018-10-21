import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite/no-important';
import { css, withStyles } from 'react-with-styles';

export const ExampleTheme = {
  color: {
    icyBlue: '#ccccff',
  },
  font: {
    sizes: {
      big: '20px',
      normal: '14px',
      small: '8px',
    },
    weights: {
      normal: 500,
      bold: 700,
    },
  },
};

ThemedStyleSheet.registerTheme(ExampleTheme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, ThemedStyleSheet };
