import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Directions from './components/Directions.jsx'
import FrontPageModal from './components/FrontPageModal.jsx'
import TestModal from './components/TestModal.jsx'
import GalleryImages from './components/GalleryImages.jsx'
import HomePage from './components/HomePage.jsx'
import Reviews from './components/Reviews.jsx'
import AboutMe from './components/AboutMe.jsx'
import Services from './components/Services.jsx'

import StreetViewPanormaWithAnOverlayView from './components/Test.jsx'
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={FrontPageModal} />
      <Route exact path="/AboutMe" component={AboutMe} />
      <Route  path="/Home" component={HomePage} />
      <Route  path="/Reviews" component={Reviews} />
      <Route  path="/Services" component={Services} />
      <Route  path="/Directions" component={Directions} />
      <Route  path="/Gallery" component={GalleryImages} />
    </Switch>
  </Router>,
  document.getElementById('app'),
);
