import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../actions';
import FormInput from './formInput';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

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
      category: this.props.product.category,
      id: props.params.id,
    }
  }

  handleSelect(event) {
    const category = event.target.value;
    this.setState({category: category});
  }

  submitForm() {
    const updatedProduct = {
      title: React.findDOMNode(this.refs.productTitle).value,
      sku: React.findDOMNode(this.refs.productSKU).value,
      category: React.findDOMNode(this.refs.productCategory).value,
    }
    console.log(updatedProduct);
  }

  render() {
    const categories = this.state.categories;
    const product = this.props.product;

    return (
      <div>
        <label>
          Title
          <input type='text' ref='productTitle' defaultValue={product.title} />
        </label>
        <br/><br/>
        <label>
          SKU
          <input type='text' ref='productSKU' defaultValue={product.sku} />
        </label>
        <br/><br/>
        <label>
          Category
          <select onChange={::this.handleSelect} ref='productCategory' defaultValue={this.state.category}>
            {categories.map( (category) => <option value={category}>{category}</option>)}
          </select>
        </label>
        <br/><br/>
          <button onClick={::this.submitForm}>Submit</button>
        <Link to='products'>
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default ProductEditPage;
