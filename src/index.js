import { createElement } from "react";
import { render } from "react-dom";

const HelloWorld3 = () => {
  return createElement('h1', null, 'Hello, World 3!');
};

render(createElement(HelloWorld3), document.querySelector('#root'));







