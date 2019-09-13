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
    // <Helmet>
    //         <title>Hilda Hensley Team, Benchmark Mortgage Napa Valley</title>
    //         <meta charSet="utf-8" />

    //         <meta name="description" content="A leading Mortgage team in the Napa Valley. Hilda Hensley and team comes with more than 50 years of combined experience in the mortgage industry. All of which have taken place in the Napa Valley. For Any of your home loan needs, contact Napa Benchmark."/>
    //         <meta name="keywords" content="Napa Mortgage Loans, Mortgage rates, loans, mortgage, interest rates, fha loan, va loan, home loan, mortgage calculator, hilda hensley, benchmark mortgage napa, napa valley, mortgage broker, mortgage banker"/>
    //         {/* <meta name="og:description" content={this.state.blog.blogSnippet} />
    //         <meta property="og:title" content={this.state.blog.blogTitle} />
    //         <meta property="og:image" content={this.state.blog.blogImage} /> */}
    //         <meta property="og:url" content={window.location.href}/>
    //         <link rel="canonical" href="https://napamortgageloans.com/" />

    //   </Helmet>
    return (  
        <div style={{backgroundColor:'#fafafa'}}>
        <LeadingBar/>
        <FrontPictures/>
        <HomePageTest/>
        <BlogHomePage/>
        <VlogHome/>
        <h3 className="homepage-header">Mortgage Calculator</h3>
        <MortgageCalc/>
        <BottomNav/>
        </div>
)
}
};

export default HomePage;