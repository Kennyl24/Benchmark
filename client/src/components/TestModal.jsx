import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'; 
class TestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:true
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.yelp = this.yelp.bind(this);
    this.callUs = this.callUs.bind(this);
    this.directions = this.directions.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    window.location = '/Home';
  };
  yelp(){
    window.location = 'https://www.yelp.com/biz/napa-valley-transmissions-napa';
  }
  directions(){
    window.location = '/Directions';
  }
  callUs() {
    window.location = 'tel:707-224-5898';
  }
  render() {
    const actions = [
      <FlatButton
      style={{color: 'rgb(3, 0, 212)'}}
        label="Continue"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
      label="Yelp"
      style={{color: 'rgb(3, 0, 212)'}}
        primary={true}
        keyboardFocused={false}
        onClick={this.yelp}
      />,
      <FlatButton
      style={{color: 'rgb(3, 0, 212)'}}
      label="directions"
        primary={true}
        keyboardFocused={false}
        onClick={this.directions}
      />,
      <FlatButton
        style={{color: 'rgb(3, 0, 212)'}}
        label="Call us"
        primary={true}
        keyboardFocused={true}
        onClick={this.callUs}
      />
    ];

    return (
      <MuiThemeProvider>
      <div style={{position:'fixed'}}>
        <Dialog
          title="Hi I'm Marty LaPrelle. Having transmission troubles?&nbsp;"
          className="modal"
          overlayClassName="modal_back"
          bodyClassName="modal_body"
          paperClassName="paper_test"
          overlayStyle={{opactiy:'0.8'}}
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <Paper rounded={true} zDepth={4} style={{marginLeft:'175px', marginTop:'220px', backgroundColor:'none', opacity:'0.8', maxWidth: '170px'}}>
        <div className="marty_intro">
          Hi I'm Marty LaPrelle. Having transmission troubles?&nbsp;
        <a className="phone_number" href="tel:707-224-5898"><br/>Call Me Today - <br/>707-224-5898</a>
          </div>
          </Paper>
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default TestModal;

