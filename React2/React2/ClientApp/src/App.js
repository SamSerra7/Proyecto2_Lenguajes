import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData'; 
import Products from './components/Products'; 
import { Product } from './components/Product';

export default () => (
  <Layout>
        <Route exact path='/' component={Products} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
  </Layout>
);
