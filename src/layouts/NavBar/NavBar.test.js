import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from './NavBar';

describe('NavBar', () => {
  const wrapper = shallow(
    <NavBar />,
  );

  it('should render correctly', () => {
    expect(wrapper)
      .toBeDefined();
  });
});
