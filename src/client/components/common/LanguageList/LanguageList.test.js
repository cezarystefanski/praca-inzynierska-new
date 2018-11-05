import React from 'react';
import { mount, shallow } from 'enzyme';
import { IntlProvider } from 'utils/IntlProvider';

import LanguageList from './index';

describe('component common/LanguageList', () => {
  const wrapper = mount(
    <IntlProvider>
      <LanguageList />
    </IntlProvider>,
  );

  it('should render correctly', () => {
    expect(wrapper.find('button'))
      .toHaveLength(2);
  });

  it('should not differ from earlier version', () => {
    const shallowWrapper = shallow(
      <LanguageList />,
    ).shallow();

    expect(shallowWrapper)
      .toMatchSnapshot();
  });
});
