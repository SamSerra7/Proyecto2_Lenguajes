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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJVc6wVmlXRrgOh-DqYK26-Nx-UK9bv403NCmdjPUXo9AM6bL"></img>

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
