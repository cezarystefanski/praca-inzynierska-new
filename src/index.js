import React from 'react';
import ReactDOM from 'react-dom';
import 'aphrodite-reset';

import { IntlProvider } from 'utils/IntlProvider';

import { getCurrentLanguage, getLocale } from 'utils/language';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const locale = getLocale();
const currentLanguage = getCurrentLanguage();

ReactDOM.render(
  <IntlProvider
    locale={locale}
    currentLanguage={currentLanguage}
  >
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
