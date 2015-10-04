import React from 'react';
import Router, {Route, DefaultRoute, Redirect} from 'react-router';
import App from './App';
import store from './state';
import {Provider} from 'react-redux';
import Product from './components/product';

const routes = (
  <Route handler={App} path="/">
    <Route name="products" >
      <Route name="editProduct" path="edit/:id" handler={Product} />
    </Route>
  </Route>
);

// Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
  React.render(<div>
      <Provider store={store}>
        { () => <App />}
      </Provider>
    </div>, document.getElementById('root'));
// });
