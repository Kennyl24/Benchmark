import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import MortgageCalc from './MortgageCalc.jsx';
import BottomNav from './BottomNav.jsx';


class Calculator extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <LeadingBar/>
        <h3 style={{marginTop:"150px"}}className="homepage-header">Mortgage Calculator</h3>
        <MortgageCalc/>
        <BottomNav/>
      </div>
)
}
};

export default Calculator;