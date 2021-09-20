import { render } from "react-dom";

import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool';

render(<HelloWorld />, document.querySelector('#root'));
render(<CarTool />, document.querySelector('#CarTool'));







