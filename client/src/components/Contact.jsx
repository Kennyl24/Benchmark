import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import ContactIntro from './ContactIntro.jsx';
import GetInTouch from './GetInTouch.jsx';
import MapContainer from './MapContainer.jsx';
import {Helmet} from "react-helmet";

class Contact extends React.Component { 
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
            <title>Contact The Hilda Hensley Team </title>
            {/* <meta name="keywords" content="" />
            <meta name="description" content={this.state.blog.blogSnippet} />
            <meta name="og:description" content={this.state.blog.blogSnippet} />
            <meta property="og:title" content={this.state.blog.blogTitle} />
            <meta property="og:image" content={this.state.blog.blogImage} />
            <meta property="og:url" content={window.location.href}/> */}
      </Helmet>
    <LeadingBar/>
    <ContactIntro/>
    <GetInTouch/>
    <MapContainer/>
    <BottomNav/>
   </MuiThemeProvider>
)
}
};

export default Contact;