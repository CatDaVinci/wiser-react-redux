import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { loadProducts } from './actions';
import { bindActionCreators } from 'redux';
import ProductTableRow  from './components/productTableRow';

class App extends Component {
  handleClick() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <Button onClick={::this.handleClick}>LoadProducts</Button>
        <table>
          <tbody>
            { this.props.products.map((product) => <ProductTableRow {...product}></ProductTableRow> )}
          </tbody>
        </table>
    </div>
    );
  }

  propTypes: {
    products: React.PropTypes.array,
  }
}

export default connect(
  (state) => { return { products: state.products }; },
  (dispatch) => bindActionCreators({loadProducts}, dispatch)
)(App)
