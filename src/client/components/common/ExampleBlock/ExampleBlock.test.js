import React from 'react';
import { shallow } from 'enzyme';

import ExampleBlock from './index';

describe('component common/ExampleBlock', () => {
  const wrapper = shallow(
    <ExampleBlock text="example text" />,
  ).shallow();

  it('should render correctly with a prop', () => {
    expect(wrapper.find('p'))
      .toHaveLength(2);
  });

  it('should not differ from earlier version', () => {
    expect(wrapper)
      .toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const wrapperWithNoProps = shallow(
      <ExampleBlock />,
    ).shallow();

    expect(wrapperWithNoProps.find('p'))
      .toHaveLength(1);
  });
});
