import React from 'react';
import App from './App';
import store from './state';
import {Provider} from 'react-redux';
import Product from './components/product';

React.render(<div>
    <Provider store={store}>
      { () => <App />}
    </Provider>
  </div>, document.getElementById('root'));
