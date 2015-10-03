import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loadProducts } from './actions';
import { bindActionCreators } from 'redux';
import ProductsTable  from './components/productsTable';
import ProductsPagination from './components/productsPagination';
import CategoryFilter from './components/categoryFilter';
import { Grid, Row, Col } from 'react-bootstrap';


class App extends Component {
  componentWillMount() {
    this.props.loadProducts();
  }

  render() {
    const products = this.props.products;

    return (
      <Grid>
        <Row>
          <Col md={6} xsOffset={6}><h1>FOR FILTER</h1></Col>
        </Row>
        <Row>
          <Col md={8} xsOffset={2}><ProductsTable products = {products}/></Col>
        </Row>
        <Row>
          <Col md={6} xsOffset={6}><ProductsPagination /></Col>
        </Row>
      </Grid>
    );
  }

  propTypes: {
    products: React.PropTypes.array,
  }
}

export default connect(
  (state) => { return { products: state.products }; },
  (dispatch) => bindActionCreators({loadProducts}, dispatch)
)(App)
