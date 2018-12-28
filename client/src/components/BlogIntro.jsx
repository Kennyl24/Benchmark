import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";
import TextField from '@material-ui/core/TextField';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';


class BlogIntro extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      email: null
    }
    this.submitted = this.submitted.bind(this);
  }
  submitted(){
    axios.post('/Email', {
      email: this.state.email,
    })
    .then( (response) =>  {
      setTimeout(() => {
      }, 500);
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
  }
  render () {
    return (
    <MuiThemeProvider>
    <div style={{marginTop:'120px', height:'70vh', background: 'linear-gradient(to right bottom, #242f6e, #e0e0e0)', marginBottom: '50px'}}>
    {/* <img src='https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'height="400px"width="100%"/> */}
    <div  style={{textAlign: 'center', paddingTop: '5%', color: 'white', display:'flex',
    flexDirection:'column', justifyContent:'center', alignItems:'center'
    }}>
      <h1 style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important'}}>
        Mortgage Lender Blog
        </h1>
        <p style={{fontFamily:'Graphik Web,Helvetica,sans-serif!important', fontSize:'22px'}}>
          Lending insights from a team of financial experts
          </p>
          <Popup trigger={<Button variant="contained" style={{backgroundColor:"#242f6e", color: 'white'}}>
          Subscribe
      </Button>} 
      modal
      closeOnDocumentClick
      >
    <div style={{textAlign: 'center'}}>
    <IconButton style={{
      position: 'absolute',
      right: '10px',
    }}
    aria-label="Delete">
  <SvgIcon>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </SvgIcon>
</IconButton>
      <h1 className="modal-h1">Be the first to receive our latest tips!</h1>
      <p className="modal-h2"> Simply enter in your email below and we will send you our latest blogs</p>
      <div>
      <TextField
          style={{width: '250px', height: '50px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={(event) => {
            this.setState({
              email: event.target.value
            });
          }}
        />
        </div>
        <Button onClick={this.submitted} variant="contained" style={{marginTop:'.5%', marginBottom: '2%',width: '30%', height: '50px', backgroundColor:"#242f6e", color: 'white'}}>
          Subscribe
      </Button>
    </div>
  </Popup>
          
      </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default BlogIntro;