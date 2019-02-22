import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeadingBar from './LeadingBar.jsx';
import TeamIntro from './TeamIntro.jsx';
import AboutMap from './AboutMap.jsx';
import BottomNav from './BottomNav.jsx';
import CoreValues from './CoreValues.jsx';
import Mission from './Mission.jsx';
import AboutNav from './AboutNav.jsx';

class About extends React.Component { 
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
        <LeadingBar/>
        <TeamIntro/>
        {/* <AboutNav/> */}
        <AboutMap style={{backgroundColor:'#fafafa'}}/>
        <Mission/>
        <CoreValues/>
        <BottomNav/>
      </MuiThemeProvider>
)
}
};

export default About;