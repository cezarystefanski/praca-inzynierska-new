import React from 'react';
import { FormattedMessage } from 'react-intl';

import { css } from 'styles/themes/ExampleTheme/ExampleTheme';

import { getCurrentLanguage } from 'utils/language';
import { LANG_LIST } from 'consts/language';

import messages from './messages';
import withStyles from './styles';

import { LanguageList } from './LanguageList';

export const ChangeLanguageView = ({ styles }) => {
  const currentLanguage = getCurrentLanguage();

  return (
    <div {...css(styles.container)}>
      <FormattedMessage {...messages.CurrentLanguage}>
        {
          text => (
            <div {...css(styles.currentLanguageBlock)}>
              <span {...css(styles.currentLanguageLabel)}>{text}</span>
              <span {...css(styles.currentLanguageValue)}>{LANG_LIST[currentLanguage]}</span>
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage {...messages.ChangeLanguage}>
        {
          text => (
            <div {...css(styles.changeLanguageBlock)}>
              <span>{text}</span>
              <LanguageList
                currentLanguage={currentLanguage}
              />
            </div>
          )
        }
      </FormattedMessage>
    </div>
  );
};

export const ChangeLanguage = withStyles(ChangeLanguageView);
