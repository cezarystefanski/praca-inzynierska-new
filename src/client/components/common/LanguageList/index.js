import { compose } from 'recompose';

import { LanguageListView as LanguageList } from './LanguageList';

import withStyles from './styles';

const enhance = compose(
  withStyles,
);

const Component = enhance(LanguageList);

export default Component;
