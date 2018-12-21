import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import LeadingBar from './LeadingBar.jsx';
import Paper from 'material-ui/Paper';

const style = {
  height: '607px',
  width: '30%',
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
    }
    this.test=this.test.bind(this);
    this.stopTimer=this.stopTimer.bind(this);
    this.startTimer=this.startTimer.bind(this);
    this.displayNext=this.displayNext.bind(this);
    this.displayNextClick=this.displayNextClick.bind(this);
    this.displayPrevious=this.displayPrevious.bind(this);
    this.writeText = this.writeText.bind(this);
  }
  componentDidMount(){
    this.startTimer();
    this.writeText('Welcome Home', 100);
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
  test(){
    console.log('hello')
  }
  writeText(message){
    for(let i=0; i<message.length;i++){
      setTimeout(() => {
      this.setState({
        currentText: this.state.currentText += message[i],
      });
      }, 100  * i);
    }
}

  render () {
    return (
  <MuiThemeProvider>
   <div style={{position:'relative', top:'113px', backgroundImage: 'url(https://images.pexels.com/photos/792034/pexels-photo-792034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'700px', width: '100%', marginBottom:'10px'}}>
   <div style={{top: '10%', position: 'relative', marginLeft:'15%', maxWidth:'30%'}}>
   <div style={{ fontFamily: 'Apple Chancery, cursive', fontSize: '60px', textAlign:'center', color:'#242f6e'}}>
     {this.state.currentText ? this.state.currentText : null}
  </div>
  <p style={{fontFamily: 'Comic Sans MS", cursive, sans-serif', textAlign:'center', margin:'auto', padding:'25px 20% 0% 20%', color: 'white', fontSize: '22px', maxWidth: '600px', lineHeight:'1.6', textShadow: '1px 1px black'}}>
    Want to buy your dream home? Let your team of Home Financial Experts provide clear options and advice to help you make your dream home a reality! 
    {/* Your local napa valley mortgage lenders, we are a team of Home Financial Experts, we provide clear options and advice to help buyers make confident mortgage decisions */}
      </p>
    <div style={{marginTop: '5%', display: 'flex', justifyContent:'center', padding: '15px'}}>
    
    <Button style={{backgroundColor:"#242f6e", color: 'white', borderRadius: 25}} size="large" variant="contained">
    <a href="https://napa.benchmark.us/apply/" target="_blank">Apply Now</a>
    </Button>
    </div>
    {/* <li><Button><Link to={{ pathname: '/Reviews' }}className="bottomnav-links">Contact</Link></Button>  </li> */}
    <Link to={{ pathname: '/Contact' }}className="bottomnav-links"> <p style={{fontFamily: 'plexeina-regular,Helvetica,sans-serif', cursor:'pointer',textAlign:'center', margin:'auto', padding:'25px 20% 0% 20%', color: 'white', fontSize: '16px', maxWidth: '400px', textDecoration:'underline'}}>
    Speak with a Financial Expert Directly.
      </p></Link>
    </div>
   </div>
   </MuiThemeProvider>
)
}
};

export default FrontPictures;