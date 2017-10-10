import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import createHistory from 'history/createBrowserHistory';
import './index.css';



const history = createHistory();

ReactDOM.render(
  <Routes history={history} />,
  document.getElementById('root')
);
