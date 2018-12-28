import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Mission extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <h3 className="homepage-header" style={{color:'#787878'}}>Our Mission</h3>
        <div style={{width:'60%', marginLeft:'20%'}}>
       <p style={{fontSize:'18px', textAlign:'center'}}> 
        Our mission is to deliver an honest, well-communicated,
financially sound lending experience.

As Home Financial Experts, we provide clear options and advice to help buyers make confident mortgage decisions. Simply put, we put our clients first! Our motto at Benchmark is “Welcome Home”, which means that everyone who walks through our doors is family. As you do with family, we put your best interest first. Whether that’s finding you the best price in the marketplace, keeping you informed throughout the process or being there when the keys are placed in your hands. Here at Benchmark we create clients for life!
<br/><br/>
Thank you for your business.
<br/><br/>
Hilda Hensley, Branch Manager</p>
</div>
      </MuiThemeProvider>
)
}
};

export default Mission;