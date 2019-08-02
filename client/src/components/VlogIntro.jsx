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

class VlogIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
    <div style={{position:'relative', top:'0px', 
    backgroundColor: 'rgba(15, 15, 15, 0.3) !important', backgroundColor: 'rgba(36,	47,	110,.3)', backgroundBlendMode: 'multiply', backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover',
    backgroundImage: 'url(https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'400px', width: '100%', marginBottom:'0px'}}>
    <div  style={{textAlign: 'center', paddingTop: isMobile ? '27%': '10%', paddingBottom: '2%',  color: 'black', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center'
    }}>
      <h1 style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important', color:'white', textAlign:'center'}}>
        Mortgage Lender Video Tips
        </h1>
        <p style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important', fontSize:'25px', color:'white'}}>
          Lending insights from a team of financial experts
        </p>       
      </div>
      </div>
   </MuiThemeProvider>
)
}
};

export default VlogIntro;