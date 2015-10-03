import {getProducts} from './api'

export function loadProducts() {
  return {
    type: 'PROMISE',
    actions: ['PRODUCTS_LOADING', 'PRODUCTS_LOADED', 'PRODUCTS_LOAD_FAILURE'],
    promise: getProducts(),
  };
}
