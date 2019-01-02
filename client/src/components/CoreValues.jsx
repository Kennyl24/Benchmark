import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";
import TextField from '@material-ui/core/TextField';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
const coreValues = [
  {
    name: 'Success', 
    description: 'We strive to be succesful with every relationship, goal, and endeavor. Success is our gauge that ensures we are headed in the right direction. The pillars of success are profitability, teamwork, targeted goals, planning, and alignment',
    color: '#c8c2c2',
  },
  {
    name: 'Relationship', 
    description: 'At Benchmark, we place our relationships above all other things—relationships come first; all other things are secondary. Our business is founded on preserving and strengthening all current and future relationships, which are the backbone of our company. Every person we choose to align with is thoughtfully and strategically selected. The Columns of Relationships are Honesty, Loyalty, Empathy, and Commitment.',
    color: '#242f6e',
  },
  {
    name: 'Dynamic', 
    description: 'Dynamism is the twin engines of Benchmark Mortgage - drawing from creativity and innovation. It is our edge, and sets us apart from the pack.  The pillars of dynamic are innovativeness, creativity, adaptability, marketability, and daring',
    color: '#c8c2c2',
  },
  {
    name: 'Excellence', 
    description: 'At Benchmark Mortgage, excellence is not merely "doing things well", it is "doing things GREAT." Excellence is a way of thinking and a way of doing. The Pillars of excellence are growth, stategy, knowledge, effectivness, dedication, and efficiancy',
    color: '#242f6e',
  },
  {
    name: 'Positive Attitude', 
    description: 'Benchmark Mortgage has made a decisive commitment to conduct ourselves with a positive attitude in all areas of our lives. we say it like this: When you reach the door to our office, walk in with a great attitude. We maintain that Attitude is everything, and it either attracts or repels. The columns of Positive Attitude are Belief, Passion, Confidence, Simplicity, and Enthusiasm.',
    color: '#c8c2c2',
  },
]
class CoreValues extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    }
  }

  render () {
    return (
    <MuiThemeProvider>
        <div className="service_container" style={{marginTop:'0px', backgroundColor:'#fafafa'}}>
        <h3 className="homepage-header" style={{color:'#787878', margin: '0', paddingTop:'2%', paddingBottom:'2%'}} >Core Values</h3>
        <div style={{display: 'flex', flexFlow:'row wrap',   justifyContent: 'center', }}>
        {coreValues.length > 0 ? coreValues.map((value, key) => 
        // <div className="circle" style={{backgroundColor: value.color}} onClick={() => this.setState({
        //   selected: key,
        //   array: coreValues.splice(key,1)
        // })} >
        // <p style={{fontFamily: 'Comic Sans MS", cursive, sans-serif', fontWeight:'600',textAlign:'center', marginTop:'35%', fontSize:'18px', color:'white'}}>{value.name}</p>
        // </div>
        <div className="value-card">
        <div className="circle" style={{backgroundColor: value.color, borderColor:'black', marginTop:'2%'}}>
        <p style={{textAlign:'center', marginTop:'35%', fontSize:'18px', color:'white'}}>{value.name}</p>
        </div>
        <p className="value-text">
        {value.description}
        </p>
        </div>
      ): null}
        
     </div> 
     </div>
   </MuiThemeProvider>
)
}
};

export default CoreValues;
