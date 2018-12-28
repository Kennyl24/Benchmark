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
import BottomNav from './BottomNav.jsx';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
} from 'react-share';

class Individualblog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.location.state.key ? this.props.location.state.key : null,
      blog: this.props.blogs[this.props.location.state.key],
      email:'',
    }
    this.submitted = this.submitted.bind(this);
  }
  componentWillMount(){
      let test = window.location.href.split('/').pop().split('-').join(' ');
      for( let i = 0; i < this.props.blogs.length; i++){

        console.log(test);
      }
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
    <LeadingBar/>
  <div style={{marginTop:'17%'}}>
    <h1>{this.state.blog.blogTitle}</h1>
    <img src={this.state.blog.blogImage} className="modal-blog-image"style={{marginLeft:'5%', width: '25%', height:'250px'}}/>
    <p className="blog-modal-text" style={{padding:'20px'}}>{this.state.blog.blogText}</p>
    <div style={{minWidth:'30%', marginLeft:'35%', marginRight:'35%'}}>
    <TextField
    style={{width:'100%'}}
          id="this-input"
          label="email"
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
         <div style={{minWidth:'30%', marginLeft:'35%', marginRight:'35%'}}>
    <Button onClick={this.submitted} variant="contained" style={{backgroundColor:"#242f6e", color: 'white', width:'100%', marginBottom:'20px'}}>
          Subscribe
  </Button>

  </div>
  <h1 className="homepage-header"> Share on your platform of choice: </h1>
  <div style={{display:'flex', flexDirection:'wrap', width:'10%', marginLeft:'45%', marginRight:'45%'}}>
  
  <FacebookShareButton children="IndividualBlog" url={window.location.href}  quote={this.state.blog.blogTitle} hashtag="#BenchmarkMortgage">
  <FacebookIcon size={32} round={true} />
  </FacebookShareButton>
  <LinkedinShareButton children="IndividualBlog" url={window.location.href}  title={this.state.blog.blogTitle} description={this.state.blog.blogSnippet}>
  <LinkedinIcon size={32} round={true} />
  </LinkedinShareButton>
  <TwitterShareButton children="IndividualBlog" url={window.location.href}  title={this.state.blog.blogTitle} via={'BenchmarkMortgage'} hashtags={["#BenchmarkMortgage"]}>
  <TwitterIcon size={32} round={true} />
  </TwitterShareButton>
  <GooglePlusShareButton children="IndividualBlog" url={window.location.href}>
  <GooglePlusIcon size={32} round={true} />
  </GooglePlusShareButton>
  </div>
</div>
<BottomNav/>
   </MuiThemeProvider>
)
}
};

export default Individualblog;