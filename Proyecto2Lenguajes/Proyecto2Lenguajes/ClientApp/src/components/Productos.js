import React, { Component } from 'react';
import { Col, Grid, Row} from 'react-bootstrap';
import { Product } from './Product'
import { Buscar } from './Buscar'

export class Productos extends Component {
  displayName = Productos.name

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
  }


  render() {
      return (
          <div>
              <Grid>
                  <Row>
                      <Buscar/>
                  </Row>
              </Grid>
              <Grid>
                  <Row>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                  </Row>
                  <Row>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                  </Row>
                  <Row>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                      <Col sm={4}><Product title="Computadora HP"/></Col>
                  </Row>
              </Grid>
          </div>
    );
  }
}
