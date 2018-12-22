import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ComingSoonModal extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className="comingsoon-modal">
        <h2 style={{marginTop:'7%'}}>COMING SOON</h2>
        <p className="blog-text" style={{textAlign:'center'}}>Our vlog is close to launching<br/>
        Be the first to know, subscribe below!
        </p>
        <div style={{display:'flex', flexDirection: 'column',
    alignItems: 'center'}}>
        <div>
        <TextField
          style={{width: '100%', height: '50px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        </div>
        <div>
        <Button variant="contained" style={{marginTop:'.5%', marginBottom: '2%',width: '100%', height: '50px', backgroundColor:"#242f6e", color: 'white'}}>
          Notify Me
      </Button>
      </div>
      </div>
        </div>
      </MuiThemeProvider>
)
}
};

export default ComingSoonModal;