import fecth from 'isomorphic-fetch';

const API = 'http://localhost:3001/api/v1'

export function getProducts(page, filter) {
  const url = API + '/products?page=' + page + '&filter=' + filter;
  return fetch(url)
    .then((r) => {
      return r.json();
    })
  ;
}
