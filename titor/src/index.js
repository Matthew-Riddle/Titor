import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './app/Store'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

