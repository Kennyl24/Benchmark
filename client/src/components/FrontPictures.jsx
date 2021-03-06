import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import Paper from 'material-ui/Paper';
import {isMobile} from 'react-device-detect';
import newBack from './newBack.jpg';

const style = {
  height: '607px',
  width: '30%',
  verticalAlign:'top',
  display: 'inline-block',
  borderColor: 'black',
  borderTopStyle: 'solid',
  borderWidth: '5px',
  marginLeft: '33%',
  
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  // backgroundSize: 'cover',
  overflow: 'hidden', 
  // opacity: '0.2'
};
const leadImages = 
[
  // 'https://s3-media2.fl.yelpcdn.com/bphoto/ZxtOK7qQjNpu9vq8rbphiw/o.jpg',
  'https://s3-media2.fl.yelpcdn.com/bphoto/ZxtOK7qQjNpu9vq8rbphiw/o.jpg',
]
let test;
class FrontPictures extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      clicked: false,
      currentImage: leadImages[0],
      currentText: '',
      hoveringApply: false, 
      hoveringContact: false,
    }
    this.stopTimer=this.stopTimer.bind(this);
    this.startTimer=this.startTimer.bind(this);
    this.displayNext=this.displayNext.bind(this);
    this.displayNextClick=this.displayNextClick.bind(this);
    this.displayPrevious=this.displayPrevious.bind(this);
    this.writeText = this.writeText.bind(this);
    this.changeApply = this.changeApply.bind(this);
    this.changeContact = this.changeContact.bind(this);
  }
  componentDidMount(){
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
  writeText(message){
    for(let i=0; i<message.length;i++){
      setTimeout(() => {
      this.setState({
        currentText: this.state.currentText += message[i],
      });
      }, 135  * i);
    }
}
changeApply(){
  this.setState({
    hoveringApply: !this.state.hoveringApply
  });
}
changeContact(){
  this.setState({
    hoveringContact: !this.state.hoveringContact
  });
}
  render () {
    return (
  <MuiThemeProvider>
   <div style={{position:'relative', top:'00px', backgroundImage: `url(${newBack})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', backgroundPosition: '50% 50%' ,height:'750px', width: '100%', marginBottom:'0px'}}>
   <div style={{backgroundColor:'white', width:'40%', minWidth:'300px', height:'auto', position: 'absolute', top:'250px', left: isMobile? '10%' : '30%', right:'30%', display: 'flex', flexDirection: 'column', alignItems:'cetner', justifyContent:'center', borderRadius:10, paddingBottom:'25px'}}>
  <h1 className="homepage-header" style={{fontFamily:'RocketSans,Helvetica,Helvetica Neue,Arial,sans-serif', color:'#333', fontWeight:'700'}}>Purchasing a home or refinancing?</h1>
  <p style={{fontFamily: 'Comic Sans MS", cursive, sans-serif', color:'#787878', margin:'auto',  marginTop:'0%', fontSize: '20px', textAlign:'center', marginLeft:'2%', marginRight:'2%', lineHeight:'1.6'}}>
   Let the Hilda Hensley Team make your dreams a reality!
  </p>
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop:'2%', justifyContent:'center'}}>
    <Button onMouseEnter={this.changeContact} onMouseLeave={this.changeContact} onClick={ ()=> window.location.href = "/Contact"}  style={{backgroundColor: this.state.hoveringContact ? '#2b36ad' : "#242f6e", marginTop:'2%', marginRight:'4%', color: 'white', borderRadius: 5}} size="large" variant="contained">
     Contact us
    </Button>
    <Button onMouseEnter={this.changeApply} onMouseLeave={this.changeApply} onClick={() => window.open('https://hildahensley.benchmark.us/floify/', '_blank')} style={{backgroundColor:  this.state.hoveringApply ? '#2b36ad' : "#242f6e", marginTop:'2%', color: 'white', borderRadius: 5}} size="large" variant="contained">
     Apply Now
    </Button>
    </div>
    </div>
   </div>
   </MuiThemeProvider>
)
}
};

export default FrontPictures;