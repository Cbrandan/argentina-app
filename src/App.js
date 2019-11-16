import React from 'react';
import './App.css';
import ListProvincias from './components/Argentina/Provincias/ListProvincias';

function App() {


  return (
      <div className="App">
        <nav>
          Provincias Argentinas
          {/* <img src={logo} className="App-logo" alt="logo"/> */}
        </nav>
        <ListProvincias />
      </div>
  );
}
export default App;
