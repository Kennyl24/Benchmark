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
import {isMobile} from 'react-device-detect';
const coreValues = [
  {
    name: 'Relationship', 
    description: 'At Benchmark, we place our relationships above all other things—relationships come first; all other things are secondary. Our business is founded on preserving and strengthening all current and future relationships, which are the backbone of our company. Every person we choose to align with is thoughtfully and strategically selected. The Columns of Relationships are Honesty, Loyalty, Empathy, and Commitment.',
    color: '#242f6e',
    icon:'https://img.icons8.com/nolan/64/000000/trust.png'
  },
  {
    name: 'Positive Attitude', 
    description: 'Benchmark Mortgage has made a decisive commitment to conduct ourselves with a positive attitude in all areas of our lives. we say it like this: When you reach the door to our office, walk in with a great attitude. We maintain that Attitude is everything, and it either attracts or repels. The columns of Positive Attitude are Belief, Passion, Confidence, Simplicity, and Enthusiasm.',
    color: '#c8c2c2',
    icon:'https://img.icons8.com/nolan/64/000000/joyent.png',
  },
  {
    name: 'Dynamic', 
    description: 'Dynamism is the twin engines of Benchmark Mortgage - drawing from creativity and innovation. It is our edge, and sets us apart from the pack.  The pillars of dynamic are innovativeness, creativity, adaptability, marketability, and daring',
    color: '#c8c2c2',
    icon:'https://img.icons8.com/nolan/64/000000/synchronize.png',
  },
  {
    name: 'Success', 
    description: 'We strive to be succesful with every relationship, goal, and endeavor. Success is our gauge that ensures we are headed in the right direction. The pillars of success are profitability, teamwork, targeted goals, planning, and alignment',
    color: '#c8c2c2',
    icon:'https://img.icons8.com/nolan/64/000000/test-passed.png'
  },
  {
    name: 'Excellence', 
    description: 'At Benchmark Mortgage, excellence is not merely "doing things well", it is "doing things GREAT." Excellence is a way of thinking and a way of doing. The Pillars of excellence are growth, stategy, knowledge, effectivness, dedication, and efficiancy',
    color: '#242f6e',
    icon:'https://img.icons8.com/nolan/64/000000/trophy.png',
  },
]
class CoreValues extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      showMore: false,
    }
    this.showMore = this.showMore.bind(this);
  }
  showMore(){
    console.log('test');
    if(isMobile){
    } else {
    window.scroll({ 
      top: 1830, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
    }
    this.setState({
      showMore: !this.state.showMore
    })
  }
  render () {
    return (
    <MuiThemeProvider>
        <div className="service_container" style={{backgroundColor:'#fafafa'}} id="corevalues">
        <h3 className="homepage-header" style={{color:'rgb(37, 45, 114)', margin: '0', paddingTop:'2%', paddingBottom:'2%'}} > Our Core Values</h3>
        <div style={{display: 'flex', flexFlow:'row wrap', justifyContent: 'center', paddingBottom:'3%'}}>
        {coreValues.length > 0 ? coreValues.map((value, key) => 
        <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', justifyContent: 'center', width:'20%', minWidth:'250px'}}>
          <div style={{width:'100%'}}>
          <img src={value.icon} style={{width:'20%', marginLeft:'40%', paddingBottom: '10px'}} />
          </div>
          <h3 className="homepage-header" style={{ margin: '0', fontSize:'20px', color:'black', paddingBottom: '10px'}}>
          {value.name}</h3>
            <p className="value-text">
         {this.state.showMore ?  value.description : value.description.split(' ').slice(0,20).join(' ') }
        </p>
        {/* <div style={{position:'absolute', bottom:'0px'}}>  */}
        <Button onClick={this.showMore}>{this.state.showMore ? 'Read Less' : 'Read More' }</Button>
          {/* </div> */}
          </div>

        // <div className="value-card">
        // <div className="circle" style={{backgroundColor: value.color, borderColor:'black', marginTop:'2%'}}>
        // <p style={{textAlign:'center', marginTop:'35%', fontSize:'18px', color:'white'}}>{value.name}</p>
        // </div>
        // <p className="value-text">
        // {value.description}
        // </p>
        // </div>
      )
      
      : null}
        
     </div> 
     </div>
   </MuiThemeProvider>
)
}
};

export default CoreValues;
