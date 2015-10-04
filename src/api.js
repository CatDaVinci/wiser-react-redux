import fecth from 'isomorphic-fetch';

const API = 'http://localhost:3001/api/v1'

export function getProducts(page, filter) {
  return fetch(API + '/products?page=' + page)
    .then((r) => r.json())
  ;
}

export function destroyProduct(id) {
  const url = API + '/products/' + id;
  return fetch(url, { method: 'delete'})
    .then((r) => r.json())
  ;
}
