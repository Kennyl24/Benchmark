import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import TestModal from './TestModal.jsx'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class LeadingBar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    }
    this.titleClick=this.titleClick.bind(this);
  }
  componentDidUpdate(){
    console.log(window.innerWidth)
  }
  titleClick(){
    location.reload();
  }
  render () {
    return (
      <MuiThemeProvider>

    <AppBar
    style={{    
    overflowY:'scroll', 
    top: '0px',
    left:'0px',
    right:'0px',
    zIndex: '9999',
    height:'120px',
    position:'fixed', backgroundColor:'rgba(255,255,255)', cursor:'auto'}}
    titleStyle={{color:'black'}}
    showMenuIconButton={true}
    iconElementLeft={<img style={{height: '100px', width: '275px'}}src="https://napa.benchmark.us/wp-content/uploads/sites/485/2015/08/home-banner-logo.png"/>}
    iconStyleLeft={{marginLeft:'10px'}}
    >
    { this.state.width > 600 ? 
    <div className="nav_links_container">
    <Button><Link to={{ pathname:'/home' }}className="nav-links">Home</Link></Button>   
    <Button><Link to={{ pathname: '/About' }}className="nav-links">About</Link></Button>      
    <Button><Link to={{ pathname: '/Blog' }}className="nav-links">Blog</Link></Button>                                                                                                                                                                                                                  
    <Button><Link to={{ pathname: '/Vlog' }}className="nav-links">Vlog</Link></Button>
    <Button><Link to={{ pathname: '/Reviews' }}className="nav-links">Reviews</Link></Button>  
    <Button variant="outlined" style={{marginRight:'5px', marginLeft: '10px'}} className="nav-contact"><Link to={{ pathname: '/Contact' }}className="nav-links">Contact</Link></Button>
    <Button variant="contained"style={{backgroundColor:"#242f6e", color: 'white'}} ><a href="https://napa.benchmark.us/apply/" target="_blank">Apply Now</a></Button>
  </div>
  : 
  <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
  </IconButton>
  }
   </AppBar>
   </MuiThemeProvider>
)
}
};

export default LeadingBar;
