import React, { Component } from 'react';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['sport', 'music'],
    }
  }

  render() {
    const categories = this.state.categories;
    console.log(categories);
    return (
      <select>
        <option>All</option>
        { categories.map( (category) => <option value={category}>{category}</option>)}
      </select>
    );
  }
}

export default CategoryFilter;
