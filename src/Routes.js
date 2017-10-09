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
        <Route path="/planets" component={CardContainer} />
        <Route path="/vehicle" component={CardContainer} />
        <Route path="/favorites" component={CardContainer} />
      </div>
    </Router>
  );
};

export default Routes;
