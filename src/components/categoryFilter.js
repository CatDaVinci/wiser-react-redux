import React, { Component } from 'react';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['sport', 'music'],
    }
  }

  handleSelect(event) {
    this.props.loadProducts(this.props.page, 'sport');
  }

  render() {
    const categories = this.state.categories;
    return (
      <select value='all' onChange={::this.handleSelect}>
        <option value='all'>All</option>
        { categories.map( (category) => <option value={category}>{category}</option>) }
      </select>
    );
  }
}

export default CategoryFilter;
