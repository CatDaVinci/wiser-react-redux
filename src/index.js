import React from 'react';
import App from './App';
import store from './state';
import { getProducts } from './api';

React.render(<App />, document.getElementById('root'));

store.subscribe( () => console.log('NEW STATE', store.getState()));

console.log(1);
store.dispatch({
  type: 'Unlnown',
});


console.log(2);
store.dispatch({
  type: 'CHANGE_TITLE',
});

console.log(3);
store.dispatch({
  type: 'UNKNOWN',
});

store.dispatch({
  type: 'PROMISE',
  actions: ['PRODUCTS_LOADING', 'PRODUCTS_LOADED', 'PRODUCTS_LOAD_FAILURE'],
  promise: getProducts(),
});
