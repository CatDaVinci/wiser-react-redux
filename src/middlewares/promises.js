const middleware = store => next => action => {
  if(action.type !== 'PROMISE') {
    return next(action);
  }
  const [startAction, successAction, failureAction] = action.actions;
  store.dispatch({
    type: startAction,
    page: action.page,
  });
  action.promise.then((data) => store.dispatch({
    type: successAction,
    data,
  }), (error) => store.dispatch({
    type: successAction,
    error,
  }));
};

export default middleware;
