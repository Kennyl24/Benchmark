import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import LeadingBar from './LeadingBar.jsx';
import Map from './MapContainer.jsx';
import MapTabs from './MapTabs.jsx';
import DirectionsModal from './DirectionsModal.jsx';
import StreetViewPanormaWithAnOverlayView from './Test.jsx'

class Directions extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
        <LeadingBar/>
        <Map/>
   </MuiThemeProvider>
)
}
};

export default Directions;