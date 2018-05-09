import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
const phoneNumber = '7072245898'
class LeadingBar extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'7072245898'
    }
  }
  render () {
    return (
      <MuiThemeProvider>
  <AppBar
    style={{backgroundColor:'#0033cc'}}
    title="Napa Valley Transmissions"
    showMenuIconButton={false}
    iconElementRight={<FlatButton label="707-224-5898" />}
  />
    <AppBar
    // title={<span style={{ backgroundColor: '#f47023' }}><img src="https://imgur.com/WCuRL6i" alt="" /></span>}
    iconElementLeft={<img src={'https://i.imgur.com/WCuRL6i.jpg'} alt="" height='110px' width="110px"/>}
    style={{backgroundColor:'white', height:'125px'}}>
    <FlatButton primary={true} style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname:'/home' }}>Home</Link></FlatButton>                                                                                                                                                                                                                     
    <FlatButton style={{ padding: '10px', minWidth: 'none' }} ><Link to={{ pathname: '/logout' }}>About</Link></FlatButton>
    <FlatButton style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname: '/profile' }}>Services</Link></FlatButton>
    <FlatButton style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname: '/profile' }}>Galley</Link></FlatButton>
    <FlatButton style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname: '/profile' }}>Reviews</Link></FlatButton>
    <FlatButton style={{ padding: '10px', minWidth: 'none' }}><Link to={{ pathname: '/profile' }}>Contact</Link></FlatButton>
   </AppBar>
   </MuiThemeProvider>
)
}
};

export default LeadingBar;
