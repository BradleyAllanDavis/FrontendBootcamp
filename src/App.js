import { Provider } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

import { calcToolStore } from "./stores/calcToolStore";

import { CalcToolContainer } from "./containers/CalcToolContainer";
import { CarTool } from './components/CarTool';
import { ColorTool } from "./components/ColorTool";
import { CarToolStoreProvider } from "./contexts/carToolStoreContext";

const colorList = [
  { id: 1, name: 'blue', hexcode: '0000ff' }, // object literal
  { id: 2, name: 'red', hexcode: 'ff0000' },
  { id: 3, name: 'black', hexcode: '000000' },
  { id: 4, name: 'purple', hexcode: 'ff00ff' },
  { id: 5, name: 'white', hexcode: 'ffffff' },
  { id: 6, name: 'green', hexcode: '00ff00' },
];

const carList = [
  { id: 1, make: 'Tesla', model: '3', year: 2019, color: 'Silver', price: 47000 },
  { id: 2, make: 'Ford', model: 'T', year: 1910, color: 'Blue', price: 22000 },
  { id: 3, make: 'Tesla', model: 'Y', year: 2021, color: 'Black', price: 65000 },
  { id: 4, make: 'GM', model: 'Sierra', year: 2005, color: 'White', price: 34000 },
  { id: 5, make: 'Audi', model: 'A4', year: 2013, color: 'Red', price: 52000 },
];

export function App() {
  return (
    <div className="container">
      <header id="page-header">
        <h1>The Tools</h1>
      </header>
      <nav id="menubar">
        <ul>
          <li className="menuitem"><Link to="/">Home</Link></li>
          <li className="menuitem"><Link to="/color-tool">ColorTool</Link></li>
          <li className="menuitem"><Link to="/car-tool">CarTool</Link></li>
          <li className="menuitem"><Link to="/calc-tool">CalcTool</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact><h2>Home</h2></Route>
          <Route path="/color-tool">
            <ColorTool colors={colorList} />
          </Route>
          <Route path="/car-tool">
            <CarToolStoreProvider cars={carList}>
              <CarTool /> {/* children */}
            </CarToolStoreProvider>
          </Route>
          <Route path="/calc-tool">
            <Provider store={calcToolStore}>
              <CalcToolContainer />
            </Provider>
          </Route>
        </Switch>
      </main>
      <aside id="sidebar">
        Sidebar
      </aside>
      <footer id="page-footer">
        <small>Footer</small>
      </footer>
    </div>
  );
}
