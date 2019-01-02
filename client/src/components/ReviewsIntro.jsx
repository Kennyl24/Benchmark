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

class ReviewsIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <MuiThemeProvider>
    <div style={{marginTop:'120px', height:'auto', paddingBottom:'8%', background: 'linear-gradient(#e0e0e0, #242f6e)'}}>
    {/* <img src='https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'height="400px"width="100%"/> */}
    <div  style={{textAlign: 'center', paddingTop: '5%', color: 'white', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center'
    }}>
      <h1 style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important'}}>
        TESTIMONIALS
        </h1>
        <p style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important', fontSize:'22px'}}>
          Here is how our clients and partners felt we did
        </p>
        <div> 
        <div className='social-icons' style={{marginTop: '10%'}}/>
        <span style={{maxWidth:'20%'}}>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa" network="yelp" color="#d32323"/>
          </span>
          <span style={{maxWidth:'20%'}}>
        
        <SocialIcon style={{marginRight:'15px'}} url="https://www.zillow.com/lender-profile/hilda%20hensley/" color="#0074ef" />
        </span>
        
          </div>
      </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default ReviewsIntro;