import React, {Component} from 'react';
//import Title from './components/title';
import {url_api} from '../constants/api_url';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';

class listProvincias extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      provincias: null
    };
}

componentDidMount() {

  this.setState({loading: true})

  fetch(`${url_api}provincias`, { method:'GET'})
    .then(response =>  response.json())
    .then(resData => {
        this.setState({ 
                    loading: false,
                    provincias: resData,
                    });
  })
}

render() {

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
      <Title nombre="Listado de provincias de Argentina" />
  <div class="row">
  
    <provinciasDetail records = {this.state.provincias.results} />
 

  </div>
    </div>
)}  


}

export default listProvincias;
