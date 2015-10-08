import { getProducts, destroyProduct, updateProduct } from './api'

export function loadProducts(page, filter) {
  return {
    type: 'PROMISE',
    filter: filter,
    page: page,
    actions: ['PRODUCTS_LOADING', 'PRODUCTS_LOADED', 'PRODUCTS_LOAD_FAILURE'],
    promise: getProducts(page, filter),
  };
}

export function editProduct(product) {
  return {
    type: 'PROMISE',
    actions: ['PRODUCT_UPDATING', 'PRODUCT_UPDATED', 'PRODUCT_UPDATE_FAILURE'],
    promise: updateProduct(product),
    filter: product.category,
  }
}
