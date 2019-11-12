import React, { Fragment } from 'react';
import Provincias from './Provincias'

function Municipios(props){

    return(
      
        props.records.map((m) => 
        {return (
          
            <Provincias  key={m.id} nombre={m.nombre}  direccion={m.direccion} link={m.link}/>
          );})
    )  

  }

export default Municipios;