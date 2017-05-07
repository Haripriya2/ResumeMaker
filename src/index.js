import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/App';
import Users from './components/Users';
import About from './components/About';
import Create from './components/Create';
import allReducers from './Reducers';
import './styles/index.css';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
  <Route path="/" component={App}>
  <Route path="/sample" component={About}/>
  <Route path="/users" component={Users} />
  <Route path="/create" component={Create} />
  <Route/>
  </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
