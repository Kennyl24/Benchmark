import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
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
         } else if((window.location.href.indexOf('contact') > -1) || (window.location.href.indexOf('Contact') > -1)){
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
    <a href="/home" className="nav-links" style={{borderBottom: `1px solid ${this.state.homeBackground}`}}
    >Home</a>
  <div className="dropdown"
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
  <button class="dropbtn" style={{borderBottom: `1px solid ${this.state.aboutBackground}`, backgroundColor: this.state.onAbout ? null : null, cursor:'pointer'}}
  onClick={() => window.location.href = '/About'}
  >About</button>
  <div className="dropdown-content">
    <a href="/About" >About Us</a>
    <a href="/Reviews" >Reviews</a>
  </div>
</div>
    <div className="dropdown"
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
  <button className="dropbtn" style={{borderBottom: `1px solid ${this.state.serviceBackground}`, cursor:'pointer'}}
  onClick={() => window.location.href = '/VA'}
  >Services</button>
  <div className="dropdown-content">
    <a href="/VA" style={{fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important'}}>Va Loans</a>
    <a href="/FHA">FHA</a>
    <a href="/Conventional">Conventional</a>
    <a href="/Refinance">Refinance</a>
    <a href="/first-time-home-buyer">First Time Buyers</a>
    <a href="/More-services">More</a>
  </div>
</div>
    </div>
    <div className="nav_links_container">
    <div className="dropdown"
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
  <button className="dropbtn" style={{width:'100%'}} style={{borderBottom: `1px solid ${this.state.blogBackground}`, cursor:'pointer'}}
onClick={() => window.location.href = '/Blog'}
  >Mortgage Lending 101</button>
  <div className="dropdown-content">
    <a href="/Blog" >Blog</a>
    <a href="/Vlog" >Vlog</a>
  </div>
</div>
   <a href="/Contact" className="nav-links" style={{borderBottom: `1px solid ${this.state.contactBackground}`}}>Contact</a>
    
    <Button onClick={() => window.open('https://hildahensley.floify.com/apply?noheaderfooter#tab_a', '_blank')} style={{marginTop:'0%', color: 'white', borderRadius: 2}} size="large" variant="outlined"><a style={{color:'#242f6e'}} className="applybutton" 
    
    >Apply Now!</a></Button>
  </div>
  </span>
  : 
    <MenuDrawer/>
  }
   </AppBar>
  </MuiThemeProvider>
)
}
};

export default LeadingBar;
