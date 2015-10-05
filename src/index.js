import React from 'react';
import App from './App';
import store from './state';
import {Provider} from 'react-redux';
import Router, {Route, DefaultRoute, Redirect} from 'react-router';
import Product from './components/product';


const routes = (
  <Route path="/" component={App}>
      <Route path="products/:id/edit" handler={Product} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
  React.render(<div>
      <Provider store={store}>
        { () => <Handler routerState={routerState} />}
      </Provider>
    </div>, document.getElementById('root'));
});
