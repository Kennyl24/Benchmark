import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';

class Updates extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
        <LeadingBar/>
   <iframe 
   width="100%"
   style={{marginTop:'130px'}}
   height="1500px"
   src="https://vip.vantageproduction2.com/HtmlTemplate/5061073/7c6db342-673c-40ba-bdf3-8b74cf94ac9d/Render?ver=3&partnerid=0"> 
     </iframe>
     <BottomNav/>
   </MuiThemeProvider>
)
}
};

export default Updates;