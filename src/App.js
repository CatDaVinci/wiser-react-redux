import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import ProductsPage from './containers/productsPage';
import ProductEditPage from './containers/productEditPage';

export default class App extends Component {
  render() {
    return (
      <RouteHandler />
    );
  }
}
