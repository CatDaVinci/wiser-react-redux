import { Pagination } from 'react-bootstrap';
import React, { Component, PropTypes } from 'react';

class ProductsPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.page,
    };
  }

  handleSelect(event, selectedEvent) {
    this.props.changePage(selectedEvent.eventKey);
  }

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        items={20}
        maxButtons={5}
        activePage={this.props.page}
        onSelect={::this.handleSelect} />
    );
  }
};

ProductsPagination.propTypes = {
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default ProductsPagination;
