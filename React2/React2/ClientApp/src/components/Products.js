import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import { Product } from './Product';
import { Search } from './Search';

class Products extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Search/>
                    </Row>
                    <Row>
                        <Col sm={4}><Product title="Fijo 2019" /></Col>
                        <Col sm={4}><Product title="Fijo 2018" /></Col>
                        <Col sm={4}><Product title="Fijo 2017" /></Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Product title="Fijo 2016" /></Col>
                        <Col sm={4}><Product title="Fijo 2015" /></Col>
                        <Col sm={4}><Product title="Fijo 2014" /></Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Product title="Fijo 2013" /></Col>
                        <Col sm={4}><Product title="Fijo 2012" /></Col>
                        <Col sm={4}><Product title="Fijo 2011" /></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default connect(
    /*
    state => state.weatherForecasts,
    dispatch => bindActionCreators(actionCreators, dispatch)*/
)(Products);
