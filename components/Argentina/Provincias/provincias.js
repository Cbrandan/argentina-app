import React from 'react';



function Provincias(props) {
  return (
    <div class="card col-6" id="cardstyle">
        <div class="card-body">
            <h5 class="card-title">{props.id}</h5>
            <p class="card-text">{props.nombre}</p>
            <a href={'' + props.link}>Municipios</a>
        </div>
    </div>
  );
}
export default Provincias;