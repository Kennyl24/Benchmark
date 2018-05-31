import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TestModal from './TestModal.jsx';

class FrontPageModal extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
    <MuiThemeProvider>
        <TestModal/>
   </MuiThemeProvider>
)
}
};

export default FrontPageModal;