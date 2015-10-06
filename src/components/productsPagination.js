import { Pagination } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';

class ProductsPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.page,
    };
  }

  handlePagination(event, selectedEvent) {
    this.props.changePage(selectedEvent.eventKey, this.props.filter);
  }

  render() {
    const products = this.props.products;

    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        items={this.props.totalPages}
        maxButtons={5}
        activePage={this.props.page}
        onSelect={::this.handlePagination} />
    );
  }
};

ProductsPagination.propTypes = {
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default ProductsPagination;
