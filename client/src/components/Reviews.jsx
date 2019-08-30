import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import ReviewsMap from './ReviewsMap.jsx';
import ReviewsIntro from './ReviewsIntro.jsx';
import BottomNav from './BottomNav.jsx';
import {Helmet} from "react-helmet";

class Reviews extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render () {
    return (
    <MuiThemeProvider>
      <Helmet>
            <title>Reviews of the Hilda Hensley Team</title>
            <meta property="og:url" content={window.location.href}/>
      </Helmet>
        <LeadingBar/>
        <ReviewsIntro/>
        <ReviewsMap/>
        <BottomNav/>
   </MuiThemeProvider>
)
}
};

export default Reviews;