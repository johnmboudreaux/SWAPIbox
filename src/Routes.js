import React from 'react';
import { Router, Route } from 'react-router';
import App from './App/App';
import CardContainer from './CardContainer/CardContainer';

const Routes = (props) => {
  return (
    <Router {...props}>
      <div>
        <Route path="/" component={App} />
        <Route path="/people" component={CardContainer} />
      </div>
    </Router>
  );
};

export default Routes;
