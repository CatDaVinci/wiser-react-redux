import fecth from 'isomorphic-fetch';

const API = 'http://localhost:3001/api/v1'

export function getProducts(page) {
  return fetch(API + '/products?page=' + page)
    .then((r) => r.json())
  ;
}

export function deleteProduct(id) {
  return fetch(API + 'products/' + id)
  .then((r) => r.json())  
}
