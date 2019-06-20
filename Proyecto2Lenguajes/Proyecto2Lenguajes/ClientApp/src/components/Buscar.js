import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

export class Buscar extends Component {
    displayName = Buscar.name

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={4}>
                            <input type="text"></input>
                        </Col>
                        <Col sm={2}>
                            <Glyphicon glyph='search'></Glyphicon>
                        </Col>
                        <Col sm={4}>
                            <button className="btn-info"></button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
