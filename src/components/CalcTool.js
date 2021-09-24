import { useState } from "react";

export const CalcTool = ({
  result,
  history,
  onAdd: add,
  onSubtract: subtract,
  onMultiply: multiply,
  onDivide: divide,
  onClear: clear,
  onDeleteHistoryEntry: deleteHistoryEntry,
}) => {

  const [ numInput, setNumInput ] = useState(0);

  return (
    <>
      <div>Result: {result} <button type="button" onClick={clear}>Clear</button></div>
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
          {history.map(entry => <li>{entry.opName} - {entry.opValue}<button type="button" onClick={() => deleteHistoryEntry(entry.id)}>Delete</button></li>)}
        </ul>
      </form>
    </>
  );
};