import React, { Component } from 'react';
import getUrlDepByProv from '../../../services/getUrlDepByProv';
import Title from '../../../title';

 class ListDepartamentos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        departamentos: [],
        prov: props.Provincia
      };
      //this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
      fetch(getUrlDepByProv(this.state.prov), { method: 'GET' })
      .then(response => {return response.json()})
      .then(resData => {
        this.setState({
          loading: false,
          departamentos: resData.departamentos,
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
        <div className="container">
          <Title className="App-header" nombre="Listado de Departamentos por provincia" />
          {deptosToComponents(this.state.departamentos)}
        </div>
      )
    }
    }

    const deptosToComponents = departamentos => (
      departamentos.map(row => <DeptosData key={row.id} provincia={row.nombre} />)
    );

    const DeptosData = props => {
      return (
        <div>
          <h2>{props.provincia}</h2>
        </div>
      )
    }

    export default  ListDepartamentos;