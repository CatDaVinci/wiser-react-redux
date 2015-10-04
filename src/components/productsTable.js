import React, { Component, PropTypes } from 'react';
import ProductTableRow  from './productTableRow';
import { Table } from 'react-bootstrap';

class ProductsTable extends Component {
  render() {
    const products = this.props.products;
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
             { products.map((product) => <ProductTableRow {...product}></ProductTableRow>) }
          </tbody>
      </Table>
    );
  }
}

ProductTableRow.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTable;
