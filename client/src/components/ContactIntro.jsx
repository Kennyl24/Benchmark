import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";
import TextField from '@material-ui/core/TextField';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import {isMobile} from 'react-device-detect';
import hildateam from './hildateam.jpg';

class ContactIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
    this.openCalendly = this.openCalendly.bind(this)
  }
  openCalendly(){
    window.open('https://calendly.com/teamhensley', '_blank');
  }
  render () {
    return (
    <MuiThemeProvider>
      {/* <div style={{position:'relative', top:'0px', backgroundImage: 'url(hildateam)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'500px', width: '100%', marginBottom:'0px'}}> */}
    <div style={{paddingBottom:'4%', background: 'linear-gradient(#e0e0e0, #242f6e)', marginBottom: '50px', 
   backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundColor: 'rgba(36,	47,	110, .3)', backgroundBlendMode: 'multiply', backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover',
 backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'500px', width: '100%', marginBottom:'0px'}}>
  
  }}>
      <div className="contact-box" style={{textAlign: 'center', paddingTop: isMobile ? '32%' :'15%', color: 'white', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center', marginLeft:'20%', msFlexAlign:'center', marginRight:'20%'
    }}>
      <h1 className="homepage-header" style={{marginTop:'8%', color:'white', fontSize: isMobile ? '22px' : '34px' }}>
        Hi, we are The Hilda Hensley Team. Contact us today to find out how we can get you into your dream home. 
        </h1>
        <Button variant="contained" style={{marginTop:'.5%', marginBottom: '2%',width: isMobile? '200px' : '200px', height: '50px', backgroundColor:"#242f6e", color: 'white'}}>
        <span onClick={this.openCalendly} style={{color:'white'}}>Schedule a call</span>
      </Button>
        
        <div> 
          </div>
      </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default ContactIntro;