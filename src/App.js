import React, {Component} from 'react';
import './App.css';

import NavBar from "./componentes/navBar/navBar/navBar";
import itemListContainer from "./componentes/itemListContainer/itemListContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <itemListContainer greeting="Bienvenidos al carrito de compras" />
        </div>

      </div>
    );
  }
}

export default App;
