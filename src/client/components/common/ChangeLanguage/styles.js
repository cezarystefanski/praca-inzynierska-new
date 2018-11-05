import { withStyles } from 'styles/themes/ExampleTheme/ExampleTheme';

export default withStyles(({ color, font }) => ({
  changeLanguageBlock: {
    display: 'flex',
  },
  container: {
    color: color.white,
    display: 'flex',
    fontSize: font.sizes.small,
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
}));
