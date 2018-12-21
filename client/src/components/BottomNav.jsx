import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { SocialIcon } from 'react-social-icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <Paper zDepth={1} style={{height:'450px', verticalAlign:'middle', backgroundColor:'#929497'}}>
      <div style={{color: 'white'}}>
      <div className="fancy"> 
      <span>
        Benchmark Napa
      {/* <img style={{height: '100px', width: '275px'}}src="https://napa.benchmark.us/wp-content/uploads/sites/485/2015/08/home-banner-logo.png"/> */}
      </span>
      </div>
      <div className="grid"> 
        <div className="grid-item">
        <ul style={{listStyle: 'none'}}>
        <li style={{marginBottom:'15px'}}><a href="tel:(707) 254-8891" style={{color:'white', paddingBottom:'15px'}}> (707) 254-8891</a> <br/> </li>
      <li style={{marginBottom:'15px'}}><a href="mailto:teamhensley@benchmark.us" style={{color:'white', marginBottom:'15px'}}>  teamhensley@benchmark.us</a> <br/></li>
      <li style={{marginBottom:'15px'}}><a href="https://www.google.com/maps/dir/4123+Solano+Ave,+Napa,+CA+94558/''/@38.3344478,-122.3566659,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453!1m5!1m1!1s0x808500d2af41b48d:0x2760ab5bef29d629!2m2!1d-122.3216465!2d38.334453" target="_blank" 
             style={{color: 'white', marginBottom:'15px'}}>  4123 Solano Ave, Napa, CA 94558 </a> <br/> </li>
      {/* <li style={{marginBottom:'15px'}}> (707) 254-8891 <br/> </li>
      <li style={{marginBottom:'15px'}}> hilda.hensley@benchmark.us <br/></li>
      <li style={{marginBottom:'15px'}}>  4123 Solano Ave, Napa, CA 94558 <br/> </li> */}
      <li style={{marginBottom:'15px'}}> M-F 8:30AM-6:00PM <br/> </li>
      <li style={{marginBottom:'15px'}}>  NMLS # 2143 </li>
        </ul>
          </div>
          <div className="grid-item">
          <div className='social-icons'/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.facebook.com/hildahensleynapa/" network="facebook" color="#242f6e"/>
          <SocialIcon style={{marginRight:'15px'}} url="http://linkedin.com/in/jaketrent" network="youtube" color="white"/>
          <SocialIcon style={{marginRight:'15px'}} url="https://www.zillow.com/lender-profile/hilda%20hensley/" color="#242f6e" />
          
          <SocialIcon style={{marginRight:'15px'}} url="https://www.yelp.com/biz/hilda-garcia-hensley-benchmark-mortgage-napa" network="yelp" color="white"/>
         <div style={{display: 'flex', flexDirection:'column'}}>
          <div className="footer-subscribe-title"> 
            Subscribe to our Blog
          </div>
          <TextField
          style={{width: '100%', height: '50px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" style={{backgroundColor:"#242f6e", color: 'white'}}>
          Subscribe
      </Button>
      </div>
          </div>
          <div className="grid-item">
          <ul style={{listStyle: 'none'}}>
          <li><Button ><Link to={{ pathname:'/home' }}className="bottomnav-links">Home</Link></Button>  </li> 
          <li><Button><Link to={{ pathname: '/About' }}className="bottomnav-links">About</Link></Button>  </li>    
          <li><Button><Link to={{ pathname: '/Blog' }}className="bottomnav-links">Blog</Link></Button>   </li>                                                                                                                                                                                                               
          <li><Button><Link to={{ pathname: '/Vlog' }}className="bottomnav-links">Vlog</Link></Button></li>
          <li><Button><Link to={{ pathname: '/Reviews' }}className="bottomnav-links">Reviews</Link></Button></li>  
          <li><Button><Link to={{ pathname: '/Reviews' }}className="bottomnav-links">Contact</Link></Button>  </li>
        </ul>
          </div>
      </div> 
      </div> 
      </Paper>
    );
  }
}

export default BottomNav;