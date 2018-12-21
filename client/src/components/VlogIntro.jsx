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

class VlogIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
    
    <div style={{marginTop:'0px', width: '1500px',height:'750px', background: 'linear-gradient(to right bottom, #e0e0e0, #242f6e)'}}>
    {/* <img src='https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'height="400px"width="100%"/> */}
      <div  style={{textAlign: 'center', position: 'absolute', top: '25%', left:'35%', color: 'white'}}>
      <h1 style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important'}}>
        Mortgage Lender Vlog
        </h1>
        <p style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important', fontSize:'22px'}}>
          Lending insights from a team of financial experts
        </p>       
      </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default VlogIntro;