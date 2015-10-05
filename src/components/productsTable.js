import React, { Component, PropTypes } from 'react';
import ProductTableRow  from './productTableRow';
import CategoryFilter from './categoryFilter';
import { Table } from 'react-bootstrap';

class ProductsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products;
    const page = this.props.page;
    const loadProducts = this.props.loadProducts;

    return (
      <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th># id</th>
              <th>Title</th>
              <th>SKU</th>
              <th>Category</th>
              <th><CategoryFilter loadProducts={loadProducts} page={page}/></th>
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
  products: PropTypes.array,
};

export default ProductsTable;
