/* global jest */
import get from 'lodash/get';

/* eslint-disable no-undef */
import * as GlobalStoreContext from '../services/GlobalStore/GlobalStore';

/**
 * Mocks API call for you
 * @param responseJson
 * @returns {*}
 */
export const mockApiCall = responseJson =>
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(responseJson),
      headers: {
        get: () => 'application/vnd.api+json',
      },
      ok: true,
    })
  );

/**
 * Mocks useGlobalApi hook
 * @param partialApi {object} part of api object returned from hook
 * @returns {*}
 */
export const mockGlobalApiContext = partialApi =>
  jest
    .spyOn(GlobalStoreContext, 'useGlobalApi')
    .mockImplementation(() => partialApi);

/**
 * Mocks useGlobalState hook
 * @param partialStore {object} part of api object returned from hook
 * @returns {*}
 */
export const mockUseGlobalState = partialStore =>
  jest
    .spyOn(GlobalStoreContext, 'useGlobalState')
    .mockImplementation(path => [get(partialStore, path), jest.fn()]);

/* eslint-enable no-undef */
