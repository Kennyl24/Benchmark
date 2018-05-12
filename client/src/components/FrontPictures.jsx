import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import LeadingBar from './LeadingBar.jsx';
import Paper from 'material-ui/Paper';
import PictureDesc from './PictureDesc.jsx';

const style = {
  height: '100%',
  width: '30%',
  textAlign: 'center',
  verticalAlign:'top',
  display: 'inline-block',
  borderColor: 'black',
  borderTopStyle: 'solid',
  borderWidth: '5px',
  backgroundImage:'url(' + 'https://i.imgur.com/7YNAzkv.jpg' + ')',
  
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  // backgroundSize: 'cover',
  overflow: 'hidden', 
  opacity: '0.2'
};
const leadImages = 
[
  'https://i.imgur.com/00AmaHN.jpg', 
  'https://i.imgur.com/SDOKZLE.jpg',
  'https://i.imgur.com/LlJlKTo.jpg',
  'https://i.imgur.com/RHYbBTL.jpg'
]
let test;
class FrontPictures extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      clicked: false,
    }
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
  render () {
    return (
  <MuiThemeProvider>
   <div style={{backgroundColor:'white'}}>
   <Paper style={style} zDepth={5} rounded={false}>
   <h1>NAPA VALLEY TRANSMISSIONS</h1>
   {/* <div
   style={{paddingTop:'3%', paddingBottom:'4%'}}>
   <img src='https://i.imgur.com/7YNAzkv.jpg' alt="" height='100px' width='100px'/>
   </div> */}
   <div className="description">
   Marty and Susie Laprelle have owned and operated Napa Valley Transmissions since 1992. Marty decided to open his own business, so he could continue to grow personally and become the best that he can be. 26+ years later, Marty has continually served the Napa Valley with any transmission needs. Including working on car fleets for local businesses, family cars, muscle cars, large 4x4 trucks, and not to mention, some drag racing cars as well!
   Marty and Susie Laprelle have owned and operated Napa Valley Transmissions since 1992. Marty decided
   Napa Valley Transmissions since 1992. Marty decided    
   </div>
   </Paper>
   <img className="frontPicture" src={leadImages[this.state.imageIndex]} alt="" height='600px' width='70%'/>
   {/* <PictureDesc/> */}
   </div>
   <i class="arrow right" onClick={this.displayNextClick}></i>
   <i class="arrow left" onClick={this.displayPrevious}></i>
   </MuiThemeProvider>
)
}
};

export default FrontPictures;