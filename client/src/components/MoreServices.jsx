import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {isMobile} from 'react-device-detect';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import { Link } from 'react-router-dom';

class MoreServices extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <LeadingBar/>
        <div style={{position:'relative', top:'0px', background: isMobile ?'linear-gradient(to right bottom, #242f6e, #e0e0e0)' : 'linear-gradient(to right bottom, #242f6e, #e0e0e0)', backgroundImage: isMobile ? null :'url(https://images.pexels.com/photos/1549000/pexels-photo-1549000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',  backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'400px', width: '100%', marginBottom:'0px'}}>
       <div style={{paddingTop:'12%'}}>
        <h1 className="homepage-header" style={{color:'white'}}>More Services</h1>
        </div>
        </div>
        <h1 className="homepage-header">Can't find what you are looking for? We offer more!</h1>
<div style={{marginLeft:'20%', marginRight:'20%'}}>
<p className="blog-text">
  {/* Fixed Rate Versus Adjustable Rate Mortgages */}
One of the first decision you’ll need to make is whether you want your loan to have fixed interest rate or an adjustable interest rate. Here’s what these terms mean:
<br/>
<br/>
<span style={{fontWeight:'bold'}}>Fixed Rate Mortgage</span> – These loans have the same interest rate for the life of the loan. So if you lock in an interest rate of 5% today, you will always pay 5% interest no matter what the interest rates rise to during the terms of your loan, even if your loan term is for 30 years. As a result, your mortgage payment will not increase or decrease due to interest rate changes. This is great for budgeting and for people who like stability.
<br/>
<br/>
<span style={{fontWeight:'bold'}}>Adjustable Rate Mortgage</span> – These loans have an interest rate that will change over time, based on the current mortgage interest rate. Most adjustable rate loans have an initial period (usually 3-5 years) where the rate is stable. After that initial period, the rate will change (adjust) every year. You’ll often see adjustable rate mortgage called things like a “3/1 ARM” or a “5/1 ARM.” The first number indicates the initial rate lock period in years. The second number indicates how often after that initial rate lock period the rate will change (again in years). And “ARM” stands for adjustable rate mortgage. Because the initial interest rate during the lock period is often lower than traditional fixed rate products, these loans are attractive to people who are certain they will not stay in the home for longer than the initial lock time.
          </p>
          </div>
        <h5 style={{textAlign:'center'}}>
          More services include, but are not limited to: </h5>
          <br/>
          <br/>
          <div className="blog-text" style={{marginLeft:'25%', marginRight:'25%'}}>
          <ul>
          <li>Reverse Mortgages</li>
          <li>Jumbo / Conforming Loans</li>
          <li>Realtor Refferals</li>
          <li>Financial Experts: CPA, Financial Advisors, etc.</li>
          <li>Legal advice, such as Trust and Estate Attornys</li>
          <li>Contractors</li>
      </ul>
      </div>
        
        <h1 className="homepage-header"><span><Link to={{ pathname:'/contact' }} style={{color:'inherit', textDecortation:'underline'}}>Contact us today to find out where else we can help you!</Link></span></h1>
        <BottomNav/>
        </MuiThemeProvider>
    )
  }
}

export default MoreServices;