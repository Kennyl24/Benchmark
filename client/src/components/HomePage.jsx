import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import LeadingBar from './LeadingBar.jsx';
import FrontPictures from './FrontPictures.jsx';
import CustomerSection from './CustomerSection.jsx';
import ServiceSection from './ServiceSection.jsx';
import BottomNav from './BottomNav.jsx';
import ReviewHomePage from './ReviewHomePage.jsx';
import BlogHomePage from './BlogHomePage.jsx';
import VlogHomePage from './VlogHomePage.jsx';
import AboutHomeMap from './AboutHomeMap.jsx';
import HomePageTest from './HomePageTest.jsx';
import MetaTags from 'react-meta-tags';

class HomePage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'707254-8891'
    }
    this.titleClick=this.titleClick.bind(this);
  }
  titleClick(){
    location.reload();
  }
  render () {
    return (
      <MuiThemeProvider>
        <MetaTags>
            <title>Napa Valley Mortgage Lender Home Page</title>
            <meta name="description" content="Your napa valley mortgage lenders. Here you will see mortgage blogs, vlogs, and more." />
            <meta property="og:title" content="Napa Valley Mortgage Lender" />
            <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <div style={{backgroundColor:'#fafafa'}}>
        <LeadingBar/>
        <FrontPictures/>
        {/* <AboutHomeMap/> */}
        <HomePageTest/>
        {/* <ReviewHomePage/> */}
        <BlogHomePage/>
        <VlogHomePage/>
        <BottomNav/>
        </div>
   </MuiThemeProvider>
)
}
};

export default HomePage;