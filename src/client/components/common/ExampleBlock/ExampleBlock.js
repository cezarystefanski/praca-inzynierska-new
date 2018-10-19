import React from 'react';
import PropTypes from 'prop-types';
import { css } from '../../../styles/themes/ExampleTheme/ExampleTheme';

import withStyles from './styles';

const ExampleBlockView = ({ text, styles }) => (
  <div {...css(styles.container)}>
    <p {...css(styles.heading)}>This is an empty block</p>
    {text && <p {...css(styles.optionalParagraph)}>{text}</p>}
  </div>
);

ExampleBlockView.propTypes = {
  text: PropTypes.string,
};

ExampleBlockView.defaultProps = {
  text: '',
};

export const ExampleBlock = withStyles(ExampleBlockView);
