import { withStyles } from 'styles/themes/ExampleTheme/ExampleTheme';

export default withStyles(({ color }) => ({
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
}));
