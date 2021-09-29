import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";
import { toggleSortButtonTextSelector } from "../selectors/toggleSortButtonTextSelector";

import {
  refreshColors,
  addColor,
  deleteColor,
  createSortAction,
} from '../actions/colorActions'; 

import { ColorTool } from '../components/ColorTool';

export const ColorToolContainer = () => {

  const colors = useSelector(sortedItemsSelector("colors", "sortInfo"));
  const toggleSortButtonText = useSelector(toggleSortButtonTextSelector);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    onRefreshColors: refreshColors,
    // callback handler : function that returns an action object
    onAddColor: addColor,
    onDeleteColor: deleteColor,
    onSortColors: createSortAction,
  }, dispatch), [dispatch]);

  return <ColorTool colors={colors} toggleSortButtonText={toggleSortButtonText} {...actions}/>;

};