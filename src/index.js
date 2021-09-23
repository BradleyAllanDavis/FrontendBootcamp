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
  { id: 1, make: 'Tesla', model: '3', year: 2019, color: 'Silver', price: 47000 },
  { id: 2, make: 'Ford', model: 'T', year: 1910, color: 'Blue', price: 10000 },
  { id: 3, make: 'Tesla', model: 'Y', year: 2021, color: 'Black', price: 65000 },
  { id: 4, make: 'GM', model: 'Sierra', year: 2005, color: 'White', price: 34000 },
  { id: 5, make: 'Audi', model: 'A4', year: 2013, color: 'Red', price: 52000 },
];

render(
<>
  <ColorTool colors={colorList} />
  <CarTool cars={carList} />
</>,
document.querySelector('#root'));
