import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Directions from './components/Directions.jsx'
import FrontPageModal from './components/FrontPageModal.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import HomePage from './components/HomePage.jsx'
import Reviews from './components/Reviews.jsx'
import BlogPage from './components/BlogPage.jsx'
import VlogPage from './components/VlogPage.jsx'

import StreetViewPanormaWithAnOverlayView from './components/Test.jsx'
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/About" component={About} />
      <Route  path="/Home" component={HomePage} />
      <Route  path="/Vlog" component={VlogPage} />
      <Route  path="/Blog" component={BlogPage} />
      <Route  path="/Reviews" component={Reviews} />
      <Route  path="/Contact" component={Contact} />
    </Switch>
  </Router>,
  document.getElementById('app'),
);
