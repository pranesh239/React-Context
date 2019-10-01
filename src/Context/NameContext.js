import { createContext } from 'react';
import { noop } from '../utils';

/**
 * **defaultValue** only used when a component does not have a matching
 * Provider above it in the tree
 */
const defaultValue = {
  name: 'Initial name',
  updateName: noop
};

export default createContext(defaultValue);
