import React from 'react';
import App from './App';
import store from './state';
import {Provider} from 'react-redux';

React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>, document.getElementById('root'));
