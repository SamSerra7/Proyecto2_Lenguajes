import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

      this.buscar();
    }


    handleChange(e) {
        var text = e.target.value;
        console.log(text);
        this.buscar(text);
    }


    buscar(textToSearch) {

        textToSearch = textToSearch === undefined ? "" : textToSearch;

        fetch('api/SampleData/WeatherForecasts?textToSearch=' + textToSearch)
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            });

    };


  static renderForecastsTable(forecasts) {
      return (
         
              <table className='table'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                  </tr>
                </thead>
                <tbody>
                  {forecasts.map(forecast =>
                    <tr key={forecast.dateFormatted}>
                      <td>{forecast.dateFormatted}</td>
                      <td>{forecast.temperatureC}</td>
                      <td>{forecast.temperatureF}</td>
                      <td>{forecast.summary}</td>
                    </tr>
                  )}
                </tbody>
              </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

      return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>

              <Row>
                  <input type="text" onChange={this.handleChange} ></input>
        </Row>
        <Row>
            {contents}
        </Row>

      </div>
    );
  }
}
