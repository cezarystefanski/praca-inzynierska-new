import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import { IntlProvider } from 'utils/IntlProvider';

import { ExampleBlock } from './ExampleBlock';

const stories = storiesOf('common/ExampleBlock', module);
stories.addDecorator(withKnobs);

stories
  .add('without props', () => (
    <IntlProvider locale="en" currentLanguage="en">
      <ExampleBlock />
    </IntlProvider>
  ))
  .add('with some props', () => (
    <IntlProvider locale="en" currentLanguage="en">
      <ExampleBlock text="some example text" />
    </IntlProvider>
  ))
  .add('with dynamic variables', () => {
    const textProp = text('Example text', 'this is an example text');

    return (
      <IntlProvider locale="en" currentLanguage="en">
        <ExampleBlock text={textProp} />
      </IntlProvider>
    );
  });
