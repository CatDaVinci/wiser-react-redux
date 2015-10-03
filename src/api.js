import fecth from 'isomorphic-fetch';

export function getProducts() {
  return fetch('http://localhost:3001/api/v1/products')
    .then((r) => r.json())
  ;
}
