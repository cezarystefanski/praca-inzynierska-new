import {
  LOCAL_STORAGE_PREFIX,
  LOCAL_STORAGE_LANGUAGE,
} from 'consts/names';
import { DEFAULT_LANGUAGE } from 'consts/language';

const languageStorage = `${LOCAL_STORAGE_PREFIX}${LOCAL_STORAGE_LANGUAGE}`;

export const getCurrentLanguage = () => localStorage.getItem(languageStorage);

export const getLocale = () => {
  const localStorageLanguage = getCurrentLanguage();

  if (!localStorageLanguage) {
    const currentLanguage = navigator.language || DEFAULT_LANGUAGE;

    localStorage.setItem(languageStorage, currentLanguage);

    return currentLanguage;
  }

  return localStorageLanguage;
};

export const setLocale = (language) => {
  localStorage.setItem(languageStorage, language);

  document.location.reload();
  return true;
};
