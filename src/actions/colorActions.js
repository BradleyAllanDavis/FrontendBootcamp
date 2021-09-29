export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';

export const ADD_COLOR_REQUEST_ACTION = 'ADD_COLOR_REQUEST';
export const ADD_COLOR_DONE_ACTION = 'ADD_COLOR_DONE';

export const DELETE_COLOR_REQUEST_ACTION = 'DELETE_COLOR_REQUEST';
export const DELETE_COLOR_DONE_ACTION = 'DELETE_COLOR_DONE';

export const SORT_ACTION = 'SORT';

export const createRefreshColorsRequestAction = () => ({ type: REFRESH_COLORS_REQUEST_ACTION });
export const createRefreshColorsDoneAction = (colors) => ({ type: REFRESH_COLORS_DONE_ACTION, colors });

export const createAddRequestAction = newColor => ({ type: ADD_COLOR_REQUEST_ACTION, newColor });
export const createAddDoneAction = addedColor => ({ type: ADD_COLOR_DONE_ACTION, addedColor });

export const createDeleteRequestAction = colorId => ({ type: DELETE_COLOR_REQUEST_ACTION, colorId });
export const createDeleteDoneAction = deletedColor => ({ type: DELETE_COLOR_DONE_ACTION, deletedColor });

export const createSortAction = col => ({ type: SORT_ACTION, col });

export const refreshColors = () => {
  // this function being returned is the thunk action
  return dispatch => {
    dispatch(createRefreshColorsRequestAction());

    return fetch('http://localhost:3060/colors')
      .then(res => res.json())
      .then(colors => dispatch(createRefreshColorsDoneAction(colors)));
  };
};

export const addColor = (newColor) => {
  return async dispatch => {
    dispatch(createAddRequestAction(newColor));

    const res = await fetch('http://localhost:3060/colors',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newColor),
    });
    const appendedCar = await res.json();

    dispatch(createAddDoneAction(appendedCar));
    dispatch(refreshColors());
  };
};

export const deleteColor = (colorId) => {
  return async dispatch => {
    dispatch(createDeleteRequestAction(colorId));

    const res = await fetch('http://localhost:3060/colors/' + encodeURIComponent(colorId),
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    const deletedColor = await res.json();

    dispatch(createDeleteDoneAction(deletedColor));
    dispatch(refreshColors());
  };
};