import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../actions';
import FormInput from './formInput';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Grid, Row, Col, Input, Label, Button } from 'react-bootstrap';

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
      categories: ['sport', 'music'],
      category: this.props.product.category,
      id: props.params.id,
    }
  }

  handleSelect(event) {
    const category = event.target.value;
    this.state.category = category;
  }

  submitForm() {
    const updatedProduct = {
      id: this.props.params.id,
      title: this.refs.productTitle.getValue(),
      sku: this.refs.productSKU.getValue(),
      category: this.refs.productCategory.getValue(),
    }
    editProduct(updatedProduct);
  }

  render() {
    const categories = this.state.categories;
    const product = this.props.product;
    const cancelStyle = {
      margin: '10px',
    }

    return (
      <Grid>
        <Row><Col md={6} xsOffset={3}><h1>Edit Product</h1></Col></Row>
        <Row><Col md={6} xsOffset={3}>
          <h3><Label bsSize='small' bsStyle='warning'>
            Title
          </Label></h3>
          <Input type='text' ref='productTitle' defaultValue={product.title} />
          <h3><Label bsStyle='warning'>
            SKU
          </Label></h3>
          <Input type='text' ref='productSKU' defaultValue={product.sku} />
          <h3><Label bsStyle='warning'>
            Category
          </Label></h3>
          <Input type="select" onChange={::this.handleSelect} ref='productCategory' defaultValue={this.state.category}>
            {categories.map( (category) => <option key={category} value={category}>{category}</option>)}
          </Input>
          <Link to='products'>
            <Button bsStyle='success' onClick={::this.submitForm}>Submit</Button>
          </Link>
          <Link to='products'>
            <Button  style={cancelStyle}>Cancel</Button>
          </Link>
        </Col>
        </Row>
      </Grid>
    );
  }
}

export default ProductEditPage;
