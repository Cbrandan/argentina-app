import React, { Component } from 'react';
import getUrlDepByProv from '../../../services/getUrlDepByProv';
import Title from '../../../title';
import Mapa from '../Mapa';

class ListDepartamentos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      departamentos: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true })

    fetch(getUrlDepByProv(this.props.provincia), { method: 'GET' })
      .then(response => { return response.json() })
      .then(resData => {
        this.setState({
          loading: false,
          departamentos: resData.departamentos,
          centroide: resData.departamentos.centroide
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
      <div>
        <Title className="titulo" nombre="Listado de Departamentos por provincia" />
        <div className="detail">
          {deptosToComponents(this.state.departamentos)}
        </div>
        <div>
          {/* <Mapa Lat={this.state.centroide.lat} Lon={this.state.centroide.lon}/> */}
          <Mapa Lat={-26.8753965086829} Lng={-54.6516966230371}/>
        </div>
      </div>
    )
  }
}

const deptosToComponents = departamentos => (
  departamentos.map(row => <DeptosData key={row.id} depto={row.nombre} />)
);

const DeptosData = props => {
  return (
    <div>
      <h2>{props.depto}</h2>
    </div>
  )
}

export default ListDepartamentos;