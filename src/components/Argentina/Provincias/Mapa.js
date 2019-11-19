import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Mapa extends Component {
    constructor(props){
        super(props);
        }


render(){
return(
    <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: this.props.Lat, lng: this.props.Lon} }
    >
        <Marker position={{ lat: this.props.Lat, lng: this.props.Lon}} />
    </Map>

)}
}
const mapStyles = {
    width: '50%',
    height: '50%',
  };

export default GoogleApiWrapper({apiKey: ''}) (Mapa);

