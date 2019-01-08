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
import MenuDrawer from './MenuDrawer.jsx';


class LeadingBar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      menu: false
    }
    this.titleClick=this.titleClick.bind(this);
    this.showMenuDrawer=this.showMenuDrawer.bind(this);
    this.resize = this.resize.bind(this);
  }
  componentWillMount(){
    if(window.innerWidth < 995){
      this.setState({
        width: false,
      });
    } else {
      this.setState({
        width: true,
      });
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

componentWillUnmount(){
    window.removeEventListener('resize', this.resize);
}

resize = () => {
  this.forceUpdate();
  if(window.innerWidth < 995){
    this.setState({
      width: false,
    });
  } else {
    this.setState({
      width: true,
    });
  }
};
  titleClick(){
    location.reload();
  }
  showMenuDrawer(){
    console.log('hello')
    this.setState({
      menu:true
    })
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
    zIndex: '999',
    height:'120px',
    // boxShadow:'none',
    position:'fixed', backgroundColor:'rgba(255,255,255, 1.0)', cursor:'auto'}}
    titleStyle={{color:'black'}}
    showMenuIconButton={true}
    iconElementLeft={<img style={{height: '100px', width: '275px', cursor:'pointer'}}
    onClick={() => window.location.href = '/home'}
    src="https://napa.benchmark.us/wp-content/uploads/sites/485/2015/08/home-banner-logo.png"/>}
    iconStyleLeft={{marginLeft:'10px'}}
    >
    { this.state.width ? 
    <div className="nav_links_container">
    <Button><Link to={{ pathname:'/home' }}className="nav-links">Home</Link></Button>   
    <Button><Link to={{ pathname: '/About' }}className="nav-links">About</Link></Button>      
    <Button><Link to={{ pathname: '/Blog' }}className="nav-links">Blog</Link></Button>                                                                                                                                                                                                                  
    <Button><Link to={{ pathname: '/Vlog' }}className="nav-links">Vlog</Link></Button>
    <Button><Link to={{ pathname: '/Reviews' }}className="nav-links">Reviews</Link></Button>  
    <Button variant="outlined" style={{marginRight:'5px', marginLeft: '10px'}} className="nav-contact"><Link to={{ pathname: '/Contact' }}className="nav-links">Contact</Link></Button>
    <Button variant="contained"style={{backgroundColor:"#242f6e", color: 'white'}} ><a href="https://hildahensley.floify.com/apply?noheaderfooter#tab_a" target="_blank">Apply Now</a></Button>
  </div>
  : 
  // <IconButton color="inherit" aria-label="Menu">
    <MenuDrawer/>
  // </IconButton>
  }
   </AppBar>
  </MuiThemeProvider>
)
}
};

export default LeadingBar;
