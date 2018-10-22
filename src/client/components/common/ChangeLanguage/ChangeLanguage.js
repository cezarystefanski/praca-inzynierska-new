import React from 'react';
import {
  LOCAL_STORAGE_PREFIX,
  LOCAL_STORAGE_LANGUAGE,
} from 'consts/names';
import { LANG_LIST } from 'consts/language';

export const ChangeLanguage = () => {
  const currentLanguage = `${LOCAL_STORAGE_PREFIX}${LOCAL_STORAGE_LANGUAGE}`;

  return (
    <p>
      <span>
        {currentLanguage}
        {JSON.stringify(LANG_LIST)}
      </span>
    </p>
  );
};
