import React, { Component } from 'react';

import { css } from 'styles/themes/ExampleTheme/ExampleTheme';

import { setLocale } from 'utils/language';
import { LANG_LIST } from 'consts/language';

export class LanguageListView extends Component {
  changeLanguage = (lang, currentLang) => {
    if (lang === currentLang) {
      return false;
    }

    return setLocale(lang);
  }

  render() {
    const languageValues = Object.keys(LANG_LIST);
    const { styles, currentLanguage } = this.props;

    return (
      <ul {...css(styles.languageList)}>
        {
          languageValues.map(lang => (
            <li
              {...css(
                styles.languageElement,
                lang === currentLanguage && styles.inactiveLanguage,
              )}
              key={lang}
            >
              <button
                {...css(styles.resettedButton)}
                onClick={() => this.changeLanguage(lang, currentLanguage)}
                type="button"
              >
                {LANG_LIST[lang]}
              </button>
            </li>
          ))
        }
      </ul>
    );
  }
}
