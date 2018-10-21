import { withStyles } from '../../../styles/themes/ExampleTheme/ExampleTheme';

export default withStyles(({ color, font }) => ({
  container: {
    backgroundColor: color.icyBlue,
    padding: '25px 50px',
    marginTop: '30px',
    borderRadius: '15px',
  },
  heading: {
    fontSize: font.sizes.big,
    fontWeight: font.weights.bold,
  },
  optionalParagraph: {
    fontSize: font.sizes.normal,
  },
}));
