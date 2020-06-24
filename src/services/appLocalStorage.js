export const appLocalStoragePrefix = 'yo:';

export const getAppLocalData = key =>
  localStorage.getItem(`${appLocalStoragePrefix}${key}`);
