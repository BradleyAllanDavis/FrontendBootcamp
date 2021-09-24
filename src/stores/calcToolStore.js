import { createStore } from 'redux';

import { calcToolReducer } from '../reducers/calcToolReducer';

export const calcToolStore = createStore(
  calcToolReducer,
);
