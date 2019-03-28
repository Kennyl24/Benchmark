import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {isMobile} from 'react-device-detect';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import { Link } from 'react-router-dom';

class Conventional extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <LeadingBar/>
        <div style={{position:'relative', top:'0px', background: isMobile ?'linear-gradient(to right bottom, #242f6e, #e0e0e0)' : 'linear-gradient(to right bottom, #242f6e, #e0e0e0)', backgroundImage: isMobile ? null :'url(https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',  backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'400px', width: '100%', marginBottom:'0px'}}>
       <div style={{paddingTop:'12%'}}>
        <h1 className="homepage-header" style={{color:'white'}}>Conventional Loans</h1>
        </div>
        </div>
        <div style={{paddingLeft:'20%', paddingRight:'20%'}} className="blog-text">
        <h1 className="homepage-header"> What Is a Conventional Mortgage or Loan?</h1>
        A conventional mortgage or conventional loan is any type of home buyer’s loan that is not offered or secured by a government entity, such as the Federal Housing Administration (FHA), the U.S. Department of Veterans Affairs (VA) or the USDA Rural Housing Service, but instead is available through or guaranteed by a private lender (banks, credit unions, mortgage companies) or the two government-sponsored enterprises, the Federal National Mortgage Association (Fannie Mae) and the Federal Home Loan Mortgage Corporation (Freddie Mac). 
        <br/>
        <br/>
        Conventional loans are often erroneously referred to as conforming mortgages or loans. While there is overlap, the two are distinct categories. A conforming mortgage is one whose underlying terms and conditions meet the funding criteria of Fannie Mae and Freddie Mac. Chief among those is a dollar limit, set annually by the Federal Housing Finance Agency (FHFA): In 2019, in most of the continental U.S., a loan must not exceed $484,350. In high-cost counties the maximum loan amount is $709,950 for 2019. So while all conforming loans are conventional, not all conventional loans qualify as conforming. 
        <br/>
        <br/>
        A jumbo mortgage of $800,000, for example, is a conventional mortgage but not a conforming mortgage – because it surpasses the amount that would allow it to be backed by Fannie Mae or Freddie Mac. Currently, conventional mortgages represent around two-thirds of the homeowners’ loans issued in the U.S. 
        <br/>
        <h1 className="homepage-header"> How a Conventional Mortgage or Loan Works</h1>
        <p>Since 2007, lenders have tightened the qualifications for loans – “no verification” and “no down payment” mortgages have gone with the wind, for example – but overall most of the basic requirements haven’t changed. Potential borrowers need to complete an official mortgage application (and usually pay an application fee), then supply the lender with the necessary documents to perform an extensive check on their background, credit history and current credit score.
      <br/>
      <br/>
        <span style={{fontWeight:'bold'}}>Some of the documents required will be:</span></p>
        <ul>
        <li>Proof of income : These documents will include but may not be limited to:thirty days of pay stubs that show income as well as year-to-date income
        </li>
        
        <li>Two years of federal tax returns</li>
        <li>Sixty days or a quarterly statement of all asset accounts, including your checking, savings and any investment accounts</li>
        <li>Two years of W-2 statements</li>
        <li>Employment verification.</li>
        <li>Lenders today want to make sure they are loaning only to borrowers with a stable work history. Your lender will not only want to see your pay stubs but may also call your employer to verify that you are still employed and to check your salary. If you have recently changed jobs, a lender may want to contact your previous employer. Self-employed borrowers will need to provide significant additional paperwork concerning their business and income.</li>
 

        <li>Other documentation. Your lender will need to copy your driver’s license or state ID card and will need your Social Security number and your signature, allowing the lender to pull your credit report</li>
 
          </ul>
        </div>
        <h5 style={{textAlign:'center'}}>If you think conventional might be right for you, or have any questions, feel free to <span><Link to={{ pathname:'/contact' }} style={{color:'inherit', textDecortation:'underline'}}>contact us today!</Link></span></h5>
        <BottomNav/>
        </MuiThemeProvider>
    )
  }
}

export default Conventional;