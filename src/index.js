import React from 'react';
import App from './App';
import ProductsPage from './components/productsPage'
import store from './state';
import {Provider} from 'react-redux';
import Router, {Route, DefaultRoute, Redirect} from 'react-router';
import ProductEditPage from './components/productEditPage';


const routes = (
  <Route>
    <Route handler={App}>
      <Route path='/' handler={ProductsPage} />
    </Route>
    <Route name='products'>
      <DefaultRoute handler={ProductsPage} />
      <Route name='editProduct' path=":id/edit" handler={ProductEditPage} />
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
  React.render(<div>
      <Provider store={store}>
        { () => <Handler routerState={routerState} />}
      </Provider>
    </div>, document.getElementById('root'));
});
