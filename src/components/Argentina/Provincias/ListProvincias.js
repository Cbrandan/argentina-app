import React, { Component } from 'react';
import Title from '../../title';
import ProvinciasData from './ProvinciasData';
import { url_api } from '../../constants/api_url';
import 'bootstrap/dist/css/bootstrap.css';

class ListProvincias extends Component {
  constructor() {
    super();
    this.state = {
      loadingPrv: false,
      provincias: []
    };
  }

  componentDidMount() {
    this.setState({ loadingPrv: true })

    fetch(`${url_api}provincias`, { method: 'GET' })
      .then(response => response.json())
      .then(resData => {
        this.setState({
          loadingPrv: false,
          provincias: resData.provincias
        });
      })
  }

  render() {
    if (this.state.loadingPrv) {
      return (
        <div className="titulo">Cargando...</div>
      );
    }

    return (
      alert(this.state.provincias),
      <div className="provincias">
        <Title className="App-header" nombre="Listado de provincias de Argentina" />
        {prvToComponents(this.state.provincias)}
      </div>
    )
  }
}

const prvToComponents = provincias => (
  provincias.map(row => <ProvinciasData key={row.id} provincia={row.nombre}/>)
);

export default ListProvincias;
