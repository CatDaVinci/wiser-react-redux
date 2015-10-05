import React, { Component, PropTypes } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class ProductTableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, sku, category } = this.props;
    const editlink = '/products/' + id + '/edit';

    return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{sku}</td>
      <td>{category}</td>
      <td><Button bsStyle="warning"><Glyphicon glyph="edit" /></Button></td>
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
