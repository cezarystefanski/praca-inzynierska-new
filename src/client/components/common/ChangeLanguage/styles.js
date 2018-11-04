import { withStyles } from 'styles/themes/ExampleTheme/ExampleTheme';

export default withStyles(({ color, font }) => ({
  resettedButton: {
    background: 'none',
    color: 'inherit',
    border: 'none',
    padding: '0',
    font: 'inherit',
    cursor: 'inherit',
    outline: 'inherit',
    textDecoration: 'inherit',
  },
  container: {
    color: color.white,
    display: 'flex',
    fontSize: font.sizes.small,
  },
  changeLanguageBlock: {
    display: 'flex',
  },
  currentLanguageBlock: {
    marginRight: '1.5rem',
  },
  currentLanguageLabel: {
    marginRight: '0.5rem',
  },
  currentLanguageValue: {
    fontWeight: font.weights.bold,
  },
  inactiveLanguage: {
    color: color.grey,
    cursor: 'not-allowed',
    textDecoration: 'none',
  },
  languageElement: {
    cursor: 'pointer',
    marginLeft: '0.25rem',
    textDecoration: 'underline',

    ':not(:first-child)': {
      ':before': {
        color: color.white,
        content: '\'|\'',
        marginRight: '0.25rem',
      },
    },
  },
  languageList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
}));
