import React, { Component } from 'react';
import { Col, Grid, Row, Glyphicon } from 'react-bootstrap';
import { BtnCarrito } from './BtnCarrito';

export class Search extends Component {
    displayName = Search.name

    constructor(props) {
        super(props);
        this.state = { Search: [], loading: true };

    }


    render() {

        return (

                
            <Row>
                
                <Col sm={5}>
                    <input type="text" class="form-control" placeholder="Buscar"></input>
                </Col>  
                <Col sm={3}>
                    <Glyphicon glyph="search"></Glyphicon>
                </Col>
                <Col sm={2}><BtnCarrito /></Col>

            </Row>

        );
    }
}
