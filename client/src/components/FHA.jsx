import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {isMobile} from 'react-device-detect';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import { Link } from 'react-router-dom';

class FHA extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <LeadingBar/>
        <div style={{position:'relative', top:'0px', background: isMobile ?'linear-gradient(to right bottom, #242f6e, #e0e0e0)' : 'linear-gradient(to right bottom, #242f6e, #e0e0e0)', backgroundImage: isMobile ? null :'url(https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',  backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'400px', width: '100%', marginBottom:'0px'}}>
       <div style={{paddingTop:'12%'}}>
        <h1 className="homepage-header" style={{color:'white'}}>FHA Loans</h1>
        </div>
        </div>
        <div style={{marginLeft:'20%', marginRight:'20%'}}>
        <h1 className="homepage-header">What is an FHA loan?</h1>
        <p className="blog-text">
        FHA stands for Federal Housing Administration. The word “federal” in there should tell you that this is a government backed product. These loans are managed by the Department of Housing and Urban Development (HUD). Many people believe only first-time buyers can obtain an FHA loan. This is not true. FHA loans are available to all types of borrowers. 
<br/>
<br/>
With FHA loans, the government insures the lender against any losses that might result from a borrower defaulting. Now, before you try to get a multi-million-dollar property with an FHA loan, realize there are borrowing limits. FHA sets single-family loan limits at 115% of median house prices for the area. Talk with your mortgage banker to see how this affects you based on your location. 
<br/>
<br/>
What’s appealing to many about FHA loans is that you can make a low down payment (as low as 3.5% of the purchase price). Keep in mind that all FHA loans require that you pay Mortgage Insurance Premium (MIP), which will increase your monthly payment. Your mortgage banker can help you determine how long you need to keep the Mortgage Insurance.  

          </p>
        <h1 className="homepage-header">When an FHA is right for you.</h1>
       <p className="blog-modal-text" style={{marginLeft:'0%', marginRight:'0%', paddingBottom:'0%'}}> FHA loans bring home ownership into reach for buyers who might have a hard time getting approved with conventional lenders. These loans are not right for everybody, but they have several appealing features: </p>

<div className="blog-text">
<ul>
<li><span style={{fontWeight:'bold'}}>Small down payment:</span> FHA loans allow you to buy a home with a down payment as low as 3.5%.</li>

<li><span style={{fontWeight:'bold'}}>Credit:</span> Get approved with a limited credit history or problems in your credit history.</li>

<li><span style={{fontWeight:'bold'}}>Debt-to-income ratios:</span> You need reasonable debt-to-income ratios but in some cases, the debt-to-income ratio can be higher on an FHA loan than other loan products.</li>

<li><span style={{fontWeight:'bold'}}>Income Limits:</span> No minimum income is required, you just need enough income to demonstrate you can repay the loan. FHA loans are geared toward lower-income borrowers but there are no income limits.  If you have a high income, you are not disqualified.</li>

<li><span style={{fontWeight:'bold'}}>Loan Limits:</span> You can borrow up to the county loan limit where the home is located.  If you live in a high-cost area, you can borrow up to the maximum loan amount, as long as you qualify, with only 3.5% down payment.</li>
       </ul>
       </div>
       </div>
       <h5 style={{textAlign:'center'}}>If you think FHA might be right for you, or have any questions, feel free to <span><Link to={{ pathname:'/contact' }} style={{color:'inherit', textDecortation:'underline'}}>contact us today!</Link></span></h5>

        <BottomNav/>
        </MuiThemeProvider>
    )
  }
}

export default FHA;