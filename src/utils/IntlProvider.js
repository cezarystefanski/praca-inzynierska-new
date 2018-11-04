import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider as StockProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as pl from 'react-intl/locale-data/pl';

import { DEFAULT_LANGUAGE } from 'consts/language';

import messages from 'messages/messages.json';

/* istanbul ignore next line */
if (process.env.NODE_ENV !== 'test') {
  addLocaleData([...en, ...pl]);
}

export const IntlProvider = ({ children, currentLanguage, locale }) => (
  <StockProvider
    locale={locale}
    messages={messages[currentLanguage]}
  >
    {children}
  </StockProvider>
);

IntlProvider.propTypes = {
  children: PropTypes.node,
  currentLanguage: PropTypes.string,
  locale: PropTypes.string,
};

IntlProvider.defaultProps = {
  children: null,
  currentLanguage: DEFAULT_LANGUAGE,
  locale: DEFAULT_LANGUAGE,
};
