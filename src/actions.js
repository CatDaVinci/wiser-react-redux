import { getProducts, destroyProduct, updateProduct } from './api'

export function loadProducts(page, filter) {
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

export function editProduct(product) {
  return {
    type: 'PROMISE',
    actions: ['PRODUCT_UPDATING', 'PRODUCT_UPDATED', 'PRODUCT_UPDATE_FAILURE'],
    promise: updateProduct(product),
  }
}
