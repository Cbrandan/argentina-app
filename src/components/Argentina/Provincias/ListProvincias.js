import React, { Component } from 'react';
import Title from '../../title';
import ProvinciasData from './ProvinciasData';
import { url_api } from '../../constants/api_url';
import 'bootstrap/dist/css/bootstrap.css';

class ListProvincias extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      provincias: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true })

    fetch(`${url_api}provincias`, { method: 'GET' })
      .then(response => response.json())
      .then(resData => {
        this.setState({
          loading: false,
          provincias: resData.provincias,
          cantidad: resData.cantidad,
        });
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="titulo">Cargando...</div>
      );
    }

    return (
      <div className="provincias">
        <Title className="App-header" nombre="Listado de provincias de Argentina" />
        <div>
          {prvToComponents(this.state.provincias)}
        </div>
      </div>
    )
  }
}

const prvToComponents = provincias => (
  provincias.map(row => <ProvinciasData key={row.id} provincia={row.nombre} />)
);

export default ListProvincias;
