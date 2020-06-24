import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { reducer } from './reducer';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import get from 'lodash/get';

const initialState = { api: {} };
const GlobalStoreContext = createContext(initialState);
const { Provider } = GlobalStoreContext;

/**
 * Returns whole or partial state
 * @param path {string} path of the store to get
 * @returns {*[]}
 */
export const useGlobalState = (path = undefined) => {
  const { state, dispatch } = useContext(GlobalStoreContext);
  return [path ? get(state, path) : state, dispatch];
};

// export const useGlobalApi = () => useGlobalState('api');

const StateProvider = ({ children }) => {
  const [localStorageState, setLocalStorage] = useLocalStorageState(
    'globalState',
    {}
  );

  const [state, dispatchToReactState] = useReducer(reducer, {
    ...initialState,
    ...localStorageState,
  });

  const dispatch = action => {
    dispatchToReactState(action);
    setLocalStorage(state);
  };

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.any,
};

export { StateProvider };

export default GlobalStoreContext;
