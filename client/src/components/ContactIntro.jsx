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

class ContactIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
    <div style={{marginTop:'120px', height:'60vh', background: 'linear-gradient(#e0e0e0, #242f6e)', marginBottom: '50px'}}>
      <div  style={{textAlign: 'center', top: '35%', color: 'white', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center'
    }}>
      <h1 style={{fontFamily:'Simplifica', textAlign:'center', paddingTop:'5%'}}>
        CONTACT US
        </h1>
        <p style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important', fontSize:'22px', marginTop:'2.5%'}}>
          Yes, you will speak with a human
        </p>
        <Button variant="contained" style={{marginTop:'.5%', marginBottom: '2%',width: '30%', height: '50px', backgroundColor:"#242f6e", color: 'white'}}>
        <a href="https://calendly.com/teamhensley" target="_blank">Schedule a call</a>
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