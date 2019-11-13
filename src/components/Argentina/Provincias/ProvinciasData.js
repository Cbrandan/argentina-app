import React, { Component } from 'react';

class ProvinciasData extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      provincias: []
    };
  }
  
  render() {
    
    return (
      <table>
        <ProvinciasHeader />
        <p>ProvinciasData</p>
        <ProvinciasBody Registros={this.state.provincias} />
      </table>
    )
  }
}

const ProvinciasHeader = () =>{
  return (
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Id</th>
      </tr>
    </thead>
  )
}

const ProvinciasBody = props => {
  alert('ProvinciasBody props' + props);
    const rows = props.Registros.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.nombre}</td>
        <td>{row.id}</td>
      </tr>
    )
  })
  
  return <tbody>{rows}</tbody>
}


export default ProvinciasData;