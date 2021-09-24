import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  createAddAction, createSubtractAction, createMultiplyAction, createDivideAction, createClearAction,
} from '../actions/calcActions'; 

import { CalcTool } from '../components/CalcTool';

export const CalcToolContainer = () => {

  const result = useSelector(state => state.result);

  const actions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
  }, useDispatch());

  // alternative to above
  // const dispatch = useDispatch();
  // // const onAdd = value => dispatch(createAddAction(value));
  // const onAdd = value => {
  //   const addAction = createAddAction(value);
  //   dispatch(addAction);
  // }
  // const onSubtract = value => dispatch(createSubtractAction(value));
  // const actions = {
  //   onAdd, onSubtract,
  // };

  return <CalcTool result={result} {...actions} />

};