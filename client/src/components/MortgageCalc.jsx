import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import mortgageJs from "mortgage-js"
import TextField from '@material-ui/core/TextField';
import {isMobile} from 'react-device-detect';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AmortSchedule from './AmortSchedule.jsx';
// import PieChart from 'react-minimal-pie-chart';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
let data02;
let mortgageCalculator = mortgageJs.createMortgageCalculator();
class MortgageCalc extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      price: null,
      data: false,
      interestRate: '4.5',
      loanLength: 30,
      taxRate: 1.25, 
      insuranceRate: .17, 
      monthlyPayment: null,
      numbers: false,
      mortgageInsuranceRate: 0.0,
      mortgageInsuranceRateRequired: false,
      paymentSchedule: [],
      // price: 0,
      // downPayment: '',
    }
    this.submitData = this.submitData.bind(this)
  }
  componentDidMount(){
    // console.log(mortgageCalculator.calculatePayment());
  }
  submitData(){
    console.log(this.state.downPayment / this.state.price)
    let lv = this.state.downPayment / this.state.price
    if (lv <  .05){
      this.setState({
      mortgageInsuranceRate: 3.18,
      mortgageInsuranceRateRequired: true
    });
    } else if (lv < .10){
      this.setState({
        mortgageInsuranceRate: 2.52,
        mortgageInsuranceRateRequired: true
      });
    } else if (lv < .15){
      this.setState({
        mortgageInsuranceRate: 1.75,
        mortgageInsuranceRateRequired: true
      });
    } else if (lv < .20){
      this.setState({
        mortgageInsuranceRate: .75,
        mortgageInsuranceRateRequired: true
      });
    } else {
      this.setState({
        mortgageInsuranceRateRequired: false,
        mortgageInsuranceRate: 0
      });
    }
    console.log(this.state.taxRate / 100)
    mortgageCalculator.totalPrice = this.state.price;
    mortgageCalculator.downPayment = this.state.downPayment;
    mortgageCalculator.interestRate = this.state.interestRate / 100;
    mortgageCalculator.months = this.state.loanLength * 12;
    mortgageCalculator.taxRate = this.state.taxRate / 100;
    mortgageCalculator.insuranceRate = this.state.insuranceRate / 100;
    mortgageCalculator.mortgageInsuranceRate = 0.010;
    mortgageCalculator.mortgageInsuranceEnabled = this.state.mortgageInsuranceRateRequired;
    // mortgageCalculator.mortgageInsuranceThreshold = 0.2;
    // mortgageCalculator.additionalPrincipalPayment = 100;
    let payment = mortgageCalculator.calculatePayment();
    console.log(mortgageCalculator.calculatePayment());

    this.setState({
      numbers: true, 
      payment: payment,
      paymentSchedule: payment.paymentSchedule,
     
    }, () => {
      this.setState({
        data: true,  
        data02: [
          {
            "name": "Principal & Interest",
            'label': "Principal & Interest",
            "value": parseInt(this.state.payment.total.toFixed(2))
          },
          {
            "name": "Taxes",
            "value": parseInt(this.state.payment.tax.toFixed(2))
          },
          {
            "name": "Insurance",
            "value": parseInt(this.state.payment.insurance.toFixed(2))
          },
          {
            "name": "Mortgage Insurance",
            "value": parseInt(this.state.payment.mortgageInsurance.toFixed(2))
          },
        ]
      })
      console.log(isNaN(this.state.payment.tax.toFixed(2)))
      console.log(isNaN(this.state.payment.insurance.toFixed(2)))
      window.scrollTo('500px', '200px')
    })
  }
  render () {
    return (
      <div style={{marginBottom:'50px', marginLeft: isMobile ? '10px' :'50px'}}>
        <div>
        {/* <Button> Close <Button/> */}
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Price (Purchase Price $)"
          type="number"
          name="price"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.price}
          onChange={(event) => {
            this.setState({
              price: event.target.value
            }, ()=> {
            let lv2 = this.state.downPayment / this.state.price
            if (lv2 <  .05){
              this.setState({
              mortgageInsuranceRate: 3.18,
              mortgageInsuranceRateRequired: true
            });
            } else if (lv2 < .10){
              this.setState({
                mortgageInsuranceRate: 2.52,
                mortgageInsuranceRateRequired: true
              });
            } else if (lv2 < .15){
              this.setState({
                mortgageInsuranceRate: 1.75,
                mortgageInsuranceRateRequired: true
              });
            } else if (lv2 < .20){
              this.setState({
                mortgageInsuranceRate: .75,
                mortgageInsuranceRateRequired: true
              });
            } else {
              this.setState({
                mortgageInsuranceRateRequired: false,
                mortgageInsuranceRate: 0
              });
    }
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Down Payment ($ Amount)"
          type="number"
          // name="name"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.downPayment}
          onChange={(event) => {
            this.setState({
              downPayment: event.target.value
            }, () => {
              let ltv = (this.state.downPayment / this.state.price)
              if (ltv <  .05){
                this.setState({
                mortgageInsuranceRate: 3.18,
                mortgageInsuranceRateRequired: true
              });
              } else if (ltv < .10){
                this.setState({
                  mortgageInsuranceRate: 2.52,
                  mortgageInsuranceRateRequired: true
                });
              } else if (ltv < .15){
                this.setState({
                  mortgageInsuranceRate: 1.75,
                  mortgageInsuranceRateRequired: true
                });
              } else if (ltv < .20){
                this.setState({
                  mortgageInsuranceRate: .75,
                  mortgageInsuranceRateRequired: true
                });
              } else {
                this.setState({
                  mortgageInsuranceRateRequired: false,
                  mortgageInsuranceRate: 0
                });
              }
            }, () => {
              console.log(this.state.mortgageInsuranceRate)
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Interest Rate(%)"
          type="number"
          name="Interest Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.interestRate}
          onChange={(event) => {
            this.setState({
              interestRate: event.target.value
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Loan Length (years)"
          type="number"
          name="Loan Length"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.loanLength}
          onChange={(event) => {
            this.setState({
              loanLength: event.target.value
            });
          }}
        />
         <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Tax Rate (%)"
          type="number"
          name="Tax Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.taxRate}
          onChange={(event) => {
            this.setState({
              taxRate: event.target.value
            });
          }}
        />
                 <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Insurance Rate(%)"
          type="number"
          name="Insurance Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.insuranceRate}
          onChange={(event) => {
            this.setState({
              insuranceRate: event.target.value
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Mortgage Insurance Required"
          type="boolean"
          name="Mortgage Insurance Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.mortgageInsuranceRateRequired ? 'yes' : 'no'}
          // onChange={(event) => {
          //   this.setState({
          //     mortgageInsuranceRateRequired: true
          //   });
          // }}
        /> 
         <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Mortgage Insurance Rate(%)"
          type="number"
          name="Mortgage Insurance Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.mortgageInsuranceRate}
          onChange={(event) => {
            this.setState({
              mortgageInsuranceRate: event.target.value
            });
          }}
        /> 
    <Button variant="contained" onClick={this.submitData}>Submit</Button>
    </div>
    {this.state.numbers ? 
       
    <div>
      <div style={{display:'flex', flexDirection:'row'}}>
    <h1 style={{color:'black', fontSize:'16px', marginTop:'80px', textAlign:'left', fontWeight:'200'}}>
      <span style={{paddingBottom:'20px'}}>Total Loan Amount: <span style={{color:'#00367b'}}>${this.state.payment.loanAmount}</span></span>
      <br/>
      Total Monthly Payment (Estimated): <span style={{color:'#00367b'}}> ${this.state.payment.total.toFixed(2)}</span>
      <br/>
      Principal & Interest Payment (Estimated): <span style={{color:'#00367b'}}> ${this.state.payment.paymentSchedule[0].interestPayment + this.state.payment.paymentSchedule[0].principalPayment}</span>
      <br/>
      {/* Principal Payment (Estimated): ${this.state.payment.paymentSchedule[0].principalPayment}
      <br/> */}
      Taxes Monthly (Estimated):  <span style={{color:'#00367b'}}>${this.state.payment.tax.toFixed(2)}</span>
      <br/>
      Insurance Monthly (Estimated): <span style={{color:'#00367b'}}> ${this.state.payment.insurance.toFixed(2)}</span>
      <br/>
      {this.state.payment.mortgageInsurance ? 
      <span>
      Mortgage Insurance Monthly (Estimated): <span style={{color:'#00367b'}}> ${this.state.payment.insurance.toFixed(2)}</span>
      <br/>
      </span>
       : null }
      </h1>
      {this.state.data ? 
        <ResponsiveContainer width="50%" height={250}>
      <PieChart width={730} height={250}>
  <Pie data={this.state.data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#00367a" label='name' />
</PieChart></ResponsiveContainer > : null }
      </div>
      <div style={{width:'100%'}}>
      <h1 style={{fontSize:'20px'}}>Amortization Schedule</h1>
      <div style={{textAlign:'left', display:'flex', flexDirection:'row'}}>
      <h1 style={{textAlign:'left', width:'60px', fontSize:'14px', padding:'10px', minWidth:'60px',marginRight:'10px'}}>Month</h1>
      <h1 style={{width:'60px', fontSize:'14px', padding:'10px',minWidth:'60px',marginRight:'10px'}}>Principal Payment</h1>
      <h1 style={{width:'60px', fontSize:'14px',padding:'10px', minWidth:'60px',marginRight:'10px'}}>Interest Payment</h1>
      <h1 style={{width:'60px', fontSize:'14px',padding:'10px',minWidth:'60px',marginRight:'10px'}}>Balance Remaining</h1>
        </div>
      {this.state.payment.paymentSchedule.map((month, index) => {
        return(
      // <div style={{width:' 20%', displau:'flex', flexDirection:'row'}}>
      //   <span style={{padding:'10px'}}>{month.count}.</span>
      //   <span style={{padding:'10px'}}>${month.interestPayment}</span>
      //   <span style={{padding:'10px'}}>${month.principalPayment}</span>
      //   <span style={{padding:'10px'}}>${month.balance}</span>
      // </div>
        <AmortSchedule month={month}/>
      )})}
      </div>
      {/* Total Monthly Payment(Estimated): ${this.state.payment.total}
      <br/> */}
      {/* Total Monthly Payment(Estimated): ${this.state.monthlyPayment} */}
      {/* Total Monthly Payment(Estimated): ${this.state.monthlyPayment} */}
      {/* Total Monthly Payment(Estimated): ${this.state.monthlyPayment} */}
      
   
      
       </div>
      : null}
      {/* {this.state.PaymentSchedule > 0 ?this.state.payment.paymentSchedule.map((month, index) => 
      {
        return 
        <p>Month#{month.count}</p>
      }
        // <AmortSchedule month={month}/>
       ) : null} */}
      </div>
)
}
};

export default MortgageCalc;