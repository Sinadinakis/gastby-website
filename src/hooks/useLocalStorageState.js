import { useState } from 'react';

// Utils
import {
  getAppLocalData,
  appLocalStoragePrefix,
} from '../services/appLocalStorage';

/**
 * useState with localStorage save
 * @param key
 * @param initialValue
 * @returns {[unknown, setValue]}
 */
export function useLocalStorageState(key, initialValue) {
  if (!key) {
    throw new Error('Key must be provided to persist to localStorage');
  }

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = getAppLocalData(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : { value: initialValue };
    } catch (error) {
      // If error also return initialValue
      return { value: initialValue, error };
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Include a timestamp
      const localStorageValue = {
        value: valueToStore,
        timestamp: Date.now(),
      };
      // Save state
      setStoredValue(localStorageValue);

      // Save to local storage
      localStorage.setItem(
        `${appLocalStoragePrefix}${key}`,
        JSON.stringify(localStorageValue)
      );
    } catch (error) {
      // A more advanced implementation would handle the error case
      // console.log(error);
    }
  };

  return [storedValue.value, setValue];
}
