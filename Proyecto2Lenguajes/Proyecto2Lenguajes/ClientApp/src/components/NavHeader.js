import React, { Component } from 'react';
import { Col, Row, Glyphicon } from 'react-bootstrap';
import './NavMenu.css';

export class NavHeader extends Component {
    displayName = NavHeader.name

    render() {
        return (
            <Row>
                <Col sm={8}>
                    Proyecto 2 Lenguajes
                </Col>
                <Col sm={2}>

                    <Glyphicon glyph='shopping-cart'> Carrito
                    </Glyphicon>
                </Col>
                <Col sm={2}>
                    <Glyphicon glyph='user' /> Log In
                </Col>
            </Row>
        );
  }
}
