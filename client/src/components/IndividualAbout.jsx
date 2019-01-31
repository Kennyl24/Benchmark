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

class IndividualAbout extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      blog: null,
      email:'',
      data: null,
      test: window.location.href.split('/')[window.location.href.split('/').length-1].split('-').join(' '),
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
          image: this.props.images[this.state.key],
          data: true
        }));
      } else {
      console.log('trying this one boo');
      for( let i = 0; i < this.props.blogs.length; i++){
        console.log(this.state.test)
        console.log(this.props.blogs[i].blogTitle)
        if(this.state.test === this.props.images[i].title){
          this.setState({
            key: i,
          }, ()=> this.setState({
            image: this.props.images[this.state.key],
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
  }
  render () {
    if (!this.state.data) {
      return <div />
  }
    return (
    <MuiThemeProvider>
      <MetaTags>
            <title>{this.state.image.title}</title>
            <meta name="description" content={this.state.image.title} />
            <meta property="og:title" content={this.state.image.title} />
            <meta property="og:image" content={this.state.image.url} />
          </MetaTags>
    <LeadingBar/>
    <div style={{marginTop:'1%', padding:'5%'}}> 
      <h1>{this.state.image.title}</h1>
      <img src={this.state.image.url} style={{height:'20%', width:'50%'}}/>
    </div> 

<BottomNav/>
   </MuiThemeProvider>
)
}
};

export default IndividualAbout;