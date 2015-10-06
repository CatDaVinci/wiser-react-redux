import fecth from 'isomorphic-fetch';

const API = 'http://localhost:3001/api/v1'

export function getProducts(page, filter) {
  const url = API + '/products?page=' + page + '&filter=' + filter;
  return fetch(url)
    .then((r) => r.json())
  ;
}

export function updateProduct(product){
  const url = API + '/products/' + product.id;
  return fetch(url, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({product}),
    }).
    then((r) => r.json())
  ;
}
