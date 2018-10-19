import React from 'react';
import PropTypes from 'prop-types';

export const ExampleBlock = ({ text }) => (
  <div>
    <p>This is an empty block</p>
    {text && <p>{text}</p>}
  </div>
);

ExampleBlock.propTypes = {
  text: PropTypes.string,
};

ExampleBlock.defaultProps = {
  text: '',
};
