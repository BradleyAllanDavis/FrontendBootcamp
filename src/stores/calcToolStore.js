import { createStore } from 'redux';

import { calcToolReducers } from '../reducers/calcToolReducers';

export const calcToolStore = createStore(
  calcToolReducers,
);
