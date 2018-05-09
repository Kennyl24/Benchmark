import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LeadingBar from './components/LeadingBar.jsx'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={LeadingBar} />
    </Switch>
  </Router>,
  document.getElementById('app'),
);
