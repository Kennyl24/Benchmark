import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { SocialIcon } from 'react-social-icons';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

class Individual extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
    this.moused = this.moused.bind(this);
  }
  moused(){
    this.setState({
      hovered: !this.state.hovered
    })
  }
  render () {
    return (
    <MuiThemeProvider>
    <div className="individual-modal" onMouseLeave={this.moused}>
        <div style={{flexDirection: 'row'}}>
    <img src={this.props.individual.image} className="modal-blog-image"style={{width: '35%', height:'100%'}}/>
    <div>
    <p style={{fontSize:'24px', fontWeight:'600'}}>{this.props.individual.name}</p>
    <p style={{fontSize:'18px', fontWeight:'500'}}>{this.props.individual.title}</p>
    <p  style={{padding:'20px'}}>{this.props.individual.about}</p>
    <div style={{display:'flex', flexDirection:'row'}}>
    <a href={'mailto:' + this.props.individual.email} style={{color:'black', marginTop:'10px',}}> 
    <Email style={{marginRight:'15px'}} network="email" color="white"/>
    </a>
    <p style={{padding:'0px'}}>{this.props.individual.email}&nbsp;&nbsp;</p>
    <a href="tel:(707) 254-8891" style={{color:'black', marginTop:'10px', height:'200%'}}>
    <Phone fill="blue"/>
    </a>
    
    <p style={{padding:'0px'}}>{this.props.individual.phone}</p>&nbsp;&nbsp;
    <p style={{padding:'0px'}}>{this.props.individual.nmls ? 'NMLS# ' + this.props.individual.nmls : null}</p>
    </div>
    </div>
    </div>
      </div>
   </MuiThemeProvider>
)
}
};

export default Individual;