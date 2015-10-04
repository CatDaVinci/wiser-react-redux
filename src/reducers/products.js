export default function (state = [], action) {
  switch (action.type) {
  case 'PRODUCTS_LOADED':
    return action.data;
  case 'PRODUCT_DELETED':
    return state; //пришол обьект который удалили надо удалить его из состояния
  default:
    return state;
  }
}
