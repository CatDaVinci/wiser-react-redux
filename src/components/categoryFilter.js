import React, { Component } from 'react';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['all', 'sport', 'music'],
      category: 'all',
    }
  }

  handleSelect(event) {
    const category = event.target.value;
    this.setState({category: category})
  }

  render() {
    const categories = this.state.categories;
    return (
      <select onChange={::this.handleSelect} value={ this.state.category }>
        <option value='all'>all</option>
        { categories.map( (category) => <option value={category}>{category}</option>) }
      </select>
    );
  }
}

export default CategoryFilter;
