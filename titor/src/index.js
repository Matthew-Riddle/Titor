import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/Store'

import App from './app/App';
import './index.css'
import Login from './routes/Login'
import UserProfile from './routes/UserProfile'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

