import { useState } from 'react';
import { ColorList } from './ColorList';
import { ToolHeader } from './ToolHeader';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState([ ...props.colors]);

  const [
    colorForm, // state data
    setColorForm, // function to update the state data and re-render
  ] = useState({
    name: '', hexcode: '',
  });

  const change = e => {
    setColorForm({
      ...colorForm, // spread operator to copy the properties from the original color form to the new color form
      [ e.target.name ]: e.target.value,
      // hexcode: e.target.value
    }); // new object literal, so we have a new object reference saying the state change
  };

  const addColor = () => {
    setColors([
      ...colors,
      { ...colorForm, id: Math.max(...colors.map(c => c.id), 0) + 1 },
    ]);

    setColorForm({
      name: '', hexcode: '',
    });
  }
  
  return (
    <>
      <ToolHeader header='ColorTool'/>
      <ColorList colors={colors}/>
      <form>
        <label>
          Color Name:
          <input type="text" name="name" value={colorForm.name} onChange={change} />
        </label>
        <label>
          Color Hexcode:
          <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </label>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );
};