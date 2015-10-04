import React, { Component, PropTypes } from 'react';
import ProductTableRow  from './productTableRow';
import { Table } from 'react-bootstrap';

class ProductsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;
    const deleteProduct = this.props.deleteProduct;

    return (
      <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th># id</th>
              <th>Title</th>
              <th>SKU</th>
              <th>Category</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
             { products.map((product) => <ProductTableRow {...product} deleteProduct={deleteProduct}></ProductTableRow>) }
          </tbody>
      </Table>
    );
  }
}

ProductTableRow.propTypes = {
  products: PropTypes.array,
};

export default ProductsTable;
