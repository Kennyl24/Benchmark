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
import MetaTags from 'react-meta-tags';
import {isMobile} from 'react-device-detect';

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
      key: null,
      blog: null,
      email:'',
      data: null,
      test: window.location.href.split('/')[window.location.href.split('/').length-2].split('-').join(' '),
    }
    this.submitted = this.submitted.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  componentWillMount(){
    console.log(window.location.href);
      if (typeof this.props.location.state !== 'undefined'){
        this.setState({
          key: this.props.location.state.key
        }, () => this.setState({
          blog: this.props.blogs[this.state.key],
          data: true
        }));
      } else {
      console.log('trying this one boo');
      console.log(window.location.href);
      for( let i = 0; i < this.props.blogs.length; i++){
        console.log(this.state.test)
        console.log(this.props.blogs[i].blogTitle)
        if(this.state.test === this.props.blogs[i].blogTitle){
          this.setState({
            key: i,
          }, ()=> this.setState({
            blog: this.props.blogs[this.state.key],
            data: true
          }));
        }
      };
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
    this.setState({
      email:''
    })
  }
  render () {
    if (!this.state.data) {
      return <div />
  }
    return (
    <MuiThemeProvider>
      <MetaTags>
            <title>{this.state.blog.blogTitle}</title>
            <meta name="description" content={this.state.blog.blogSnippet} />
            <meta property="og:title" content={this.state.blog.blogTitle} />
            <meta property="og:image" content={this.state.blog.blogImage} />
          </MetaTags>
    <LeadingBar/>
  <div style={{marginTop: isMobile ? '21%' :'4%', padding:'5%'}}>
    <h1>{this.state.blog.blogTitle}</h1>
    { isMobile ? <img src={this.state.blog.blogImage} className="modal-blog-image"style={{marginLeft:'8%', width: '80%', height:'250px'}}/> : 
    <img src={this.state.blog.blogImage} className="modal-blog-image"style={{marginLeft:'5%', width: '25%', height:'250px'}}/>}
    <p className="blog-modal-text" style={{padding:'20px'}}>{this.state.blog.blogText}</p>
    { isMobile?     <div style={{display:'flex', flexDirection:'row', paddingLeft:'25%'}}>
  <span style={{cursor:'pointer'}}>
  <span>
  <FacebookShareButton children="IndividualBlog" url={window.location.href}  quote={this.state.blog.blogTitle} hashtag="#HildaHensleyTeam">
  <FacebookIcon size={40} round={true} />
  </FacebookShareButton>
  </span>
  <span>
  <LinkedinShareButton children="IndividualBlog" url={window.location.href}  title={this.state.blog.blogTitle} description={this.state.blog.blogSnippet}>
  
  <LinkedinIcon size={40} round={true} />
  </LinkedinShareButton>
  </span>
  <span>
  <TwitterShareButton children="IndividualBlog" url={window.location.href}  title={this.state.blog.blogTitle} via={'BenchmarkMortgage'} hashtags={["HildaHensleyTeam"]}>
  <TwitterIcon size={40} round={true} />
  </TwitterShareButton>
  </span>
  <span>
  <GooglePlusShareButton children="IndividualBlog" url={window.location.href}>
  <GooglePlusIcon size={40} round={true} />
  </GooglePlusShareButton>
  </span>
  </span>
  </div> : <div style={{position:'fixed', top: '20%', left:'2%', display:'flex', flexDirection:'column'}}>
  <span style={{cursor:'pointer'}}>
  <FacebookShareButton children="IndividualBlog" url={window.location.href}  quote={this.state.blog.blogTitle} hashtag="#BenchmarkMortgage">
  <FacebookIcon size={40} round={true} />
  </FacebookShareButton>
  <LinkedinShareButton children="IndividualBlog" url={window.location.href}  title={this.state.blog.blogTitle} description={this.state.blog.blogSnippet}>
  <LinkedinIcon size={40} round={true} />
  </LinkedinShareButton>
  <TwitterShareButton children="IndividualBlog" url={window.location.href}  title={this.state.blog.blogTitle} via={'BenchmarkMortgage'} hashtags={["BenchmarkMortgage"]}>
  <TwitterIcon size={40} round={true} />
  </TwitterShareButton>
  <GooglePlusShareButton children="IndividualBlog" url={window.location.href}>
  <GooglePlusIcon size={40} round={true} />
  </GooglePlusShareButton>
  </span>
  </div>
    }
    
    
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
</div>
<BottomNav/>
   </MuiThemeProvider>
)
}
};

export default Individualblog;