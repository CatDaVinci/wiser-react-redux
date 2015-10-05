import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loadProducts, changePage } from '../actions';
import { bindActionCreators } from 'redux';

import ProductsTable  from './productsTable';
import ProductsPagination from './productsPagination';
import ProductEditPage from './productEditPage';

@connect(
  (state) => { return { products: state.products, page: state.page, totalProducts: state.totalProducts }; },
  (dispatch) => bindActionCreators({loadProducts, changePage}, dispatch)
)

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.props.loadProducts(this.props.page);
  }

  render() {
    const products = this.props.products;
    const page = this.props.page;
    const changePage = this.props.changePage;
    const deleteProduct = this.props.deleteProduct;
    const loadProducts = this.props.loadProducts;

    return (
      <Grid>
        <Row>
          <Col md={8} xsOffset={2}><ProductsTable products={products} loadProducts={loadProducts} page={page}/></Col>
        </Row>
        <Row>
          <Col md={6} xsOffset={6}><ProductsPagination page={page} products={products} changePage={changePage} /></Col>
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
