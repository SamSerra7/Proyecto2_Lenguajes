import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';

export class Product extends Component {
    displayName = Product.name

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }


    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <img src="https://http2.mlstatic.com/pc-computadora-completa-monitor-19-dvd-1tb-4gb-oferta-p1-D_NQ_NP_922203-MLA29523845275_022019-Q.jpg"></img>

                    </Row>
                    <Row>
                        <h2>Computadora Hp</h2>
                    </Row>
                    <Row>
                        <p>
                            4 GB RAM
                            500 DD
                            14 pulgadas
                        </p>
                    </Row>
                    <Row>
                        <button variant="btn-primary">Agregar</button>
                    </Row>
                </Grid>
            </div>
        );
    }
}
