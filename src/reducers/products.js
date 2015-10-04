export default function (state = [], action) {
  switch (action.type) {
  case 'PRODUCTS_LOADED':
    return action.data;
  case 'PRODUCT_DELETED':
    let newState = {...state};
    const elementPos = newState.map(function(x) {return x.id; }).indexOf(action.data.id);
    newState.splice(elementPos, 1);
    return newState;
  default:
    return state;
  }
}
