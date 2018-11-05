import React from 'react';
import { mount, shallow } from 'enzyme';
import { IntlProvider } from 'utils/IntlProvider';

import ChangeLanguage from './index';

describe('component common/ChangeLanguage', () => {
  const wrapper = mount(
    <IntlProvider>
      <ChangeLanguage />
    </IntlProvider>,
  );

  it('should render correctly', () => {
    expect(wrapper.find('button'))
      .toHaveLength(2);
  });

  it('should not differ from earlier version', () => {
    const shallowWrapper = shallow(
      <ChangeLanguage />,
    ).shallow();

    expect(shallowWrapper)
      .toMatchSnapshot();
  });
});
