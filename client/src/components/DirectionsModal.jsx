import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'; 
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
class DirectionsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:true,
      directions: false,
      userChoice: '',
      address: false,
      continue: true,
      address: null,
    }
    this.handleClose = this.handleClose.bind(this);
    this.directionsChoices = this.directionsChoices.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleBusinessLocation = this.handleBusinessLocation.bind(this);
    this.handleUserChoice = this.handleUserChoice.bind(this);
    this.enterAdress = this.enterAdress.bind(this);
  }
  componentDidUpdate(){

  }
  directionsChoices(){
    console.log(this.state.directions)
    this.setState({directions: !this.state.directions});
  }
  handleOpen(){
    this.setState({open: true});
  };
  enterAdress(event, newValue){
    console.log(newValue)
    this.setState({address: newValue});
  };
  handleClose(){
    this.setState({open: false});
  };
  handleUserChoice(){
    this.setState({
      address: !this.state.address
    });
  }
  handleBusinessLocation(event, value){
    this.setState({
      continue: !this.state.continue
    });
    console.log(value)
  };
  render() {
    const actions = {
      first: [
      <FlatButton
      style={{color: 'rgb(3, 0, 212)'}}
        label="Exit"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
      // style={{color: 'rgb(3, 0, 212)'}}
      label="Continue"
      disabled={this.state.continue ? true : false}
        // primary={true}
        keyboardFocused={false}
        onClick={this.directionsChoices}
      />,
    ], 
    second: [
      <FlatButton
      style={{color: 'rgb(3, 0, 212)'}}
        label="Exit"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
      style={{color: 'rgb(3, 0, 212)'}}
      label="Go Back"
        primary={true}
        keyboardFocused={false}
        onClick={this.directionsChoices}
      />,
      <FlatButton
      style={{color: 'rgb(3, 0, 212)'}}
      label="Continue"
        // primary={true}
        // keyboardFocused={false}
        onClick={this.handleUserChoice}
      />,
    ], 
  };

    return (
      <MuiThemeProvider>
      <div >
        <Dialog
          actions={!this.state.directions ? actions.first : actions.second}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          style={{verticalAlign:'middle'}}
        >
         {!this.state.directions ? 
    <RadioButtonGroup onChange={this.handleBusinessLocation} name="directions" >
      <RadioButton
        value="businessLocation"
        label="View Business Location"
      />
      <RadioButton
        value="Directions"
        label="Get Directions"
      />
           </RadioButtonGroup>
        :
      <RadioButtonGroup onChange={this.handleUserChoice} name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="light"
        label="Directions from Current Location"
      />
      <RadioButton
        value="not_light"
        label="Enter in your address"
      />
           </RadioButtonGroup>
        }
        {this.state.address ? 
        <TextField
            onChange={this.enterAdress}
            hintText="Enter Address"
          />
          : null}
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default  DirectionsModal;
