import React, { Component } from 'react';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['all', 'sport', 'music'],
      category: this.props.filter,
    }
  }

  handleSelect(event) {
    const category = event.target.value;
    this.setState({category: category});
    this.props.loadProducts(this.props.page, category);
  }

  render() {
    const categories = this.state.categories;
    return (
      <select onChange={::this.handleSelect} value={ this.state.category }>
        { categories.map( (category) => <option key={category} value={category}>{category}</option>) }
      </select>
    );
  }
}

export default CategoryFilter;
