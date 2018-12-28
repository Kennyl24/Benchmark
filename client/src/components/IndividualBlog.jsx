import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import BlogViewer from './BlogViewer.jsx'
import LeadingBar from './LeadingBar.jsx';

class Individualblog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    console.log(this.props.location.state)
  }
  render () {
    return (
    <MuiThemeProvider>
    <LeadingBar/>
   </MuiThemeProvider>
)
}
};

export default Individualblog;