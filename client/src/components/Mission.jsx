import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {isMobile} from 'react-device-detect';

class Mission extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <div style={{backgroundColor:'white', paddingTop:'3%', paddingBottom:'3%'}} id="mission">
        <h3 className="homepage-header" style={{color:'rgb(37, 45, 114)', margin:'0', paddingTop:'15px'}}>Our Mission</h3>
        <div style={{width: isMobile ? '95%' : '60%', marginRight: isMobile? '2%':'0%', marginLeft: isMobile? '2%':'20%'}}>
<p style={{fontSize:'18px', textAlign:'center', lineHeight:'1.5em', color:'#3f4245', fontFamily:'plexeina-regular,Helvetica,sans-serif'}}> 
        Our mission is to deliver an honest, well-communicated,
financially sound lending experience.

As Home Financial Experts, we provide clear options and advice to help buyers make confident mortgage decisions. Simply put, we put our clients first! Our motto at Benchmark is “Welcome Home”, which means that everyone who walks through our doors is family. As you do with family, we put your best interest first. Whether that’s finding you the best price in the marketplace, keeping you informed throughout the process or being there when the keys are placed in your hands. Here at Benchmark we create clients for life!
<br/><br/>
Thank you for your business.
<br/><br/>
<span style={{fontFamily: 'cursive', fontSize:'22px'}}>
Hilda Hensley
</span>
<br/>
Branch Manager</p>

</div>
</div>
      </MuiThemeProvider>
)
}
};

export default Mission;