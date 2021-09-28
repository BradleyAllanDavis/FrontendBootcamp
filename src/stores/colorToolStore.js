import { createStore } from 'redux';

import { colorToolReducers } from '../reducers/colorToolReducers';

export const colorToolStore = createStore(
  colorToolReducers,
);
