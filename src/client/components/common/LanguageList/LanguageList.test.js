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

  const shallowWrapper = shallow(
    <LanguageList />,
  ).shallow();

  it('should render correctly', () => {
    expect(wrapper.find('button'))
      .toHaveLength(2);
  });

  it('should not differ from earlier version', () => {
    expect(shallowWrapper)
      .toMatchSnapshot();
  });

  it('should change language', () => {
    const button = wrapper.at(0).find('button').at(0);

    window.location.reload = jest.fn();

    button.simulate('click');

    expect(window.location.reload)
      .toHaveBeenCalled();

    window.location.reload.mockRestore();
  });

  it('should not change language when it\'s the same', () => {
    const wrapperInstance = shallowWrapper.instance();

    expect(wrapperInstance.changeLanguage('pl', 'pl'))
      .toBeFalsy();
  });
});
