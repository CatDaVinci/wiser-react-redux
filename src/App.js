import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import ProductsPage from './components/productsPage';
import ProductEditPage from './components/productEditPage';

export default class App extends Component {
  render() {
    return (
      <RouteHandler />
    );
  }
}
