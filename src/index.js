import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import allReducers from './Reducers';
import './styles/index.css';

const store = createStore(allReducers);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
