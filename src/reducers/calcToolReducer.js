import {
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
  CLEAR_ACTION,
  DELETE_HISTORY_ENTRY_ACTION
} from "../actions/calcActions";

// Reducer: pure function
// 1. Only data input comes from parameters
// 2. Parameters cannot be mutated
// 3. Function cannot cause a side effect
// 4. Only result is the return value from the function
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