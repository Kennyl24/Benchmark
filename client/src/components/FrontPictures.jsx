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
      }, 135  * i);
    }
}

  render () {
    return (
  <MuiThemeProvider>
   <div style={{position:'relative', top:'40px', backgroundImage: 'url(https://i.ibb.co/MBTBvrM/welcome-home.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height:'auto', width: '100%', marginBottom:'0px'}}>
   <div style={{top: '7%', position: 'relative', marginLeft:'7%', maxWidth:'30%', display: 'flex', flexDirection: 'column', alignItems:'cetner', justifyContent:'center',}}>
   <div style={{ fontFamily: 'Apple Chancery, cursive', fontSize: '350%', color:'#242f6e', paddingTop:'6%', textShadow: '1px 1px black' }}>
     {this.state.currentText ? this.state.currentText : null}
  </div>
  <p style={{fontFamily: 'Comic Sans MS", cursive, sans-serif', margin:'auto',  marginTop:'4%', color: 'white', fontSize: '18px', minWidth:'180px', maxWidth: '600px', lineHeight:'1.6', textShadow: '1px 1px black'}}>
    Want to buy your Napa Valley dream home? Let your team of Home Financial Experts provide clear options and advice to help you make your dream home a reality! 
    <Link to={{ pathname: '/Contact' }}className="bottomnav-links"> <span style={{fontFamily: 'plexeina-regular,Helvetica,sans-serif', cursor:'pointer', padding:'0px 20% 0% 0%', color: 'white', fontSize: '16px', maxWidth: '400px', textDecoration:'underline'}}>
    Speak with a Mortgage Expert Today!
      </span></Link>
    {/* Your local napa valley mortgage lenders, we are a team of Home Financial Experts, we provide clear options and advice to help buyers make confident mortgage decisions */}
      </p>
    {/* <div style={{marginTop: '5%', display: 'flex', justifyContent:'center', padding: '15px'}}> */}
    <div style={{marginTop:'9%', justifyContent:'center'}}>
    <Button style={{backgroundColor:"#242f6e", color: 'white', borderRadius: 25}} size="large" variant="contained">
    <a href="https://hildahensley.floify.com/apply?noheaderfooter#tab_a" target="_blank">Apply Now</a>
    </Button>
    </div>
    <div style={{paddingBottom:'20%', marginTop:'5%'}}>
    {/* <li><Button><Link to={{ pathname: '/Reviews' }}className="bottomnav-links">Contact</Link></Button>  </li> */}
    {/* <Link to={{ pathname: '/Contact' }}className="bottomnav-links"> <p style={{fontFamily: 'plexeina-regular,Helvetica,sans-serif', cursor:'pointer', padding:'0px 20% 0% 0%', color: 'white', fontSize: '16px', maxWidth: '400px', textDecoration:'underline'}}>
    Speak with a Mortgage Expert Today!
      </p></Link> */}
      </div>
    </div>
   </div>
   </MuiThemeProvider>
)
}
};

export default FrontPictures;