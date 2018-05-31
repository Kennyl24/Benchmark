import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import LeadingBar from './LeadingBar.jsx';
import Paper from 'material-ui/Paper';

const style = {
  height: '607px',
  width: '30%',
  textAlign: 'center',
  verticalAlign:'top',
  display: 'inline-block',
  borderColor: 'black',
  borderTopStyle: 'solid',
  borderWidth: '5px',
  marginLeft: '33%',
  // backgroundImage:'url(' + 'https://i.imgur.com/pfantZT.jpg' + ')',
  
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  // backgroundSize: 'cover',
  overflow: 'hidden', 
  // opacity: '0.2'
};
const leadImages = 
[
  'https://i.pinimg.com/originals/d9/fa/f5/d9faf59b412ef0cc520272cf63544456.jpg',
  'https://i.imgur.com/00AmaHN.jpg', 
  // 'https://i.imgur.com/SDOKZLE.jpg',
  // 'https://i.imgur.com/LlJlKTo.jpg',
  // 'https://i.imgur.com/RHYbBTL.jpg'
]
let test;
class FrontPictures extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      clicked: false,
      currentImage: leadImages[0],
    }
    this.test=this.test.bind(this);
    this.stopTimer=this.stopTimer.bind(this);
    this.startTimer=this.startTimer.bind(this);
    this.displayNext=this.displayNext.bind(this);
    this.displayNextClick=this.displayNextClick.bind(this);
    this.displayPrevious=this.displayPrevious.bind(this);
  }
  componentDidMount(){
    this.startTimer();
  }
  startTimer(){
    test = setInterval(this.displayNext,4000);
  }
  stopTimer(){
    clearInterval(test)
  }
  displayNext(){
    if(this.state.imageIndex === leadImages.length-1){
      this.setState({
        imageIndex: 0,
      });
    } else {
    this.setState({
      imageIndex: this.state.imageIndex + 1,
    });
  }
  }
  displayNextClick(){
    this.displayNext();
    this.stopTimer();
  }
  displayPrevious(){
    if(this.state.imageIndex === 0){
      this.setState({
        imageIndex: leadImages.length-1,
      });
    } else {
    this.setState({
      imageIndex: this.state.imageIndex - 1,
    });
  }
  }
  displayPreviousClick(){
    this.displayPrevious();
    this.stopTimer();
  }
  test(event){
    console.log('hello', event)
  }
  render () {
    return (
  <MuiThemeProvider>
   <div style={{backgroundColor:'white'}}>
   <img className="frontPicture" src={leadImages[this.state.imageIndex]} alt="" height='600px' width='1300px'/>
   <div className="dot-container">
   <span className="dot" onClick={this.test}></span>
   <span className="dot"></span>
   </div>
   </div>
   <i className="arrow right" onClick={this.displayNextClick}></i>
   <i className="arrow left" onClick={this.displayPrevious}></i> 
   </MuiThemeProvider>
)
}
};

export default FrontPictures;