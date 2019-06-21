import React, { Component } from 'react';
import { Col, Grid, Row, Glyphicon } from 'react-bootstrap';


export class BtnCarrito extends Component {
    displayName = BtnCarrito.name

    constructor(props) {
        super(props);
        this.state = { Search: [], loading: true };
    }


    render() {

        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={1}>
                            <Glyphicon glyph="shopping-cart"></Glyphicon>
                        </Col>
                        <Col sm={1}>
                            <Glyphicon glyph="user"></Glyphicon>
                        </Col>
                    </Row>

                </Grid>
            </div>

        );
    }
}
