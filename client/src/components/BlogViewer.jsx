import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog.jsx';

import Button from '@material-ui/core/Button';
const BlogViewer = props => (
  // <div className="blog-modal-container">
  <div className= "blog-modal" >
    <h1>{props.blog.blogTitle}</h1>
    <div style={{flexDirection: 'row'}}>
    <img src={props.blog.blogImage} className="modal-blog-image"style={{marginLeft:'5%', width: '25%', height:'250px'}}/>
    <p className="blog-modal-text" style={{padding:'20px'}}>{props.blog.blogText}</p>
    </div>
    <div class="addthis_inline_share_toolbox"></div>
    {/* <Button variant="contained" style={{backgroundColor:"#242f6e", color: 'white', width:'10%', marginLeft:'45%', marginBottom:'20px'}}>
          Subscribe
  </Button> */}
{/* </div> */}
</div>
);

export default BlogViewer;