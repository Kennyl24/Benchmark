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
import {isMobile} from 'react-device-detect';

class TeamIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      opacity:0,
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({opacity: 1});
    }, 200)
  }
  render () {
    return (
    <MuiThemeProvider>
        <div style={{ height:'auto', paddingLeft:'4%', paddingRight:'4%', paddingBottom:'4%', background: 'white'}}>
    {/* <img src='https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'height="400px"width="100%"/> */}
    <div  style={{textAlign: 'center', paddingTop: isMobile ? '20%' : '10%', color: 'black', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center', opacity: this.state.opacity
    }}>
      <h3 className="homepage-header" style={{fontSize:'50px', color:'rgb(37, 45, 114)'}}>
        About Us 
        </h3>
        <div style={{maxWidth:'600px', minWidth:'450px'}}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jIfSP36-kqM?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
        <p style={{fontFamily:'plexeina-bold,Helvetica,sans-serif', fontSize:'18px', color:'#3f4245', lineHeight:'1.7em', paddingBottom: '28px!important', maxWidth:'800px'}}>
        The Hilda Hensley Team specializes in Mortgage Banking for Residential Home Loans. With some of the best interest rates in the industry and our amazingly fast underwriting, we offer our clients the best in mortgage lending.
          </p>
    </div>
    </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default TeamIntro;