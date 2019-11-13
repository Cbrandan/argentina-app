import React from 'react';



function ProvinciasData(props) {
  return (
    <div class="card col-4" id="cardstyle">
        <div class="card-body">
            <h5 class="card-title">{props.id}</h5>
            <p class="card-text">{props.nombre}</p>
            <a href={'' + props.link}>Municipios</a>
        </div>
    </div>
  );
}
export default ProvinciasData;