import { combineReducers } from "redux";

import {
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
  CLEAR_ACTION,
  DELETE_HISTORY_ENTRY_ACTION,
  SET_ERROR_MESSAGE_ACTION,
} from "../actions/calcActions";

export const historyReducer = (history = [], action) => {
  if ([ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {
    if (action.type === DIVIDE_ACTION && action.value === 0) {
      return history;
    }
    return [
      ...history,
      {
        id: Math.max(...history.map(h => h.id), 0) + 1,
        opName: action.type,
        opValue: action.value,
      },
    ]
  };
  if (action.type === CLEAR_ACTION) {
    return [];
  }
  if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
    return history.filter(entry => entry.id !== action.entryId);
  }
  return history;
};

// feature state pattern
// export const calcToolReducer = (state = {}, action) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
// };

export const errorMessageReducer = (errorMessage = "", action) => {
  if (action.type === SET_ERROR_MESSAGE_ACTION) {
    return action.errorMessage;
  }
  return "";
}

export const calcToolReducers = combineReducers({
  // result: resultReducer,
  history: historyReducer,
  errorMessage:  errorMessageReducer,
});

/*
export const calcToolReducer = (state = { result: 0 , history: [] }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.value,
        history: [
          ...state.history,
          {
            id: Math.max(...state.history.map(h => h.id), 0) + 1,
            opName: 'ADD',
            opValue: action.value,
          },
        ]
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.value,
        history: [
          ...state.history,
          {
            id: Math.max(...state.history.map(h => h.id), 0) + 1,
            opName: 'SUBTRACT',
            opValue: action.value,
          },
        ]
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        result: state.result * action.value,
        history: [
          ...state.history,
          {
            id: Math.max(...state.history.map(h => h.id), 0) + 1,
            opName: 'MULTIPLY',
            opValue: action.value,
          },
        ]
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        result: state.result / action.value,
        history: [
          ...state.history,
          {
            id: Math.max(...state.history.map(h => h.id), 0) + 1,
            opName: 'DIVIDE',
            opValue: action.value,
          },
        ]
      };
    case CLEAR_ACTION:
      return {
        ...state,
        result: 0,
        history: [],
      };
    case DELETE_HISTORY_ENTRY_ACTION:
      return {
        ...state,
        result: state.result,
        history: [...state.history].filter(entry => entry.id !== action.value),
        // history: [],
      };
    default:
      return state;
  }

};
*/