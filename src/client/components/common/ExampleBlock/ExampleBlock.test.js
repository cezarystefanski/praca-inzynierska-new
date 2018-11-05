import React from 'react';
import { shallow } from 'enzyme';

import ExampleBlock from './index';

describe('component common/ExampleBlock', () => {
<<<<<<< HEAD
  const wrapper = shallow(<ExampleBlock text="example text" />);
=======
  const wrapper = shallow(
    <ExampleBlock text="example text" />,
  ).shallow();
>>>>>>> 68a0b15... stash

  it('should render correctly with a prop', () => {
    expect(wrapper.find('p'))
      .toHaveLength(2);
  });

  it('should not differ from earlier version', () => {
    expect(wrapper)
      .toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
<<<<<<< HEAD
    const wrapperWithNoProps = shallow(<ExampleBlock />);
=======
    const wrapperWithNoProps = shallow(
      <ExampleBlock />,
    ).shallow();
>>>>>>> 68a0b15... stash

    expect(wrapperWithNoProps.find('p'))
      .toHaveLength(1);
  });
});
