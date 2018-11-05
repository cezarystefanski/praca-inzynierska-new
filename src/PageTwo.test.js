import React from 'react';
import { shallow } from 'enzyme';

import { PageTwo } from './PageTwo';

describe('PageTwo', () => {
  const wrapper = shallow(
    <PageTwo />,
  ).shallow();

  it('should render correctly', () => {
    expect(wrapper.find('div'))
      .toHaveLength(1);
  });
});
