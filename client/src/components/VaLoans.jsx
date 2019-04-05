import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {isMobile} from 'react-device-detect';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import VaMap from './VaMap.jsx';
import { Link } from 'react-router-dom';

import config from '../../../config.js';

class VaLoans extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }
  }
  componentWillMount(){
    window.scrollTo(0, 0);
    this.targetElement = document.querySelector('#helloitsme');
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLP_leQJ2IinWr9OB32M1Z50r05ABr_JbL&key=${config.GOOGLE_MAPS_API_KEY}`)
    .then(resp => resp.json())
    .then((resp) => {
      console.log(resp);
      this.setState({videos: resp.items});
    });

  }
  render () {
    return (
      <MuiThemeProvider>
        <LeadingBar/>
        <div style={{position:'relative', top:'0px', background: isMobile ?'linear-gradient(to right bottom, #242f6e, #e0e0e0)' : 'linear-gradient(to right bottom, #242f6e, #e0e0e0)', backgroundImage: isMobile ? null :'url(https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',  backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'400px', width: '100%', marginBottom:'0px'}}>
       <div style={{paddingTop:'12%'}}>
        <h1 className="homepage-header" style={{color:'white'}}>VA Loans</h1>
        </div>
        </div>
        <div style={{backgroundColor:'#f5f5f5'}}>
        <h2 className="homepage-header" style={{marginTop:0, paddingTop:'3%'}}>You have served our country, now let us serve you!</h2>
        <p style={{fontFamily: 'plexeina-regular,Helvetica,sans-serif', marginLeft: isMobile ? '5%' :'20%', marginRight: isMobile ? '5%': '20%',color: 'black', fontSize: '18px', lineHeight:'1.6', textAlign:'center'}}>
        Veteran's Administration or "VA loans" are available for active, non-active and retired Army, Air Force, Marine, Navy, National Guard, and Coast Guard veterans who meet the established service requirements. If your spouse is a veteran, you may also qualify. We pride ourselves in taking excellent care of our nation’s veterans and their families.
        </p>
        <h2 className="homepage-header" style={{textDecoration:'underline'}}>Benefits to veterans or their spouses who qualify:</h2>
        <div style={{display:'flex', flexWrap: isMobile ? 'wrap' : 'nowrap', flexDirection: 'row', marginLeft: isMobile? '1%' : '10%'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
        <div style={{minWidth:'200px'}}>
          <h5>1.</h5>
        Up to 100% financing/no down payment (Up to the county limit)
          </div>
          <div>
          <h5>2.</h5>
          Low down payment above the county limit
          </div>
          <div>
          <h5>3.</h5>
          No monthly mortgage insurance (MMI)
          </div>
          <div>
          <h5>4.</h5>
          Gift funds acceptable for closing costs
          </div>
          <div>
          <h5>6.</h5>
          No cash reserve requirements
          </div>
          <div>
          <h5>6.</h5>
          A variety of terms or loan types available
          </div>
          <div>
          <h5>7.</h5>
          Available for purchase and refinance
          </div>
          <div>
          <h5>8.</h5>
          Reduced costs for disabled veterans
          </div>
          <div>
          <h5>9.</h5>
          Seller can pay for closing costs
          </div>
          <div>
          <h5>10.</h5>
          Seller or Veteran can pay for any required repairs
          </div>
          <div>
          <h5>11.</h5>
          No pre-payment penalty
          </div>
        
        </div>
        <div>
          <VaMap videos={this.state.videos}/>
        </div>
        </div>
        <h2 style={{fontSize:'24px', marginLeft: isMobile? '2%': '18%', marginRight:isMobile? '2%': '18%', marginTop:'1%', marginBottom:0, paddingBottom:'1%'}}>Benchmark appreciates our veterans. We go the extra mile not only because it's an honor to be part of your homeownership goals, but because it's the right thing to do. </h2>
        <h5 style={{textAlign:'center', marginBottom:0}}><span><Link to={{ pathname:'/contact' }} style={{color:'inherit'}}>Contact Us Today if a VA Loan is Right for you</Link></span></h5>
        </div>
        
        <BottomNav/>
        </MuiThemeProvider>
    )
  }
}

export default VaLoans;