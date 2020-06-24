/* global expect */
import React from 'react';

import Menu from '../Menu';
import { shallowWithIntl } from '../../helpers/intl-enzyme-test-helpers';

describe('Menu', () => {
  const wrapper = shallowWithIntl(<Menu />);

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
