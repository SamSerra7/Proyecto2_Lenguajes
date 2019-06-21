import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import { Product } from './Product';
import { Search } from './Search';

class Products extends Component {
    displayName = Products.name

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Search/>
                    </Row>
                    {this.state.products.map(Product =>

                        <Row>
                            <Col sm={4}>
                                <Product title={Product.title} />
                            </Col>
                            <Col sm={4}>
                                <Product title={Product.title} />
                            </Col>
                            <Col sm={4}>
                                <Product title={Product.title} />
                            </Col>
                        </Row>

                    )}



                </Grid>
            </div>
        );
    }
}

constructor(props) {
    super(props);
    this.state = { products: [], loading: true };

    fetch('api/SampleData/Products')
        .then(response => response.json())
        .then(data => {
            this.setState({ products: data, loading: false });
        });

}

export default connect(
   
)(Products);
