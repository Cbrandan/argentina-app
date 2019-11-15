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
    }


     render() {
      alert('Provincia consultada: ' + this.state.prov);
      if (this.state.loading) {
        return (
          <div className="titulo">Cargando...</div>
        );
      }
  
      return (
        <div className="container">
          <Title className="App-header" nombre="Listado de Departamentos por provincia" />
        </div>
      )
    }
    } 

    export default  ListDepartamentos;