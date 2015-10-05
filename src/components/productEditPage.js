import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../actions';
import FormInput from './formInput';
import { bindActionCreators } from 'redux';

@connect(
  (state, props) => {
    const product = state.products.filter((x) => { return x.id === +props.params.id });
    return { product: product[0] };
  },
  (dispatch) => bindActionCreators({editProduct}, dispatch)
)

class ProductEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['all', 'sport', 'music'],
      category: 'all',
      id: props.params.id,
    }
  }

  handleSelect(event) {
    const category = event.target.value;
    this.setState({category: category});
  }

  render() {
    const categories = this.state.categories;

    return (
      <form>
        <label>
          Title
          <input type='text'></input>
        </label>
        <label>
          SKU
          <input type='text'></input>
        </label>
        <label>
          Category
          <select onChange={::this.handleSelect} value={this.state.category}>
            {categories.map( (category) => <option value={category}>{category}</option>)}
          </select>
        </label>
      </form>
    );
  }
}

export default ProductEditPage;
