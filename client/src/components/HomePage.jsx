import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import FrontPictures from './FrontPictures.jsx';
import BottomNav from './BottomNav.jsx';
import ReviewHomePage from './ReviewHomePage.jsx';
import BlogHomePage from './BlogHomePage.jsx';
import VlogHome from './VlogHome.jsx';
import AboutHomeMap from './AboutHomeMap.jsx';
import HomePageTest from './HomePageTest.jsx';
import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";
import MortgageCalc from './MortgageCalc.jsx';

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
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render () {
    <MetaTags>
            {/* <title>Napa Valley Mortgage Lender Home Page</title>
            <meta name="description" content="Your napa valley mortgage lenders. Napa Mortgage brokers. Napa mortgage bankers. Napa mortgage. Napa home loans. Here you will see mortgage blogs, vlogs, and more." />
            <meta name="keywords" content="Your napa valley mortgage lenders. Napa Mortgage brokers. Napa mortgage bankers. Napa mortgage. Napa home loans. Here you will see mortgage blogs, vlogs, and more." />
            <meta property="og:title" content="Napa Valley Mortgage Lender" />
            <meta property="og:image" content="https://i.ibb.co/RCsMTx9/teamlogo.png" /> */}
    </MetaTags>
    return (  
        <div style={{backgroundColor:'#fafafa'}}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Napa Mortgage Loans, Hilda Hensley Team</title>
                <meta name="description" content="The Hilda Hensley Team is a leading mortgage team in the Napa Valley. With over 50 years of combined experience." />
                <link rel="canonical" href="https://napamortgageloans.com/" />
            </Helmet>
        <LeadingBar/>
        <FrontPictures/>
        <HomePageTest/>
        <BlogHomePage/>
        <VlogHome/>
        <h3 className="homepage-header">Mortgage Calculator</h3>
        {/* <MortgageCalc/> */}
        <BottomNav/>
        </div>
)
}
};

export default HomePage;