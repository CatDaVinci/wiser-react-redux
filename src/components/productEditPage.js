import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../actions';
import FormInput from './formInput';
import { bindActionCreators } from 'redux';

@connect(
  (state) => { return { products: state.products }; },
  (dispatch) => bindActionCreators({editProduct}, dispatch)
)

class ProductEditPage extends Component {
  render() {
    return (
      <h1>OLOLO</h1>
    );
  }
}

export default ProductEditPage;
