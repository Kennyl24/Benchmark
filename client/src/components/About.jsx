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
import {Helmet} from "react-helmet";


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
        <Helmet>
            <title>About The Hilda Hensley Team</title>
            <meta name="keywords" content="Mortgage Lender, Hilda Hensley, The Hilda Hensley Team, " />
            <meta name="og:description" content="The Hilda Hensley Team is a team of mortgage lending specialists. We have over 50 years of combinded experiences as a mortgage lender.   " />
            <meta property="og:url" content={window.location.href}/>
      </Helmet>
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