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
import IndividualBlog from './IndividualBlog.jsx'


class Blog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showBlog: false,
      test: false,
    }
  }
  render () {
    const blog = this.props.blog
    return (
    <MuiThemeProvider>
    <div style={{padding:'0 24px 48px', minWidth: '26%', maxWidth:'380px'}}>
    <div className="card">
    <img className="card-image" src={this.props.blog.blogImage}/>
    <div className="container">
      <h4 className="blog-title"><b>{this.props.blog.blogTitle}</b></h4> 
      {/* {this.props.blog.blogSnippet} */}
      <div style={{height:'320px'}}>
      <p className="blog-snippet"> {this.props.blog.blogSnippet}</p>
      </div>
    </div>
    <div style={{paddingBottom:'10px', paddingTop:'10px'}}>
    <Link to={{ pathname: '/Individualblog', state: { title: this.props.blog.blogTitle} }}> <Button variant="outlined" style={{cursor:'pointer', borderColor: '#242f6e', color: '#242f6e'}}>Read More</Button> </Link>
    {/* <Button onClick={this.showFull}variant="outlined" style={{borderColor: '#242f6e', color: '#242f6e'}}>
    Read More
</Button> */}
  {/* {this.state.test ? <IndividualBlog blog={blog}/>: null} */}
    </div>
    </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default Blog;