import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import LeadingBar from './LeadingBar.jsx';
import Paper from 'material-ui/Paper';
import { SocialIcon } from 'react-social-icons';
import TextField from '@material-ui/core/TextField';

class GetInTouch extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
  <MuiThemeProvider>
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', marginLeft: '7%', marginTop:'1%', marginBottom:'10%'}}>
      <div style={{width:'70%'}}>
      <h3 style={{fontSize:'24px', textAlign: 'center'}}>GET IN TOUCH</h3>
      <TextField
          style={{width: '250px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Name"
          type="name"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          style={{width: '250px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          style={{width: '250px', height: '50px' , marginRight: '15px'}}
          id="outlined-email-input"
          label="Phone"
          type="phone"
          name="phone"
          autoComplete="phone"
          margin="normal"
          variant="outlined"
        />
        <TextField
          style={{marginRight: '15px'}}
          id="outlined-email-input"
          label="Message"
          type="message"
          name="message"
          autoComplete="message"
          margin="normal"
          variant="outlined"
          fullWidth
          multiline={true}
          rows={4}
          rowsMax={4}
        />
        <div>
        <Button variant="contained"style={{marginLeft: '40%', marginTop:'5%', width: '25%', minWidth:'150px', backgroundColor:"#242f6e", color: 'white'}}> 
          Submit
          </Button>
          </div>
      </div>
    <div style={{width:'25%', minWidth:'340px', fontFamily: 'plexeina-bold,Helvetica,sans-serif'}}>
    <ul style={{listStyle: 'none'}}>
      <p style={{fontSize:'22px', width:'190px', fontWeight: '500', borderBottom:'1px solid black'}}>Reach Out Directly</p> <br/>
      <li style={{marginBottom:'25px', fontSize:'18px'}}><a href="tel:(707) 254-8891" style={{color:'black', marginBottom:'12px'}}> (707) 254-8891</a> <br/> </li>
      <li style={{marginBottom:'25px', fontSize:'18px',}}><a href="mailto:hilda.hensley@benchmark.us" style={{color:'black'}}>  teamhensley@benchmark.us</a> <br/></li>
      <li style={{marginBottom:'25px', fontSize:'18px',}}><a href="https://www.google.com/maps/dir/4123+Solano+Ave,+Napa,+CA+94558/''/@38.3344478,-122.3566659,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453" target="_blank" 
             style={{color: 'black', fontSize:'18px',}}>  4123 Solano Ave Napa, CA 94558 </a> <br/> </li>
      <li style={{marginBottom:'25px', fontSize:'18px',}}>   M-F 8:30AM-6:00PM <br/> </li>
      <li>  NMLS # 2143 </li>
      <div className='social-bottom' style={{marginTop: '12%'}}/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.facebook.com/hildahensleynapa/" network="facebook" color="#242f6e" className="social"/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.zillow.com/lender-profile/hilda%20hensley/" color="#242f6e" />
          <SocialIcon style={{marginRight:'15px'}} url="http://youtube.com" network="youtube" color="#242f6e"/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa" network="yelp" color="#242f6e"/>
      </ul>
      </div>
      </div>
   </MuiThemeProvider>
)
}
};

export default GetInTouch;