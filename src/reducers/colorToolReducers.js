import { combineReducers } from "redux";

import {
  ADD_ACTION,
  DELETE_ACTION,
  SORT_ACTION,
} from "../actions/colorActions";

const colorList = [
  { id: 1, name: 'blue', hexcode: '0000ff' },
  { id: 2, name: 'red', hexcode: 'ff0000' },
  { id: 3, name: 'black', hexcode: '000000' },
  { id: 4, name: 'purple', hexcode: 'ff00ff' },
  { id: 5, name: 'white', hexcode: 'ffffff' },
  { id: 6, name: 'green', hexcode: '00ff00' },
];

export const colorReducer = (colors = colorList, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return [
        ...colors,
        {
          ...action.color,
          id: Math.max(...colors.map(c => c.id), 0) + 1,
        }
      ];
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

export const colorToolReducers = combineReducers({
  colors: colorReducer,
  sortInfo: sortReducer,
});
