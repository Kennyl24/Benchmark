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
class HomePage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'7072245898'
    }
    this.titleClick=this.titleClick.bind(this);
  }
  titleClick(){
    location.reload();
  }
  render () {
    return (
      <MuiThemeProvider>
        <LeadingBar/>
        <FrontPictures/>
        <CustomerSection/>
   </MuiThemeProvider>
)
}
};

export default HomePage;