import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadProducts, updateProduct } from '../actions';
import { bindActionCreators } from 'redux';

import ProductsTable  from './productsTable';
import ProductsPagination from './productsPagination';
import ProductEditPage from './productEditPage';

@connect(
  (state) => { return {
    products: state.products, page: state.page, totalPages: state.totalPages, filter: state.filter };
  },
  (dispatch) => bindActionCreators({loadProducts, updateProduct}, dispatch)
)

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.props.loadProducts(this.props.page, this.props.filter);
  }

  render() {
    const products = this.props.products;
    const page = this.props.page;
    const loadProducts = this.props.loadProducts;
    const totalPages = this.props.totalPages;
    const filter = this.props.filter;

    return (
      <Grid>
        <Row>
          <Col md={8} xsOffset={2}><ProductsTable products={products} loadProducts={loadProducts} page={page}/></Col>
        </Row>
        <Row>
          <Col md={6} xsOffset={6}><ProductsPagination page={page} filter={filter} products={products} changePage={loadProducts} totalPages={totalPages} /></Col>
        </Row>
      </Grid>
    );
  }
}

ProductsPage.propTypes = {
  products: React.PropTypes.array,
  page: React.PropTypes.number,
  loadProducts: React.PropTypes.func,
  changePage: React.PropTypes.func,
  deleteProduct: React.PropTypes.func,
}

export default ProductsPage;
