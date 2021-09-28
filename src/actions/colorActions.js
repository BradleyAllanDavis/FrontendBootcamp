export const ADD_ACTION = 'ADD';
export const DELETE_ACTION = 'DELETE';
export const SORT_ACTION = 'SORT';

export const createAddAction = color => ({ type: ADD_ACTION, color });
export const createDeleteAction = colorId => ({ type: DELETE_ACTION, colorId });
export const createSortAction = col => ({ type: SORT_ACTION, col });