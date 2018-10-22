import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import { getLocale } from 'utils/language';
import messages from 'messages/messages.json';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const locale = getLocale();

ReactDOM.render(
  <IntlProvider
    locale={locale}
    messages={messages['en-GB']}
  >
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
