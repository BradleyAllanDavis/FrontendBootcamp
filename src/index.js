import { render } from "react-dom";

import { CarTool } from './components/CarTool';
import { ColorTool } from "./components/ColorTool";

const colorList = [
  { id: 1, name: 'blue', hexcode: '0000ff' }, // object literal
  { id: 2, name: 'red', hexcode: 'ff0000' },
  { id: 3, name: 'black', hexcode: '000000' },
  { id: 4, name: 'purple', hexcode: 'ff00ff' },
  { id: 5, name: 'white', hexcode: 'ffffff' },
  { id: 6, name: 'green', hexcode: '00ff00' },
]; // array literal

const carList = [
  { id: 1, make: 'Tesla', model: 'Model 3', year: 2019, color: 'Silver', price: 60000 },
  { id: 2, make: 'Tesla', model: 'Model Y', year: 2021, color: 'Blue', price: 65000 },
  { id: 3, make: 'Ford', model: 'Model Y', year: 2021, color: 'Blue', price: 65000 },
];

render(
<>
  {/* createElement(ColorTool, { colors: colorList}) */}
  <ColorTool colors={colorList} />
  <CarTool cars={carList} />
</>,
document.querySelector('#root'));


