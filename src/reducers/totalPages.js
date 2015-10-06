export default function (state = 0, action) {
  switch (action.type) {
  case 'PRODUCTS_LOADED':
    return action.data.total_pages;
  default:
    return state;
  }
}
