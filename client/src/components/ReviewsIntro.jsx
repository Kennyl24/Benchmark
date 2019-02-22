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
import { SocialIcon } from 'react-social-icons';
import {isMobile} from 'react-device-detect';

class ReviewsIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
    <div style={{height:'auto', paddingBottom:'2%', background: 'linear-gradient(0.25turn, rgb(37, 45, 114), rgb(211, 209, 209), rgb(37, 45, 114))'}}>
    {/* <img src='https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'height="400px"width="100%"/> */}
    <div  style={{textAlign: 'center', paddingTop: isMobile ? '24%':'11%', color: 'white', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center'
    }}>
      <h1 className="homepage-header" style={{color:'white', fontSize:'42px'}}>
      Reviews 
      </h1>
      <p style={{fontFamily:'plexeina-bold,Helvetica,sans-serif', fontSize:'18px', color:'white', lineHeight:'1.7em', paddingBottom:'1%', maxWidth:'600px'}}>
      
      Feel free to check these reviews out on <span style={{borderBottom:'1px solid black', color:'red', cursor:'pointer'}}
      onClick={()=> {
        window.open('https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa', '_blank');}}
      >Yelp</span> and <span style={{borderBottom:'1px solid black', color:'blue', cursor:'pointer'}}
      onClick={()=>{
        window.open('https://www.zillow.com/lender-profile/hilda%20hensley/', '_blank');}}
      >Zillow</span> as well.
        </p>
        <div> 
          </div>
    </div>
    {/* <div className='social-icons'>
  <img src="https://i.ibb.co/8N0N6Z4/Yelp-Inc-Vector-Logo.png" 
  onClick={()=> {
    window.open('https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa', '_blank');}}
  style={{cursor: 'pointer', width:'150px', height:'100px'}} alt="yelp" border="0"/>
  <img src="https://i.ibb.co/5ThzGxS/hack-week-css-logo.png" 
  onClick={()=>{
   window.open('https://www.zillow.com/lender-profile/hilda%20hensley/', '_blank');}}
  style={{cursor: 'pointer', width:'150px', height:'100px'}} alt="Zillow-Logo" border="0"/>
  </div> */}
    </div>
   </MuiThemeProvider>
)
}
};

export default ReviewsIntro;