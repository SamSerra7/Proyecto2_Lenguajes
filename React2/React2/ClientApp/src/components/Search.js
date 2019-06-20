import React, { Component } from 'react';
import { Col, Grid, Row, Glyphicon } from 'react-bootstrap';


export class Search extends Component {
    displayName = Search.name

    constructor(props) {
        super(props);
        this.state = { Search: [], loading: true };

        /*
        fetch('api/SampleData/WeatherForecasts')
        .then(response => response.json())
        .then(data => {
        this.setState({ products: [], loading: true });
        });
        */
    }


    render() {

        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={4}>
                            <input type="text" class="form-control" placeholder="Buscar"></input>
                        </Col>
                        <Col sm={4}>
                            <Glyphicon><i class="glyphicon glyphicon-search"></i></Glyphicon>
                        </Col>
                    </Row>

                </Grid>
            </div>

        );
    }
}
