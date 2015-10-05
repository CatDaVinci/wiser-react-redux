export default function (state = 0, action) {
  switch (action.type) {
  case 'PRODUCTS_LOADED':
    console.log('TOTALPAGES', action.data);
    return state;
  default:
    return state;
  }
}
