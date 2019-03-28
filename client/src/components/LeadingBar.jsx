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
      opacity: 0.6, 
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
      showServiceMenu: false,
      serviceBackground: 'transparent',
      serviceColor: 'rgb(72, 72, 72)',
      blogCurrentPage: false,
      aboutCurrentPage: false,
      serviceCurrentPage: false,
    }
    this.titleClick=this.titleClick.bind(this);
    this.showMenuDrawer=this.showMenuDrawer.bind(this);
    this.resize = this.resize.bind(this);
    this.showServiceMenu = this.showServiceMenu.bind(this);
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
    if((window.location.href.indexOf('About') > -1) || window.location.href.indexOf('Reviews') > -1 ){
        this.setState({
          aboutBackground:'rgba(36,	47,	110, .8)',
          aboutColor:'white'
        });
      } else if((window.location.href.indexOf('Blog') > -1) || (window.location.href.indexOf('blogs') > -1) || (window.location.href.indexOf('Vlog') > -1)){
          this.setState({
            blogCurrentPage: true,
            blogBackground:'rgba(36,	47,	110, .8)',
            blogColor:'white'
          });
         } else if(window.location.href.indexOf('contact') > -1){
                this.setState({
                  contactBackground:'rgba(36,	47,	110, .8)',
                  contactColor:'white'
            });
          } else if((window.location.href.indexOf('VA') > -1) ||(window.location.href.indexOf('first-time-home-buyer') > -1) 
        || (window.location.href.indexOf('FHA') > -1) || (window.location.href.indexOf('Refinance') > -1)
        || (window.location.href.indexOf('More') > -1) || (window.location.href.indexOf('Conventional') > -1)
        ) {
            this.setState({
              serviceBackground:'rgba(36,	47,	110, .8)',
              serviceColor:'white'
        });
          } else if(window.location.href.indexOf('home') >= -1){
              console.log('home')
              this.setState({
                homeBackground:'rgba(36,	47,	110, .8)',
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
        });
      } else if(isTop === true){
        this.setState({ 
          isTop: true, 
          opacity: 0.6,
      });
      }
    });
  }

componentWillUnmount(){
    window.removeEventListener('resize', this.resize);
}

resize = () => {
  this.forceUpdate();
  if(window.innerWidth < 1070){
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
  showServiceMenu(){
    this.setState({
      showServiceMenu: true
    })
  }
  render () {
    return (
      <MuiThemeProvider>

    <AppBar
    style={{    
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
    <a href="/home" className="nav-links" style={{backgroundColor:this.state.homeBackground, color:this.state.homeColor}}
    >Home</a>
    {/* <a href="/About" className="nav-links"style={{backgroundColor:this.state.aboutBackground, color:this.state.aboutColor}}>About</a> */}
    {/* <a href="/Blog" className="nav-links"style={{backgroundColor:this.state.blogBackground, color:this.state.blogColor}}>Blog</a> */}
    {/* <a href="/Blog" className="nav-links"style={{backgroundColor:this.state.blogBackground, color:this.state.blogColor}}>Services</a> */}
    {/* <span>
    <a onMouseEnter={this.showServiceMenu} onMouseLeave={this.showServiceMenu}className="nav-links-dropdown">Services
    </a>
   { this.state.showServiceMenu ? 
      <span className="menu">
      <a> Menu item 1 </a>
      <a> Menu item 2 </a>
      <a> Menu item 3 </a>
    </span>: null }
    </span> */}
  <div class="dropdown"
  onMouseEnter={()=>{
    console.log('abouting')
      this.setState({
        aboutBackground: 'rgba(36,	47,	110, .8)',
        aboutColor: 'white',
      })}}
      onMouseLeave={ () => {
        if(!this.state.blogCurrentPage){
        this.setState({
          aboutBackground:'transparent',
          aboutColor: 'rgb(72, 72, 72)'
        })
    } else {
      null
    }
    }
  }
  >
  <button class="dropbtn" style={{backgroundColor: this.state.onAbout ? null : this.state.aboutBackground, color:this.state.aboutColor, cursor:'pointer'}}
  onClick={() => window.location.href = '/About'}
  >About</button>
  <div class="dropdown-content">
    <a href="/About" >About Us</a>
    <a href="/Reviews" >Reviews</a>
  </div>
</div>
    <div class="dropdown"
      onMouseEnter={()=>{
    
        console.log('abouting')
          this.setState({
            serviceBackground: 'rgba(36,	47,	110, .8)',
            serviceColor: 'white',
          })}}
          onMouseLeave={ () => {
            if(!this.state.blogCurrentPage){
            this.setState({
              serviceBackground:'transparent',
              serviceColor: 'rgb(72, 72, 72)'
            })
          } else {
            null
          }
        }
      }
    >
  <button class="dropbtn" style={{backgroundColor:this.state.serviceBackground, cursor:'pointer', color:this.state.serviceColor}}
  onClick={() => window.location.href = '/VA'}
  >Services</button>
  <div class="dropdown-content">
    <a href="/VA" style={{fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important'}}>Va Loans</a>
    <a href="/FHA">FHA</a>
    <a href="/Conventional">Conventional</a>
    <a href="/Refinance">Refinance</a>
    <a href="/first-time-home-buyer">First Time Buyers</a>
    <a href="/More-services">More</a>
  </div>
</div>
    </div>
    {/* <img style={{height:'100px', width:'100px'}}src="https://napa.benchmark.us/wp-content/uploads/sites/485/2015/08/home-banner-logo.png"/> */}
    <div className="nav_links_container">
    <div class="dropdown"
       onMouseEnter={()=>{
        console.log('abouting')
          this.setState({
            blogBackground: 'rgba(36,	47,	110, .8)',
            blogColor: 'white',
          })}}
          onMouseLeave={ () => {
            if(!this.state.blogCurrentPage){
            this.setState({
              blogBackground:'transparent',
              blogColor: 'rgb(72, 72, 72)'
            })
          } else {
            null
          }
        }
      }
    >
  <button class="dropbtn" style={{width:'100%'}} style={{backgroundColor:this.state.blogBackground, color:this.state.blogColor, cursor:'pointer'}}
onClick={() => window.location.href = '/Blog'}
  >Mortgage Lending 101</button>
  <div class="dropdown-content">
    <a href="/Blog" >Blog</a>
    <a href="/Vlog" >Vlog</a>
  </div>
</div>
    {/* <a href="/Vlog" className="nav-links"style={{backgroundColor:this.state.vlogBackground, color:this.state.vlogColor}}>Vlog</a> */}
    {/* <a href="/Reviews" className="nav-links"style={{backgroundColor:this.state.reviewBackground, color:this.state.reviewColor}}>Reviews</a> */}
    <a href="/Contact" className="nav-links" style={{backgroundColor:this.state.contactBackground, color:this.state.contactColor}}>Contact</a>
    
    <Button onClick={() => window.open('https://hildahensley.floify.com/apply?noheaderfooter#tab_a', '_blank')} style={{marginTop:'0%', color: 'white', borderRadius: 2}} size="large" variant="outlined"><a style={{color:'#242f6e'}} className="applybutton" 
    
    >Apply Now!</a></Button>
    {/* <a href="https://hildahensley.floify.com/apply?noheaderfooter#tab_a" className="nav-links">Apply</a> */}
    {/* <Button><Link to={{ pathname:'/home' }}className="nav-links">Home</Link></Button>   
    <Button><Link to={{ pathname: '/About' }}className="nav-links">About</Link></Button>      
    <Button><Link to={{ pathname: '/Blog' }}className="nav-links">Blog</Link></Button>                                                                                                                                                                                                                  
    <Button><Link to={{ pathname: '/Vlog' }}className="nav-links">Vlog</Link></Button>
    <Button><Link to={{ pathname: '/Reviews' }}className="nav-links">Reviews</Link></Button>   */}
    {/* <Button variant="outlined" style={{marginRight:'5px', marginLeft: '10px'}} className="nav-contact"><a style={{color:'black'}}href='/Contact' >Contact</a></Button> */}
    {/* <Button variant="contained"style={{backgroundColor:"#242f6e", color: 'white'}} ><a href="https://hildahensley.floify.com/apply?noheaderfooter#tab_a" target="_blank">Apply Now</a></Button> */}
  </div>
  {/* <Button style={{position: 'absolute', right:'1%'}}onClick={() => window.open('https://hildahensley.floify.com/apply?noheaderfooter#tab_a', '_blank')} style={{color: 'white', borderRadius: 2, marginTop:'16%'}} size="large" variant="outlined"><a style={{color:'#242f6e'}} className="applybutton" 
    
    >Apply Now!</a></Button> */}
  </span>
  /* <span style={{position:'fixed', top:'40px', right:'20px'}}>
  <Button style={{marginTop:'2%', color: 'white', borderRadius: 2}} size="large" variant="outlined"><a style={{color:'#242f6e'}}href="/Contact" className="applybutton" >Apply Now!</a></Button>
  </span> */
  
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
