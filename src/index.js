import { render } from "react-dom";

import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool';

render(
<>
  <HelloWorld />
  <CarTool />
</>,
document.querySelector('#root'));


