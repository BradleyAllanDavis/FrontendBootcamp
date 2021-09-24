import { ADD_ACTION, SUBTRACT_ACTION } from "../actions/calcActions";

// Reducer: pure function
// 1. Only data input comes from parameters
// 2. Parameters cannot be mutated
// 3. Function cannot cause a side effect
// 4. Only result is the return value from the function
export const calcToolReducer = (state = { result: 0 }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return { ...state, result: state.result + action.value };
    case SUBTRACT_ACTION:
      return { ...state, result: state.result - action.value };
    default:
      return state;
  }

};