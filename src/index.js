import { render } from "react-dom";

import { CarTool } from './components/CarTool';
import { ColorTool } from "./components/ColorTool";

render(
<>
  <CarTool />
  <ColorTool />
</>,
document.querySelector('#root'));


