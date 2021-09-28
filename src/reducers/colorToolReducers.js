import { combineReducers } from "redux";

import {
  REFRESH_COLORS_DONE_ACTION,
  DELETE_ACTION,
  SORT_ACTION,
} from "../actions/colorActions";

// const colorList = [
//   { id: 1, name: 'blue', hexcode: '0000ff' },
//   { id: 2, name: 'red', hexcode: 'ff0000' },
//   { id: 3, name: 'black', hexcode: '000000' },
//   { id: 4, name: 'purple', hexcode: 'ff00ff' },
//   { id: 5, name: 'white', hexcode: 'ffffff' },
//   { id: 6, name: 'green', hexcode: '00ff00' },
// ];

export const colorsReducer = (colors = [], action) => {
  switch (action.type) {
    case REFRESH_COLORS_DONE_ACTION:
      return action.colors;
    case DELETE_ACTION:
      return colors.filter(c => c.id !== action.colorId);
    default:
      return colors;
  }
};

export const sortReducer = (sortInfo = { col: 'id', dir: 'asc'}, action) => {
  if (action.type === SORT_ACTION) {
    if (sortInfo.col === 'id') {
      return { col: 'name', dir: 'asc'};
    } else {
      if (sortInfo.dir === 'asc') {
        return { col: 'name', dir: 'desc'};
      } else {
        return { col: 'id', dir: 'asc'};
      }
    }
  }
  return sortInfo;
};

export const isLoadingReducer = (isLoading = false, action) => {
  if (action.type.endsWith('REQUEST')) {
    return true;
  }
  if (action.type.endsWith('DONE')) {
    return false;
  }
  return isLoading;
};

export const colorToolReducers = combineReducers({
  colors: colorsReducer,
  sortInfo: sortReducer,
  isLoading: isLoadingReducer,
});
