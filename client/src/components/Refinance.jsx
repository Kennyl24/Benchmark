import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {isMobile} from 'react-device-detect';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import { Link } from 'react-router-dom';

class Refinance extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <LeadingBar/>
        <div style={{position:'relative', top:'0px', background: isMobile ?'linear-gradient(to right bottom, #242f6e, #e0e0e0)' : 'linear-gradient(to right bottom, #242f6e, #e0e0e0)', backgroundImage: isMobile ? null :'url(https://images.pexels.com/photos/8556/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',  backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'400px', width: '100%', marginBottom:'0px'}}>
       <div style={{paddingTop:'12%'}}>
        <h1 className="homepage-header" style={{color:'white'}}>Refinancing</h1>
        </div>
        </div>
        <div style={{marginLeft:'20%', marginRight:'20%', marginTop:'4%'}}>
      <p className="blog-text">
        Refinancing a mortgage means replacing an existing mortgage with a new mortgage.  There are many reasons for refinancing.  A homeowner may want to obtain a lower interest rate, shorten a mortgage term, convert a loan from an adjustable rate to fixed rate, eliminate mortgage insurance or utilize their home’s equity for a variety of reasons.

 
<br/>
 
<br/>
There are costs associated with refinancing a mortgage such as appraisal, title search, lender’s title insurance and lender’s fees.  It is important to understand if the refinance is truly beneficial to the homeowner and not placing the homeowner in a less desirable situation.
 
<br/>
<br/>


<span style={{fontWeight:'bold', color: '#00367f'}}>Lower interest rate:</span>
<br/>

One of the best reasons to refinance is to lower the interest rate in comparison to the existing loan. A lower interest rate can decrease your monthly payment, increase the rate at which you build equity and save money.

 
<br/>
<br/>

<span style={{fontWeight:'bold', color: '#00367f'}}>Shortening the Loan Term:</span>
<br/>
 
Shorter loan terms can save substantial money over time by reducing the amount of interest paid on the loan.
<br/>
<br/>
 

<span style={{fontWeight:'bold', color: '#00367f'}}>Obtaining a Fixed Loan:</span>
<br/>

While many times adjustable loans may have provided a lower initial interest rate, a fixed rate may offer more security over time.  Many times the opposite can be true where low rates make it attractive to switch from a higher fixed rate mortgage to a substantially lower adjustable rate mortgage.  This option is especially attractive if someone is only staying in the home for a specific period of time and can advantage of a lower payment.
 
<br/>
<br/>


<span style={{fontWeight:'bold', color: '#00367f'}}>Eliminating Mortgage Insurance:</span>
<br/>

If you purchased your home with less than 20% down you most likely have some form of mortgage insurance.  Refinancing a home that has increased in value is a good way to eliminate or minimize the mortgage insurance payment.
 
<br/>
<br/>


<span style={{fontWeight:'bold', color: '#00367f'}}>Using a home’s equity for debt consolidation, home improvements or other investments:</span>
<br/>
 
<br/>
Of all the reasons to refinance, taking cash out of a home should be the most carefully thought out.  A home should not be used as an ATM; however, with proper planning and careful execution, taking cash out can help with debt consolidation, home improvements or even helping to fund a college education. 

<br/>


Regardless of your goals, the refinancing process is similar to when you purchased your home so be prepared to provide similar documentation. It is important to understand the break-even point on a new mortgage if you are looking for a lower rate/payment. It is critical to seek the advice of a professional who can advise you if refinancing makes sense for your particular situation. 
        </p>
        </div>
        

        <h5 style={{textAlign:'center'}}>If you think refinancing is right for you, or have any questions, feel free to <span><Link to={{ pathname:'/contact' }} style={{color:'inherit', textDecortation:'underline'}}>contact us today!</Link></span></h5>
        <div>
          <img style={{display:'block',
    margin:'auto', marginBottom: '10px'}}src="https://i.ibb.co/h15v1XF/IMG-0835.jpg"/>
        </div>
        <h1>CONGRATULATIONS YOU FOUND HIM!!</h1>
        <BottomNav/>
        </MuiThemeProvider>
    )
  }
}

export default Refinance;