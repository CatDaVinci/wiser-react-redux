import {getProducts} from './api'

export function loadProducts(page) {
  return {
    type: 'PROMISE',
    actions: ['PRODUCTS_LOADING', 'PRODUCTS_LOADED', 'PRODUCTS_LOAD_FAILURE'],
    promise: getProducts(page),
  };
}

export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    page: page,
  }
}

export function deleteProduct(id) {
  return {
    type: 'PROMISE',
    actions: ['PRODUCT_DELETING', 'PRODUCT_DELETED', 'PRODUCT_DELETE_FAILURE'],
    promise: deleteProduct(id)
  }
}
