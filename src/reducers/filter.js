export default function(state = 'all', action) {
  switch(action.type){
  case 'PRODUCTS_LOADING':
    return action.filter;
  case 'PRODUCT_UPDATED':
    return action.filter;
  default:
    return state;
  }
}
