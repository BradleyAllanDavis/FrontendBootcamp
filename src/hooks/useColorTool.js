import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddAction,
  createDeleteAction,
  createSortAction,
  ADD_ACTION,
  DELETE_ACTION,
  SORT_ACTION,
} from '../actions/colorActions'; 

export const useColorTool = () => {

  const colors = useSelector(state => state.colors);
  const sortInfo = useSelector(state => state.sortInfo);

  const actions = bindActionCreators({
    onAdd: createAddAction,
    onDelete: createDeleteAction,
    onSort: createSortAction,
  }, useDispatch());

  return {
    colors,
    sortInfo,
    ...actions,
  };

}