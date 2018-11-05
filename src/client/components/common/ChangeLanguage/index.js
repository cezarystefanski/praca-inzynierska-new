import { compose } from 'recompose';

import { ChangeLanguageView as ChangeLanguage } from './ChangeLanguage';

import withStyles from './styles';

const enhance = compose(
  withStyles,
);

const Component = enhance(ChangeLanguage);

export default Component;
