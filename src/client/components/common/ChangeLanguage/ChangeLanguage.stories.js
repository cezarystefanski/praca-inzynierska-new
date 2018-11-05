import React from 'react';
import { storiesOf } from '@storybook/react';

import { IntlProvider } from 'utils/IntlProvider';

import ChangeLanguage from './index';

const stories = storiesOf('common/ChangeLanguage', module);

stories
  .add('without props', () => (
    <IntlProvider locale="en" currentLanguage="en">
      <div style={{ backgroundColor: '#000' }}>
        <ChangeLanguage />
      </div>
    </IntlProvider>
  ));
