import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import { ExampleBlock } from './ExampleBlock';

const stories = storiesOf('common/ExampleBlock', module);
stories.addDecorator(withKnobs);

stories
  .add('without props', () => (
    <ExampleBlock />
  ))
  .add('with some props', () => (
    <ExampleBlock text="some example text" />
  ))
  .add('with dynamic variables', () => {
    const textProp = text('Example text', 'this is an example text');

    return <ExampleBlock text={textProp} />;
  });
