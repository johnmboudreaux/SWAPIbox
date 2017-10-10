import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router';
import App from './App/App';


const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
