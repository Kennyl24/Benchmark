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
import FormatQuote from '@material-ui/icons/FormatQuote';
import FormatQuoteOutlined from '@material-ui/icons/FormatQuoteOutlined';
class TeamIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
        <div style={{marginTop:'120px', height:'auto', paddingLeft:'4%', paddingRight:'4%', paddingBottom:'4%', background: 'linear-gradient(#242f6e, #e0e0e0)'}}>
    {/* <img src='https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'height="400px"width="100%"/> */}
    <div  style={{textAlign: 'center', paddingTop: '5%', color: 'white', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center'
    }}>
      <h1 style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important'}}>
        About Us
        </h1>
        <p style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important', fontSize: '16px'}}>
        <FormatQuoteOutlined/>
        Our mission is to deliver an honest, well-communicated,
financially sound lending experience.

As Home Financial Experts, we provide clear options and advice to help buyers make confident mortgage decisions. Simply put, we put our clients first! Our motto at Benchmark is “Welcome Home”, which means that everyone who walks through our doors is family. As you do with family, we put your best interest first. Whether that’s finding you the best price in the marketplace, keeping you informed throughout the process or being there when the keys are placed in your hands. Here at Benchmark we create clients for life!
<FormatQuoteOutlined/>
<br/><br/>
Thank you for your business.
<br/><br/>
<span style={{fontFamily: 'Apple Chancery, cursive'}}>
Hilda Hensley, Branch Manager</span>
</p>

       
      </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default TeamIntro;