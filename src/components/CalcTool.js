import { useState } from "react";

import { useCalcTool } from "../hooks/useCalcTool";

export const CalcTool = () => {

  const {
    result,
    history,
    errorMessage,
    onAdd: add,
    onSubtract: subtract,
    onMultiply: multiply,
    onDivide: divide,
    onClear: clear,
    onDeleteHistoryEntry: deleteHistoryEntry,
  } = useCalcTool();

  const [ numInput, setNumInput ] = useState(0);

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <div>
        Result: {result}
        <button type="button" onClick={clear}>Clear</button>
      </div>
      <form>
        <label>
          Num Input: <input type="number" value={numInput} 
          onChange={e => setNumInput(parseInt(e.target.value), 10)}/>
        </label>
        <fieldset>
          <button type="button" onClick={() => add(numInput)}>+</button>
          <button type="button" onClick={() => subtract(numInput)}>-</button>
          <button type="button" onClick={() => multiply(numInput)}>*</button>
          <button type="button" onClick={() => divide(numInput)}>/</button>
        </fieldset>
        <ul>
          {history.map(entry =>
          <li>
            {entry.id} - {entry.opName} - {entry.opValue}
            <button type="button" onClick={() => deleteHistoryEntry(entry.id)}>Delete</button>
          </li>)}
        </ul>
      </form>
    </>
  );
};