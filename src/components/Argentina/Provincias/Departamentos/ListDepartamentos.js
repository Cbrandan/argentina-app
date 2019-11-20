import React, { Component } from 'react';
import getUrlDepByProv from '../../../services/getUrlDepByProv';
import Title from '../../../title';
import Mapa from '../Mapa';
import { Grid, Col } from 'react-flexbox-grid';

class ListDepartamentos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      departamentos: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true })

    fetch(getUrlDepByProv(this.props.provincia), { method: 'GET' })
      .then(response => { return response.json() })
      .then(resData => {
        this.setState({
          loading: false,
          departamentos: resData.departamentos,
          centroide: resData.departamentos.centroide
        });
      })

  }

  render() {
    if (this.state.loading) {
      return (
        <div className="titulo">Cargando...</div>
      );
    }

    return (
      <div>
        <Title className="titulo" nombre="Listado de Departamentos por provincia" />
          <Grid className="detail">
            <Col xs>
              {deptosToComponents(this.state.departamentos)}
            </Col>
            <Col xs>
              {/* <Mapa Pcia={this.props.provincia}/> */}
            </Col>
          </Grid>
      </div>
        )
      }
    }
    
    const deptosToComponents = departamentos => (
  departamentos.map(row => <DeptosData key={row.id} depto={row.nombre} />)
      );
      
const DeptosData = props => {
  return (
    <div>
          <h2>{props.depto}</h2>
        </div>
        )
      }
      
export default ListDepartamentos;