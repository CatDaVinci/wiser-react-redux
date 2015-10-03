export default function (state = {}, action) {
  switch (action.type) {
  case 'CHANGE_TITLE':
    return {...state, ...{title: 'TEST'}};
  default:
    return state;
  }
}
