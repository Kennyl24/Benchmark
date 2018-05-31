import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'; 
const customContentStyle = {
  width: '70%',
  height:'70%',
  maxHeight: 'none',
  maxWidth: 'none',
}
class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:true
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
  render() {
    return (
      <MuiThemeProvider>
      <div >
        <Dialog
          bodyClassName="image-modal_body"
          bodyStyle={{backgroundImage:`url(${this.props.currentImage})`,
          backgroundSize: 'cover',
          overflow: 'hidden',
        }}
          contentStyle={customContentStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <div className="image-modal-text-container">
        <p className="image-modal-text">
        {/* {this.props.curren} */}
        This image reresents something about Marty, I am going to keep typing just to fill up space and get an idea of how much space to use. 
        </p>
        </div>
        {/* <Paper rounded={true} zDepth={4} style={{marginLeft:'175px', marginTop:'220px', backgroundColor:'none', opacity:'0.8', maxWidth: '170px'}}>
          HI
        </Paper> */}
        </Dialog>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default ImageModal;