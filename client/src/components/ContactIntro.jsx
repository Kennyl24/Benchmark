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

class ContactIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
      {/* <div style={{position:'relative', top:'0px', backgroundImage: 'url(https://i.ibb.co/2WjcBNw/Imagefromvid.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'500px', width: '100%', marginBottom:'0px'}}> */}
    <div style={{height:'auto', paddingBottom:'4%', background: 'linear-gradient(#e0e0e0, #242f6e)', marginBottom: '50px'}}>
      <div  style={{textAlign: 'center', paddingTop: isMobile ? '32%' :'10%', color: 'white', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center', marginLeft:'20%', marginRight:'20%'
    }}>
      <h1 className="homepage-header" style={{marginTop:'8%', color:'white', fontSize: isMobile ? '22px' : '2em' }}>
        Hi, we are Benchmark Mortgage Napa Valley. Contact us today to find out how we can get you into your dream home. 
        </h1>
        {/* <p style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important', fontSize:'22px', marginTop:'2.5%'}}>
          Yes, you will speak with a human
        </p> */}
        <Button variant="contained" style={{marginTop:'.5%', marginBottom: '2%',width: isMobile? '200px' : '200px', height: '50px', backgroundColor:"#242f6e", color: 'white'}}>
        <a href="https://calendly.com/teamhensley" target="_blank" style={{color:'white'}}>Schedule a call</a>
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