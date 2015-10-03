import React, { Component } from 'react';
import { Select } from 'react-bootstrap';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['sport', 'music'],
    }
  }

  render() {
    const categories = this.state.categories;
    return (
      <Select>Categories
        { categories.map( (category) => <option value={category}>{category}</option>)}
      </Select>
    );
  }
}

export default CategoryFilter;
