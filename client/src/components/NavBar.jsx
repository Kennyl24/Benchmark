import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
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
    title="Napa Valley Transmissions (LOGO)"
    showMenuIconButton={false}
    iconElementRight={<FlatButton label="707-224-5898" />}
  />
   </MuiThemeProvider>
)
}
};

export default LeadingBar;
