import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {isMobile} from 'react-device-detect';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import { Link } from 'react-router-dom';

class FirstTimeHome extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <MuiThemeProvider>
        <LeadingBar/>
        <div style={{position:'relative', top:'0px', background: isMobile ?'linear-gradient(to right bottom, #242f6e, #e0e0e0)' : 'linear-gradient(to right bottom, #242f6e, #e0e0e0)', backgroundImage: isMobile ? null :'url(https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',  backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'400px', width: '100%', marginBottom:'0px'}}>
       <div style={{paddingTop:'12%'}}>
        <h1 className="homepage-header" style={{color:'white'}}>First Time Home Buyers</h1>
        </div>
        </div>
  <div style={{marginLeft:'20%', marginRight:'20%', marginTop:'4%'}} className="blog-text">
<h5 style={{fontSize:'20px', fontWeight:'bold', textAlign:'center'}}>Purchasing a home for the first time can be confusing and overwhelming, but it doesn't have to be that way.</h5>
<br/>


There are many benefits that come with homeownership. Among those are potential tax deductions, equity accumulations, and any improvements you make to the house can help increase the value of your asset. Determining whether or not owning a home is for you will depend on several factors such as your financial situation, future plans, and lifestyle.  Homeownership can provide you and your family with an opportunity to build long-term financial security and independence.
<br/>
<br/>


 

There are many misconceptions when it comes to buying your first home. <span style={{fontWeight:'bold'}}> One of the biggest misconceptions is that you need to put 20% down when in actuality there are many low down payment loan programs available such as: </span>
<br/>
<br/>
<div style={{marginLeft:'5%'}}>
No money down programs available through USDA & VA for the qualified borrower(s). 
<br/>
Conventional loan products are available with as little as 3% down. <br/>
Gift funds are allowed for down payment.<br/>
Lender paid mortgage insurance options available with qualifying products.<br/>
Non-occupant co-signers allowed on qualified FHA and conventional loans.<br/>
 
</div>
 

 
<br/>
<br/>

There are also wonderful down payment assistance programs available. Some of the more common down payment assistance programs are:

 
<br/>
<span style={{color:'blue'}}>
<a href="http://www.cityofnapa.org/200/Homeownership-Compradores-de-Casa" >City of Napa Down Payment Assistance Program:</a>
 
<br/>
<a href="https://www.countyofnapa.org/520/Proximity-Housing-Homebuyers-Assistance-" >Napa County Proximity Housing Program:</a>

 
<br/>
<a href="https://www.calhfa.ca.gov/" >California Housing Financing Agency - CalHFA:</a>



 
<br/>
<a href="http://www.gsfahome.org/programs/dpa/overview.shtml" >Golden State Finance Authority – GSFA</a>


<br/>
<a href="Also, Check out this tax savings calculator:">http://calculators.freddiemac.com/response/lf-freddiemac/calc/home08</a>
</span>
</div>

<h5 style={{textAlign:'center'}}>If you are thinking about buying your first home, or have any questions, feel free to <span><Link to={{ pathname:'/contact' }} style={{color:'inherit', textDecortation:'underline'}}>contact us today!</Link></span></h5>
        <BottomNav/>
        </MuiThemeProvider>
    )
  }
}

export default FirstTimeHome;