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

class Contact extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
  <MuiThemeProvider>
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