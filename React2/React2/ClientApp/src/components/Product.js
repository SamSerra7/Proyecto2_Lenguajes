import React, { Component } from 'react';
import { Col, Grid, Row, Gryphicon } from 'react-bootstrap';


export class Product extends Component {
    displayName = Product.name

    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={4}>
                            <img src="https://pictures.dealer.com/t/twowheelmotorsportguelphtc/0354/1447ce5c0fe8b9e07bb124be064018d2x.jpg?impolicy=resize&w=240"></img>

                        </Col>
                    </Row>
                    <Row>
                        <h1>{this.props.title}</h1>
                    </Row>
                    <Row>
                        <p>Nueva version mas estetica potencia, deportividad</p>
                    </Row>
                    <Row>
                        <buttom type="button" class="btn btn-primary">Seleccionar</buttom>
                    </Row>
                </Grid>
            </div>
        );
    }
}
