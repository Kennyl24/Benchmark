import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ServiceTest from './ServiceTest.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const homeBlogs = [
  {
    blogTitle: 'Why an Online Mortgage May Not Be Your Best Option',
    blogAuthor: 'Hilda Hensley', 
    blogSnippet: 'We live in an era where people want everything online, from online shopping and food delivery to an online mortgage and doctor visit. Learn why online may not be better, especially for your mortgage needs.',
    blogImage: 'https://i.ibb.co/2PXHtrR/euhfwue.jpg'
  },
  {
    blogTitle: 'FHFA Announces Conforming Loan Limit Increase In 2019',
    blogAuthor: 'I Am Benchmark',
    blogText: 'The Federal Housing Finance Agency has announced that the maximum conforming loan limits for mortgages has increased. In most of the country, the confirming loan limits will increase nearly 6.5%, from $453,100 to $484,350 for 2019. For most high-cost areas, where 115% of the local median home value exceeds the loan limit, the loan limit for one unit properties will be $726,525. What Does This Mean for Homebuyers? You can now purchase a home with a higher sales price using a conventional conforming loan through the FHFA regulated Fannie Mae or Freddie Mac. The new limits are effective January 1st, 2019. Typically, the VA and Federal Housing Administration (FHA) are expected to adopt the same increased loan limits for 2019 for FHA and VA loans.',
    blogSnippet: 'The Federal Housing Finance Agency has announced that the maximum conforming loan limits for mortgages has increased. In most of the country, the confirming loan limits will increase nearly 6.5%, from $453,100 to $484,350 for 2019. For most high-cost areas, where 115% of the local median home value exceeds the loan limit, the loan limit',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/jumping-on-bed.jpg'
  },
  {
    blogTitle: 'Nervous About Buying? Here’s A Dose of Confidence',
    blogAuthor: 'I Am Benchmark',
    blogText: 'If you are interested in buying a house, but do not know what you might need, or whether you can qualify, you’re not alone. Many would-be buyers are intimidated by the thought of what it takes to buy a home. Some wonder whether they can afford to buy, if they have enough saved for a down payment, or if their credit is good enough. Can You Relate? If So, You’re In The Right Place! Be confident that you can do it! The basics are pretty simple. To qualify in the current market, you will need a down payment (would you believe that you don’t need 20%), a stable income, and a good credit history. You will have contact with your lender, your agent, and other professionals whose roles help get you into your home. These pros are also valuable resources on your journey home. 5 Easy Steps Ready to apply? Here are 5 steps to follow as suggested by Freddie Mac: Check your credit score and history. Though the average FICO score for closed loans was 731 (September 2018 according to Ellie Mae), there are loan products for a wide range of scores. It’s just a good idea to know where you stand before applying. Gather your documents. You will need to be able to verify your income, which you can do with W-2 forms or tax returns, your credit history, and statements verifying cash assets (bank statements, investment statements, and the like). Contact your loan officer! Your loan officer can help you develop a spending plan, help you determine how much home you can afford,review your income, expenses and financial goals, and recommend a real estate agent who knows the market and will work for your best interests. With a pre-approval letter in hand, sellers will see your offer as legitimate, and will be more likely to accept. You may get pre-approved by your loan officer. Don’t have one? Meet our team or contact us today! Contact your real estate agent. Your real estate agent can help you find the right home for you in your price range, be your advocate in pricing negotiations, and be a great source of advice in the specifics of what you’re looking for in a home, neighborhood, and location. Take Action Armed with the information above, you are ready to start doing your own research. Just remember to know how much house you can afford, stick to your budget, and be mentally and emotionally prepared. Making dreams come true takes a little effort and responsibility. At Benchmark, we are here to help make it as easy as it can be. Ready to get started? Apply now. Want to explore your options?',
    blogSnippet: 'If you are interested in buying a house, but do not know what you might need, or whether you can qualify, you’re not alone. Many would-be buyers are intimidated by the thought of what it takes to buy a home. Some wonder whether they can afford to buy, if they have enough saved for a',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/confident-buyers-in-new-home.jpg'
  },
  ]
  const BlogHomePage = () => (
    <div>
    <Link to={{ pathname:'/blog' }}><h3 className="homepage-header"> BLOGS </h3></Link>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth:'100%',
      // justifyContent: 'space-around'
    }}>
        {homeBlogs.length > 0 ? homeBlogs.map((blog, index) =>  
    <Card style={{height:'auto', 
      width: '33%',
      minWidth:'400px', 
      display: 'flex',
      flexWrap: 'wrap',
      }}>
      <CardHeader
        title={blog.blogTitle}
        titleStyle={{fontSize:'20px', fontWeight: 'bold', textAlign:'center', paddingRight:'10px'}}
        // subtitle="Subtitle"
      />
      <CardMedia
        overlay={<Link to={{ pathname: `/blogs/${blog.blogTitle.split(' ').join('-')}`, state: { key: index} }}className="read-more"><CardTitle title="Read Me"
        titleStyle={{color:'white'}}
        // style={{height:'200px'}}
        /></Link>}
      >
        <img src={blog.blogImage} style={{height: '280px'}}alt="" />
      </CardMedia>
    </Card>)
    : null}
    </div>
    </div>
);
export default BlogHomePage;