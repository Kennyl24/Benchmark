import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'; 
import Popup from "reactjs-popup";

class SecondTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div style={{positon:'absolute', top:0, bottom:0, left:0, right:0, height:'100%', width:'100%', backgroundColor:'purple' }}>
        </div>
    );
  }
}

export default SecondTest;