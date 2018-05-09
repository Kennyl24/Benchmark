import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
const phoneNumber = '7072245898'
class LeadingBar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'7072245898'
    }
    this.titleClick=this.titleClick.bind(this);
  //  this.phoneNumber = this.phoneNumber.bind(this)
  }
  titleClick(){
    location.reload();
  }
  render () {
    return (
      <MuiThemeProvider>
  <AppBar
    style={{backgroundColor:'#696969', height:'50px' , cursor: 'auto'}}
    // titleStyle={{paddingLeft:'50px', cursor: 'pointer'}}
    // title="Napa Valley Transmissions"
    // onTitleClick={this.titleClick}
    showMenuIconButton={false}
    // iconElementRight={<FlatButton style={{fontSize:'42px'}} label="">(707)-224-5898</FlatButton>}
  >
  <div className="lead-bar-text">
  <FlatButton style={{fontSize:'18px', color:'white'}} label="">536 Soscol Avenue #3 Napa, Ca 94558 |&nbsp;</FlatButton>
  <FlatButton style={{fontSize:'22px', color:'white'}} label=""><a style={{fontSize:'18px', color:'white'}} href="tel:707-224-5898">(707)-224-5898</a></FlatButton>
    </div>
    </AppBar>
    <AppBar
    title="536 Soscol Avenue #3"
    // titleStyle={{color:'black'}}
    iconStyleLeft={{marginLeft:'220px'}}
    iconElementLeft={<img className="backgroundimage" src={'https://i.imgur.com/WCuRL6i.jpg'} alt=""/>}
    style={{backgroundColor:'white', height:'150px'}}>
    <div style={{paddingTop:'30px', paddingRight:'8px'}}>
    <FlatButton hoverColor={'blue'} primary={true} style={{ padding: '10px', minWidth: 'none'}}><Link to={{ pathname:'/home' }}className="nav-links">Home</Link></FlatButton>                                                                                                                                                                                                                     
    <FlatButton style={{ padding: '10px', minWidth: 'none' }} ><Link to={{ pathname: '/logout' }} className="nav-links">About</Link></FlatButton>
    <FlatButton style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname: '/profile' }}className="nav-links">Services</Link></FlatButton>
    <FlatButton style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname: '/profile' }}className="nav-links">Gallery</Link></FlatButton>
    <FlatButton style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname: '/profile' }}className="nav-links">Reviews</Link></FlatButton>
    <FlatButton style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname: '/profile' }}className="nav-links">Contact</Link></FlatButton>
  </div>
   </AppBar>
   <div>
   <img className="frontPicture" src={'https://i.imgur.com/00AmaHN.jpg'} alt="" height='600px' width='70%'/>
   </div>
   </MuiThemeProvider>
)
}
};

export default LeadingBar;
