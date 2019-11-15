import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import getUrlDepByProv from '../../services/getUrlDepByProv';
import ListDepartamentos from '../Provincias/Departamentos/ListDepartamentos';

class ProvinciasData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provincia: props.provincia
    };
  }

  handleClick = () => {
    console.log(this.state.provincia);
    alert(getUrlDepByProv(this.state.provincia));
    fetch(getUrlDepByProv(this.state.provincia), { method: 'GET' })
      .then(response => {return response.json()})
      .then(resData => {
        this.setState({
          loading: false,
          departamentos: resData.departamentos,
          cantidad: resData.cantidad,
        });
      })

      alert(this.state.departamentos);
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   this.handleClick();
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  render() {
    return (
      <div>
        <div>
          <ProvinciasBody Registro={this.state.provincia} />
          <button
            onClick={this.handleClick} >
            Ver
          </button>
        </div>
        <div className="departamentos">
          <ListDepartamentos Provincia={34}/>
        </div>
      </div>
    )
  }
}

const ProvinciasBody = props => {
  return (
    <Grid>
      <Row>{props.Registro}</Row>
    </Grid>
  )
}

export default ProvinciasData;