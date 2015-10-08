export default function (state = [], action) {
  switch (action.type) {
  case 'PRODUCTS_LOADED':
    return action.data.products;
  case 'PRODUCT_UPDATED':
    let newState = state;
    const elementPos = newState.indexOf(newState.filter((x) => {return x.id === action.data.id })[0]);
    newState.splice(elementPos, 1, action.data);
    return newState;
  default:
    return state;
  }
}
