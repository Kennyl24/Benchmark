import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'

class LeadingBar extends React.Component { 
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
  <AppBar
  title="NAPA VALLEY TRANSMISSIONS"
  titleStyle={{textAlign:'none', fontSize:'28px',fontFamily:'Arial, Helvetica, sans-serif', lineHeight:'50px', color:'#000080'}}
    style={{backgroundColor:'#696969', height:'50px' , cursor: 'auto'}}
    showMenuIconButton={false}
  >
  <div className="lead-bar-text">
  <FlatButton style={{fontSize:'18px', color:'white'}} label="">536 Soscol Avenue #3 Napa, Ca 94559 |&nbsp;</FlatButton>
  <FlatButton style={{fontSize:'22px', color:'white'}} label=""><a style={{fontSize:'18px', color:'white'}} href="tel:707-224-5898">(707)-224-5898</a></FlatButton>
    </div>
    </AppBar>
    <AppBar
    style={{height:'150px', backgroundImage:'url(' + 'http://olatheclutchandtransmissionkc.com/wp-content/uploads/2015/04/SERVER_public_general_1-PBA_Olathe-Clutch-and-Transmission_background-2.jpg' + ')', cursor:'auto'}}
    // title={'Napa "\n" Valley "\n" Transmissions'}
    titleStyle={{color:'black'}}
    showMenuIconButton={false}
    iconElementLeft={<span className="logo">Napa Valley {'/n'} Transmissions</span>}
    // iconStyleLeft={{marginLeft:'220px'}}
    >
    <div className="nav_links_container">
    <FlatButton><Link to={{ pathname:'/home' }}className="nav-links">HOME</Link></FlatButton>   
    <FlatButton><Link to={{ pathname: '/AboutMe' }}className="nav-links">ABOUT</Link></FlatButton>      
    <FlatButton><Link to={{ pathname: '/Services' }}className="nav-links">SERVICES</Link></FlatButton>                                                                                                                                                                                                                  
    {/* <FlatButton><Link to={{ pathname: '/Gallery' }}className="nav-links">GALLERY</Link></FlatButton> */}
    <FlatButton><Link to={{ pathname: '/Reviews' }}className="nav-links">REVIEWS</Link></FlatButton>
    <FlatButton><Link to={{ pathname: '/Directions' }}className="nav-links">DIRECTIONS</Link></FlatButton>  
    <FlatButton><Link to={{ pathname: '/' }}className="nav-links">CONTACT</Link></FlatButton>
  </div>
   </AppBar>
   </MuiThemeProvider>
)
}
};

export default LeadingBar;


// backgroundImage: 'url(' + 'http://olatheclutchandtransmissionkc.com/wp-content/uploads/2015/04/transmission-background.jpg' + ')', backgroundSize: 'cover', 