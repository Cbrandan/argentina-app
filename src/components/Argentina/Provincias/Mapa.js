import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { url_api } from '../../constants/api_url';

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingUbic: false,
      Centroide: []
    }
  }

  componentDidMount() {
    fetch(`${url_api}provincias?nombre=${this.props.Pcia}`, { method: 'GET' })
      .then(response => response.json())
      .then(resData => {
        this.setState({
          loadingUbic: false,
          Centroide: resData.provincias
        });
      })
  }

  render() {
    return (
      ctrToComponent(this.state.Centroide)
    )
  }
}


const ctrToComponent = provincia => (
  provincia.map(row =>
    <Map
      google={this.props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: row.centroide.lat, lng: row.centroide.lng }}
    >
      <Marker position={{ lat: -26.8753965086829, lng: -54.6516966230371 }} />
    </Map>
))

const mapStyles = {
  width: '50%',
  height: '50%',
};

export default GoogleApiWrapper({ apiKey: '' })(Mapa);

