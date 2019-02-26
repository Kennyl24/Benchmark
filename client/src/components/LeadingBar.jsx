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
      menu: false,
      isTop: true,
      opacity: 0.8, 
      homeBackground:'transparent',
      homeColor:'rgb(72, 72, 72)',
      contactColor: 'rgb(72, 72, 72)',
      contactBackground: 'transparent',
      reviewBackground:'transparent',
      reviewColor:'rgb(72, 72, 72)',
      vlogColor:'rgb(72, 72, 72)',
      vlogBackground:'transparent', 
      blogColor:'rgb(72, 72, 72)',
      blogBackground: 'transparent',
      aboutColor:'rgb(72, 72, 72)',
      aboutBackground: 'transparent',
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
    if(window.location.href.indexOf('About') > -1){
        this.setState({
          aboutBackground:'#242f6e',
          aboutColor:'white'
        });
      } else if((window.location.href.indexOf('Blog') > -1) || (window.location.href.indexOf('blogs') > -1)){
          this.setState({
            blogBackground:'#242f6e',
            blogColor:'white'
          });
        } else if(window.location.href.indexOf('Vlog') > -1){
            this.setState({
              vlogBackground:'#242f6e',
              vlogColor:'white'
            });
          } else if(window.location.href.indexOf('Reviews') > -1){
              this.setState({
                reviewBackground:'#242f6e',
                reviewColor:'white'
              });
            } else if(window.location.href.indexOf('Contact') > -1){
                this.setState({
                  contactBackground:'#242f6e',
                  contactColor:'white'
            });
          } else if(window.location.href.indexOf('home') >= -1){
              console.log('home')
              this.setState({
                homeBackground:'#242f6e',
                homeColor:'white'
            });
          }
    window.addEventListener('resize', this.resize);
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY <= 150;
      if (isTop !== this.state.isTop) {
          this.setState({ 
            isTop: !this.state.isTop, 
            opacity: 1.0,
        })
      }
    });
  }

componentWillUnmount(){
    window.removeEventListener('resize', this.resize);
}

resize = () => {
  this.forceUpdate();
  if(window.innerWidth < 1015){
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
    position:'fixed', backgroundColor:`rgba(255,255,255,${this.state.opacity})`, cursor:'auto'}}
    titleStyle={{color:'black'}}
    showMenuIconButton={true}
    iconElementLeft={
    <img style={{marginLeft: this.state.width ? '0px': '0px', height: '110px', width: '275px', cursor:'pointer'}}
    onClick={() => window.location.href = '/home'}
    src="https://i.ibb.co/q7N2pv8/teamlogo.png"/>}
    iconStyleLeft={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginRight:'0px',
      marginTop:'0px',
      marginLeft:'0px'}}
    >
    { this.state.width ? 
    <span>
    <div className="nav_links_container2">
    <a href="/home" className="nav-links" style={{backgroundColor:this.state.homeBackground, color:this.state.homeColor}}>HOME</a>
    <a href="/About" className="nav-links"style={{backgroundColor:this.state.aboutBackground, color:this.state.aboutColor}}>ABOUT</a>
    <a href="/Blog" className="nav-links"style={{backgroundColor:this.state.blogBackground, color:this.state.blogColor}}>BLOG</a>
    </div>
    {/* <img style={{height:'100px', width:'100px'}}src="https://napa.benchmark.us/wp-content/uploads/sites/485/2015/08/home-banner-logo.png"/> */}
    <div className="nav_links_container">
    <a href="/Vlog" className="nav-links"style={{backgroundColor:this.state.vlogBackground, color:this.state.vlogColor}}>VLOG</a>
    <a href="/Reviews" className="nav-links"style={{backgroundColor:this.state.reviewBackground, color:this.state.reviewColor}}>REVIEWS</a>
    <a href="/Contact" className="nav-links" style={{backgroundColor:this.state.contactBackground, color:this.state.contactColor}}>CONTACT</a>
    {/* <a href="https://hildahensley.floify.com/apply?noheaderfooter#tab_a" className="nav-links">Apply</a> */}
    {/* <Button><Link to={{ pathname:'/home' }}className="nav-links">Home</Link></Button>   
    <Button><Link to={{ pathname: '/About' }}className="nav-links">About</Link></Button>      
    <Button><Link to={{ pathname: '/Blog' }}className="nav-links">Blog</Link></Button>                                                                                                                                                                                                                  
    <Button><Link to={{ pathname: '/Vlog' }}className="nav-links">Vlog</Link></Button>
    <Button><Link to={{ pathname: '/Reviews' }}className="nav-links">Reviews</Link></Button>   */}
    {/* <Button variant="outlined" style={{marginRight:'5px', marginLeft: '10px'}} className="nav-contact"><a style={{color:'black'}}href='/Contact' >Contact</a></Button> */}
    {/* <Button variant="contained"style={{backgroundColor:"#242f6e", color: 'white'}} ><a href="https://hildahensley.floify.com/apply?noheaderfooter#tab_a" target="_blank">Apply Now</a></Button> */}
  </div>
  </span>
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
