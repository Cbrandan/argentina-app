import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-flexbox-grid';
import ListDepartamentos from '../Provincias/Departamentos/ListDepartamentos';
import { MDBBtn } from "mdbreact";

class ProvinciasData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadDepto: false
    };
  }

   handleClick = () => {
    this.setState({
      loadDepto: !this.state.loadDepto
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs>
              <ProvinciasBody Registro={this.props.provincia} />
            </Col>
            <Col xs>
              <MDBBtn color="primary"
                onClick={this.handleClick.bind(this)} >
                {this.state.loadDepto ? 'Ocultar departamentos' : 'Ver departamentos'}
              </MDBBtn>
            </Col>
          </Row>
        </Grid>
        <div>
        {this.state.loadDepto ? 
            <ListDepartamentos provincia={this.props.provincia} /> :
            <h1></h1>}
        </div>
      </div>
    )
  }
}

const ProvinciasBody = props => {
  return (
    <div>
      <h2>{props.Registro}</h2>
    </div>
  )
}

export default ProvinciasData;