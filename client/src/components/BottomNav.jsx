import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { SocialIcon } from 'react-social-icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pdf from './DISCLOSURE.pdf';

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.submitted = this.submitted.bind(this);
  }
  submitted(){
    axios.post('/Email', {
      email: this.state.email,
    })
    .then( (response) =>  {
      setTimeout(() => {
      }, 500);
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
  }

  render() {
    return (
      <Paper zDepth={1} style={{height:'auto', verticalAlign:'middle', paddingBottom:'5%', backgroundColor:'#929497'}}>
      <div style={{color: 'white'}}>
      <h6 style={{margin:'0', marginBottom:'4%'}}> 
      
        {/* Benchmark Napa */}
      <img style={{height: '100px', width: '275px', paddingTop:"-10px"}}src="https://i.ibb.co/689pygv/welcome.png"/>
      
      </h6>
      <div className="grid"> 
        <div className="grid-item">
        {/* <ul style={{listStyle: 'none'}}> */}
        <div style={{marginBottom:'25px', fontSize:'16px'}} className="bottomnav_links"><a href="tel:(707) 254-8891" style={{color:'white', paddingBottom:'0px'}}> (707) 254-8891</a> <br/> </div>
      <div style={{marginBottom:'25px', fontSize:'16px'}}className="bottomnav_links"><a href="mailto:teamhensley@benchmark.us" style={{color:'white', marginBottom:'0px'}}>  teamhensley@benchmark.us</a> <br/></div>
      <div style={{marginBottom:'25px', fontSize:'16px'}}className="bottomnav_links"><a href="https://www.google.com/maps/dir/4123+Solano+Ave,+Napa,+CA+94558/''/@38.3344478,-122.3566659,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453" target="_blank" 
             style={{color: 'white', marginBottom:'15px'}}className="bottomnav_links">  4123 Solano Ave, Napa, CA 94558 </a> <br/> </div>
      <div style={{marginBottom:'25px', fontSize:'16px'}}className="bottomnav_links">Monday - Friday 8:30AM-6:00PM <br/> </div>
      <div style={{marginBottom:'25px', fontSize:'16px'}}className="bottomnav_links">© 2019 Ark-La-Tex Financial Services, LLC</div>
      <div style={{marginBottom:'25px', fontSize:'16px'}}className="bottomnav_links">NMLS#2143 </div>
        {/* </ul> */}
          </div>
          <div className="grid-item">
          <div className='social-bottom'/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.facebook.com/hildahensleynapa/" network="facebook" color="#242f6e"/>
          <SocialIcon style={{marginRight:'15px'}} url="http://youtube.com/" network="youtube"/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.zillow.com/lender-profile/hilda%20hensley/" color="#242f6e" />      
          <SocialIcon style={{marginRight:'15px'}} url="https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa" network="yelp"/>
         <div style={{display: 'flex', flexDirection:'column'}}>
          <div className="footer-subscribe-title"> 
            Subscribe to our Blog
          </div>
          <TextField
          style={{width: '100%', height: '50px'}}
          id="this-input"
          label="email"
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
        <Button onClick={this.submitted} variant="contained" style={{backgroundColor:"#242f6e", color: 'white'}}>
          Subscribe
      </Button>
      </div>
          </div>
          <div className="grid-item" style={{minWidth:'250px'}}>
          <div style={{marginBottom:'20px', fontSize:'16px'}}><a href='/home'className="bottomnav-links">Home</a></div> 
          <div style={{marginBottom:'20px', fontSize:'16px'}}><a href='/About'className="bottomnav-links">About</a></div>    
          <div style={{marginBottom:'20px', fontSize:'16px'}}><a href='/Blog'className="bottomnav-links">Blog</a></div>                                                                                                                                                                                                               
          <div style={{marginBottom:'20px', fontSize:'16px'}}><a href='/Vlog'className="bottomnav-links">Vlog</a></div>
          <div style={{marginBottom:'20px', fontSize:'16px'}}><a href='/Reviews'className="bottomnav-links">Reviews</a></div>  
          <div><a href='/Contact' className="bottomnav-links">Contact</a></div>
        
          </div>
      </div> 
      <footer >
      <img style={{width:'100px', height:'100px'}}src ="https://i.ibb.co/FHV0ffT/image-12.png"/>
   <p>© 2019 Ark-La-Tex Financial Services, LLC, NMLS#2143</p>
   <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <ul>
        <li style={{textDecoration:'underline', cursor:'pointer'}}> <a style={{color:'white'}}href={pdf} type="application/pdf" target="_blank">State Licensing Disclosure</a></li>
        <li style={{textDecoration:'underline', cursor:'pointer'}}> <a href="/Privacy">Privacy Policy </a></li>
        <li style={{textDecoration:'underline', cursor:'pointer'}} onClick={() => window.location.href="http://www.nmlsconsumeraccess.org/"}>NMLS Consumer Access</li>
        </ul>
        </div>
      
      </footer>
      </div> 
      </Paper>
    );
  }
}

export default BottomNav;