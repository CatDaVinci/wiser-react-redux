import { getProducts, destroyProduct } from './api'

export function loadProducts(page, filter='') {
  return {
    type: 'PROMISE',
    actions: ['PRODUCTS_LOADING', 'PRODUCTS_LOADED', 'PRODUCTS_LOAD_FAILURE'],
    promise: getProducts(page, filter),
  };
}

export function changePage(page) {
  return {
    type: 'PROMISE',
    page: page,
    actions: ['CHANGE_PAGE', 'PRODUCTS_LOADED', 'PRODUCTS_LOAD_FAILURE'],
    promise: getProducts(page),
  };
}

export function deleteProduct(id) {
  return {
    type: 'PROMISE',
    actions: ['PRODUCT_DELETING', 'PRODUCT_DELETED', 'PRODUCT_DELETE_FAILURE'],
    promise: destroyProduct(id),
  };
}
