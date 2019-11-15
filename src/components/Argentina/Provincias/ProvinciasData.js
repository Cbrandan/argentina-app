import ListDepartamentos from './Departamentos/ListDepartamentos'
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Toolbar from '@material-ui/core/Toolbar';

class ProvinciasData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: props.prov,
      quantity: props.cant
    };
  }

  render() {
    return (
      <table>
        <ProvinciasHeader />
        <ProvinciasBody Registros={this.state.provinces} />
        <ProvinciasTotal Total={this.state.quantity} />
      </table>
    )
  }
}

const ProvinciasTotal = q => {
  return (
    <h2 className="titulo" >{q.Total}</h2>
  )
}

const ProvinciasHeader = () => {
  return (
    <Grid>
      <Row>
        <Col xs={6} md={3}>Id</Col>
        <Col xs={6} md={3}>Nombre</Col>
      </Row>
    </Grid>
  )
}

const ProvinciasBody = props => {
  const rows = props.Registros.map((row, index) => {
    return (
      <Grid>
        <Toolbar></Toolbar>
        <Row key={index}>
          <Col xs={6} md={3}>{row.id}</Col>
          <Col xs={6} md={3}>{row.nombre}</Col>
          <Col xs={6} md={3}>
            <input type="button" value="Ver" onClick={<ListDepartamentos Provincia = {34}/>} />
          </Col>
        </Row>
      </Grid>
    )
  })

  return <tbody>{rows}</tbody>
}

export default ProvinciasData;