import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddAction,
  createDeleteAction,
  createSortAction,
} from '../actions/colorActions'; 

import { ColorTool } from '../components/ColorTool';

export const ColorToolContainer = () => {

  const colors = useSelector(state => {
    const { colors } = state;
    const { col: sortCol, dir: sortDir } = state.sortInfo;
    return [ ...colors ].sort((a,b) => {
      if (a[sortCol] === b[sortCol]) {
        return 0;
      } else {
        if (a[sortCol] < b[sortCol]) {
          return sortDir === 'asc' ? -1 : 1;
        } else {
          return sortDir === 'desc' ? -1 : 1;
        }
      }
    });
  });

  const toggleSortButtonText = useSelector(state => {
    const { col: sortCol, dir: sortDir } = state.sortInfo;
    if (sortCol === 'id') {
      return "Sorted by Id";
    } else {
      if (sortDir === 'asc') {
        return "Sorted by Name A->Z";
      } else {
        return "Sorted by Name Z->A";
      }
    }
  });

  const actions = bindActionCreators({
    onAddColor: createAddAction,
    onDeleteColor: createDeleteAction,
    onSortColors: createSortAction,
  }, useDispatch());

  return <ColorTool colors={colors} toggleSortButtonText={toggleSortButtonText} {...actions}/>;

};