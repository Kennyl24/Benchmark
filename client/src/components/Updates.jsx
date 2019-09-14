import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import {Helmet} from "react-helmet";

class Updates extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <MuiThemeProvider>

      <Helmet>
          <title>Weekly Financial Update</title>
           <meta charSet="utf-8" />

           <meta name="description" content="Bonds and home loan rates hate good news. So, the influx of positive news abroad coupled with strong jobs data here in the U.S. pressured Mortgage Bonds lower and home loan rates higher."/>
           <meta name="keywords" content="Napa Mortgage Loans, Mortgage rates, loans, mortgage, interest rates, fha loan, va loan, home loan, mortgage calculator, hilda hensley, benchmark mortgage napa, napa valley, mortgage broker, mortgage banker"/>
          {/* <meta name="og:description" content={this.state.blog.blogSnippet} />
    //         <meta property="og:title" content={this.state.blog.blogTitle} />
    //         <meta property="og:image" content={this.state.blog.blogImage} /> */}
            <meta property="og:image" content='https://vip.vantageproduction2.com/Share/Content/5062114/top-image-090919.jpg' />

            <meta property="og:url" content={window.location.href}/>
            <link rel="canonical" href="https://napamortgageloans.com/updates" />

      </Helmet>
              <LeadingBar/>
   <iframe 
   width="100%"
   style={{marginTop:'130px'}}
   height="1500px"
   src='https://vip.vantageproduction2.com/HtmlTemplate/5062149/7c6db342-673c-40ba-bdf3-8b74cf94ac9d/Render?preview'>  
     </iframe>
     <BottomNav/>
   </MuiThemeProvider>
)
}
};

export default Updates;