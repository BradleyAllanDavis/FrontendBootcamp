import { render } from "react-dom";

import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool';
import { ColorTool } from "./components/ColorTool";

render(
<>
  <CarTool />
</>,
document.querySelector('#root'));


