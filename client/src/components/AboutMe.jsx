// Marty Laprelle and Susie Laprelle were married in 1983, and they have one son, Kenneth Laprelle.  Marty first started working on cars in the 1970s as a body repair guy. He then decided to try something new, and worked away from cars for a period of time. Then in 1979, a bomb blew up at Marty's place of employment (Harvey's Casino in Lake Tahoe.) He then decided to answer a job ad in the newspaper at a transmissions repair shop. I guess you could say, he hasn't looked back. 

//         Marty and Susie Laprelle have owned and operated Napa Valley Transmissions since 1992. Marty decided to open his own business, so he could continue to grow personally and become the best that he can be. 26+ years later, Marty has continually served the Napa Valley with any transmission needs. Including working on car fleets for local businesses, family cars, muscle cars, large 4x4 trucks, and not to mention, some drag racing cars as well! 

import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import GalleryImages from './GalleryImages.jsx'
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import TestModal from './TestModal.jsx'
const style = {
  height: '607px',
  width: '30%',
  textAlign: 'center',
  verticalAlign:'top',
  display: 'inline-block',
  borderColor: 'black',
  borderTopStyle: 'solid',
  borderWidth: '5px',
  marginLeft: '33%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  overflow: 'hidden', 
};
class AboutMe extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        {/* <LeadingBar/> */}
        <GalleryImages/>
        <BottomNav/>
        </MuiThemeProvider>
)
}
};

export default AboutMe;