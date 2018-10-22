import {
  LOCAL_STORAGE_PREFIX,
  LOCAL_STORAGE_LANGUAGE,
} from 'consts/names';
import { DEFAULT_LANGUAGE } from 'consts/language';

export const getLocale = () => {
  const keyName = `${LOCAL_STORAGE_PREFIX}${LOCAL_STORAGE_LANGUAGE}`;
  const localStorageLanguage = localStorage.getItem(keyName);

  if (!localStorageLanguage) {
    const currentLanguage = navigator.language || DEFAULT_LANGUAGE;

    localStorage.setItem(keyName, currentLanguage);

    return currentLanguage;
  }

  return localStorageLanguage;
};
