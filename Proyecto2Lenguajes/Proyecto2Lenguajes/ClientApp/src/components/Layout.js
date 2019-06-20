import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { NavHeader } from './NavHeader';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
           <NavHeader /> 
        </Row>

        <Row>
            {this.props.children}
        </Row>
      </Grid>
    );
  }
}
