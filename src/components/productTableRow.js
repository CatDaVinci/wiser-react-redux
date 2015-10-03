import React, { Component, PropTypes } from 'react';

class ProductTableRow extends Component {
  render() {
    const { title, sku, category } = this.props;
    return (
      <tr>
        <td>{title}</td>
        <td>{sku}</td>
        <td>{category}</td>
      </tr>
    );
  }
}

ProductTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  sku: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductTableRow;
