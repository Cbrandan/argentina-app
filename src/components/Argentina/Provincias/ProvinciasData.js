import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-flexbox-grid';
import ListDepartamentos from '../Provincias/Departamentos/ListDepartamentos';
import { MDBBtn } from "mdbreact";

class ProvinciasData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingDat: false,
      loadigDepto: false,
      provincia: props.provincia
    };
    this.handleClick = this.handleClick.bind(this);
  }

   handleClick = (prevState) => {
    this.setState({
      loadingDepto: !prevState.loadingDepto,
      provincia: this.key
    });
  }

  //   componentDidMount() {
  //    console.log('componentDidMount');
  //    this.handleClick();
  //  }
  //  componentDidUpdate() {
  //    console.log('componentDidUpdate');
  //  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs>
              <ProvinciasBody Registro={this.state.provincia} />
            </Col>
            <Col xs>
              <MDBBtn color="primary"
                onClick={this.handleClick} >
                {this.state.loadigDepto ? 'Ocultar departamentos' : 'Ver departamentos'}
              </MDBBtn>
            </Col>
          </Row>
        </Grid>
        <div>
        {this.state.loadingDepto ? 
            <h1>Cargando departamentos...</h1> :
            <ListDepartamentos provincia={this.state.provincia} />}
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