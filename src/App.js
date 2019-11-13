import React from 'react';
import './App.css';
import ListProvincias from './components/Argentina/Provincias/ListProvincias';

function App() {
  return (
    <div className="App">
      <p>Hola, antes de ListProvincias</p>
      <ListProvincias/>
      <p>Hola, despues de ListProvincias</p>
    </div>
  );
}
export default App;
