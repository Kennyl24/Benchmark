import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import Paper from 'material-ui/Paper';
import { SocialIcon } from 'react-social-icons';
import TextField from '@material-ui/core/TextField';
import {isMobile} from 'react-device-detect';
import axios from 'axios';


class GetInTouch extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      phone:'',
      message:'',
    }
    this.submitIt = this.submitIt.bind(this);
  }
  submitIt(){
    axios.post('/Contact', {
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      message: this.state.message
    })
    .then( (response) =>  {
      setTimeout(() => {
      }, 500);
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
    this.setState({
      name:'',
      email: '',
      phone: '',
      message: '',
    });
  }
  render () {
    return (
  <MuiThemeProvider>
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', marginLeft: isMobile? '0': '20%', marginRight:'0%', marginTop:'5%', marginBottom:'5%'}}>
    <div style={{width:'25%', minWidth:'340px', fontFamily: 'plexeina-bold,Helvetica,sans-serif'}}>
    <ul style={{listStyle: 'none'}}>
    <h1 className="homepage-header" style={{marginBottom:'0px', textAlign:'left'}}> Drop us a line </h1>
      <p style={{fontSize:'25px', fontWeight: '500', marginTop:'0px',color:'#242f6e', marginLeft:'0%', marginBottom:'0px'}}>Say Hello.</p> <br/>
      <h3 className="contact-header"> Phone </h3>
      <li style={{marginBottom:'25px',fontFamily: 'plexeina-bold,Helvetica,sans-serif', fontSize:'18px'}}><a href="tel:(707) 254-8891" style={{color:'black', marginBottom:'12px'}}> (707) 254-8891</a> <br/> </li>
      <h3 className="contact-header"> Email </h3>
      <li style={{marginBottom:'25px',fontSize:'18px',}}><a href="mailto:teamhensley@benchmark.us" style={{color:'black'}}>  teamhensley@benchmark.us</a> <br/></li>
      <h3 className="contact-header"> Address </h3>
      <li style={{marginBottom:'25px', fontFamily: 'plexeina-bold,Helvetica,sans-serif',  fontSize:'18px',}}><a href="https://www.google.com/maps/dir/4123+Solano+Ave,+Napa,+CA+94558/''/@38.3344478,-122.3566659,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453" target="_blank" 
             style={{color: 'black', textAlign:'center', fontSize:'18px',}}>  4123 Solano Ave Napa, CA 94558 </a> <br/> </li>
      {/* <li style={{marginBottom:'25px', fontSize:'18px'}}>   M-F 8:30AM-6:00PM <br/> </li> */}
      {/* <li style={{marginBottom:'25px', fontSize:'18px'}}>  NMLS # 2143 </li> */}
      <div className='social-bottom2' style={{marginTop: '12%'}}>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.facebook.com/hildahensleynapa/" network="facebook" color="#242f6e" className="social"/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.zillow.com/lender-profile/hilda%20hensley/" color="#242f6e" />
          <SocialIcon style={{marginRight:'15px'}} url="https://www.youtube.com/channel/UCY2tLom-tAtTh-mYMKnsATA/featured" network="youtube" color="#242f6e"/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa" network="yelp" color="#242f6e"/>
      </div>
      </ul>
      </div>
      <div style={{marginLeft: isMobile ? '10%' : '15%', width:'50%', alignItems:'center', justifyContent:'center'}}>
      <h1 className="homepage-header" style={{textAlign: 'left'}}>Message Us</h1>
      <div style={{marginLeft:'0%'}}>
      <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Name"
          type="name"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.name}
          onChange={(event) => {
            this.setState({
              name: event.target.value
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={(event) => {
            this.setState({
              email: event.target.value
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px',height: '50px' , marginRight: '15px'}}
          id="outlined-email-input"
          label="Phone"
          type="phone"
          name="phone"
          autoComplete="phone"
          margin="normal"
          variant="outlined"
          value={this.state.phone}
          onChange={(event) => {
            this.setState({
              phone: event.target.value
            });
          }}
        />
        <TextField
          style={{width:isMobile? '300px': '400px',marginRight: '15px'}}
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
          value={this.state.message}
          onChange={(event) => {
            this.setState({
              message: event.target.value
            });
          }}
        />
        </div>
        <div>
        <Button onClick={this.submitIt} variant="contained"style={{marginLeft: '0%', marginTop:'5%', width: '25%', minWidth:'150px', backgroundColor:"#242f6e", color: 'white'}}> 
          Submit
          </Button>
          </div>
      </div>
      </div>
   </MuiThemeProvider>
)
}
};

export default GetInTouch;