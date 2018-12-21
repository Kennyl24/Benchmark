import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
const homeBlogs = [
{
  blogTitle: 'Test Title',
  blogAuthor: 'Test Author',
  blogText: 'Smart real estate investors use a variety of financial tools to guide their buying decision—one of which is the capitalization rate, or cap rate. What is a cap rate? In simple terms, the cap rate shows the annual return expected on an investment. In mathematical terms, it is the ratio of Net Operating Income (NOI) to property asset value. For example, if a property recently sold for $1,000,000 and had an NOI of $100,000, then the cap rate would be $100,000 divided by $1,000,000, or 10%. For any long-term real estate investor, the primary financial driver guiding your buying decisions should be the annual income the property will generate. If you’re a property flipper, the cap rate may not concern you. However, if you’re buying properties to rent them out long-term, then the capitalization rate is important to you.',
  blogImage: 'http://nonprofitorgs.files.wordpress.com/2010/07/blog.jpg'
},
{
  blogTitle: 'This Title',
  blogAuthor: 'That Author',
  blogText: 'Smart real estate investors use a variety of financial tools to guide their buying decision—one of which is the capitalization rate, or cap rate. What is a cap rate? In simple terms, the cap rate shows the annual return expected on an investment. In mathematical terms, it is the ratio of Net Operating Income (NOI) to property asset value. For example, if a property recently sold for $1,000,000 and had an NOI of $100,000, then the cap rate would be $100,000 divided by $1,000,000, or 10%. For any long-term real estate investor, the primary financial driver guiding your buying decisions should be the annual income the property will generate. If you’re a property flipper, the cap rate may not concern you. However, if you’re buying properties to rent them out long-term, then the capitalization rate is important to you.',
  blogImage: 'http://nonprofitorgs.files.wordpress.com/2010/07/blog.jpg'
},
{
  blogTitle: 'That Title',
  blogAuthor: 'This author',
  blogText: 'Smart real estate investors use a variety of financial tools to guide their buying decision—one of which is the capitalization rate, or cap rate. What is a cap rate? In simple terms, the cap rate shows the annual return expected on an investment. In mathematical terms, it is the ratio of Net Operating Income (NOI) to property asset value. For example, if a property recently sold for $1,000,000 and had an NOI of $100,000, then the cap rate would be $100,000 divided by $1,000,000, or 10%. For any long-term real estate investor, the primary financial driver guiding your buying decisions should be the annual income the property will generate. If you’re a property flipper, the cap rate may not concern you. However, if you’re buying properties to rent them out long-term, then the capitalization rate is important to you.',
  blogImage: 'http://nonprofitorgs.files.wordpress.com/2010/07/blog.jpg'
},
]
const ServiceTest = () => (
  <div>
  <h3 className="homepage-header"> Blogs </h3>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }}>
      {homeBlogs.length > 0 ? homeBlogs.map((blog, key) =>  
  <Card style={{height:'auto', 
    width:'33%', 
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'}}>
    <CardHeader
      title={blog.blogTitle}
      titleStyle={{fontSize:'20px', fontWeight: 'bold'}}
      // subtitle="Subtitle"
    />
    <CardMedia
      overlay={<Link to={{ pathname:'/blog' }}className="home-links"><CardTitle title="View All Blogs"
      titleStyle={{color:'white'}}
      /></Link>}
    >
      <img src={blog.blogImage} alt="" />
    </CardMedia>
  </Card>)
  : null}
  </div>
  </div>
);

export default ServiceTest;