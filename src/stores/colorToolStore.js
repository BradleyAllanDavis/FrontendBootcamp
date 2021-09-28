import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { colorToolReducers } from '../reducers/colorToolReducers';

export const colorToolStore = createStore(
  colorToolReducers,
  applyMiddleware(thunk),
);
