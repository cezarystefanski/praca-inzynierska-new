import { compose } from 'recompose';

import { ExampleBlockView as ExampleBlock } from './ExampleBlock';

import withStyles from './styles';

const enhance = compose(
  withStyles,
);

const Component = enhance(ExampleBlock);

export default Component;
