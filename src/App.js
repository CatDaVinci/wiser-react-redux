import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loadProducts, changePage } from './actions';
import { bindActionCreators } from 'redux';
import ProductsTable  from './components/productsTable';
import ProductsPagination from './components/productsPagination';
import CategoryFilter from './components/categoryFilter';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.loadProducts(this.props.page);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.page !== this.props.page) {
      this.props.loadProducts(this.props.page);
    }
  }

  render() {
    const products = this.props.products;
    const page = this.props.page;
    const pageChange = this.props.changePage;

    return (
      <Grid>
        <Row>
          <Col md={6} xsOffset={6}><CategoryFilter /><br/><br/></Col>
        </Row>
        <Row>
          <Col md={8} xsOffset={2}><ProductsTable products={products}/></Col>
        </Row>
        <Row>
          <Col md={6} xsOffset={6}><ProductsPagination page={page} changePage={changePage} /></Col>
        </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  products: React.PropTypes.array,
  page: React.PropTypes.number,
  loadProducts: React.PropTypes.func,
  changePage: React.PropTypes.func,
}

export default connect(
  (state) => { return { products: state.products, page: state.page }; },
  (dispatch) => bindActionCreators({loadProducts, changePage}, dispatch)
)(App)
