import React from 'react';
import { shallow } from 'enzyme';

import { MainLayout } from './MainLayout';

describe('MainLayout', () => {
  const wrapper = shallow(
    <MainLayout />,
  );

  it('should render correctly', () => {
    expect(wrapper)
      .toBeDefined();
  });
});
