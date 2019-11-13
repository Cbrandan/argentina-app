import React, {Component} from 'react';
import Title from '../../title';
import ProvinciasData from './ProvinciasData';
import {url_api} from '../../constants/api_url';
import 'bootstrap/dist/css/bootstrap.css';

class ListProvincias extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      provincias: null
    };
}

componentDidMount() {
  alert('Alert_componentDidMount');
  this.setState({loading: true})

  fetch(`${url_api}provincias`, { method:'GET'})
  //let url = 'https://apis.datos.gob.ar/georef/api/provincias';
  //fetch(url, { method:'GET'})
    .then(response =>  response.json())
    .then(resData => {
        this.setState({ 
                    loading: false,
                    provincias: resData,
                    });
  })
}

render() {
  alert(this.state.loading);
  if(this.state.loading){
    return (
        <div className="titulo">Cargando....</div>
    );
  }

  return (
    console.log(this.state.provincias.results),

    <div class="container">
        {/* <image src="/flag.png"></image> */}
        {/* <image src="/mcultura.png"></image> */}
        <p>Llegamos a ListProvincias</p>
        <Title nombre="Listado de provincias de Argentina" />
    <div class="row">
    <ProvinciasData records = {this.state.provincias.results} />
  </div>
    </div>
)}  


}

export default ListProvincias;
