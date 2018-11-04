import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const wrapper = shallow(
    <App />,
  ).shallow();

  it('should render correctly', () => {
    expect(wrapper.find('img'))
      .toHaveLength(1);
  });
});
