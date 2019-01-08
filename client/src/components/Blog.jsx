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

class Blog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showBlog: false,
    }
    this.showFull = this.showFull.bind(this)
  }
  showFull(){
    console.log(this.props.blog.blogTitle.join('-'))
    this.setState({
      showBlog: !this.state.showBlog
    })
  }
  componentWillMount(){
    console.log(this.props.blog.blogTitle.split(' ').join('-'))
  }
  render () {
    return (
    <MuiThemeProvider>
    <div style={{padding:'0 24px 48px', minWidth: '26%', maxWidth:'380px'}}>
    <div className="card">
    <img className="card-image" src={this.props.blog.blogImage}/>
    <div className="container">
    <p className="blog-snippet" style={{paddingBottom:'0'}}> {this.props.blog.blogAuthor}</p>
      <h4 className="blog-title"><b>{this.props.blog.blogTitle}</b></h4> 
      {/* {this.props.blog.blogSnippet} */}
      <div style={{height:'190px'}}>
      <p className="blog-snippet"> {this.props.blog.blogSnippet}</p>
      </div>
    </div>
    <div style={{paddingBottom:'10px', paddingTop:'10px'}}>
    <Link to={{ pathname: `/blogs/${this.props.blog.blogTitle.split(' ').join('-')}`, state: { key: this.props.index} }}className="read-more"><Button variant="outlined" style={{borderColor: '#242f6e', color: '#242f6e'}}>Read More</Button></Link>
    </div>
    </div>
    </div>
   </MuiThemeProvider>
)
}
};

export default Blog;