import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeadingBar from './LeadingBar.jsx';
import TeamIntro from './TeamIntro.jsx';
import AboutMap from './AboutMap.jsx';
import BottomNav from './BottomNav.jsx';
import CoreValues from './CoreValues.jsx';
import Mission from './Mission.jsx';

class About extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        <LeadingBar/>
        <TeamIntro/>
        {/* <Mission/> */}
        <CoreValues/>
        <AboutMap style={{backgroundColor:'#fafafa'}}/>
        <BottomNav/>
      </MuiThemeProvider>
)
}
};

export default About;