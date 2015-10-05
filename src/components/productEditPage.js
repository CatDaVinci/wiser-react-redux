import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../action'

@connect(
  (state) => { return { products: state.products }; },
  (dispatch) => bindActionCreators({editProduct}, dispatch)
)

class ProductEditPage extends Component {
  render() {
      return (
        <div>
            <label>Title</label>
            <input type='text'/>
        </div>
      );
  }
}

export default ProductEditPage;
