import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ServiceTest from './ServiceTest.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Button from '@material-ui/core/Button';
const homeBlogs = [
  {
    blogTitle:'Why You Need a Mortgage Pre Approval',
    blogAuthor: 'Hilda Hensley',
    blogText: 
    <p className="blog-text">
    Many home buyers wonder if they should get a mortgage pre-approval or a mortgage pre-qualification before they start their home search. If you’re serious about buying a home, getting a mortgage pre-approval before you work with a Realtor and start your home search is preferred.
    <br/>
    <h2>Mortgage Pre-Approval versus Mortgage Pre-Qualification</h2>
    Realize there’s a big difference between being pre-qualified for a mortgage and being pre-approved for one. Many home buyers think these terms are interchangeable, but they are not. Here’s the difference.
    Pre-qualification means you have supplied a lender with some basic information, such as your income, debts, and assets. You may have given the details via phone or on an online form. Everything is based solely on what you tell the lender, as there’s no verification or credit pull. Since nothing is verified, your pre-qualification amount is likely to change, and it may be given verbally as a price range rather than an exact amount. 
    <br/><br/>
Pre-approval, on the other hand, means you have gone a step further. You have completed a mortgage application, paid any applicable fees, supplied documentation to prove your income, and have authorized a credit report be pulled. Because you’ve given the lender permission to review and verify your information, your pre-approval amount is often in writing and for an exact amount that isn’t likely to change. 
<br/><br/>
So while pre-qualification is a good start, being pre-approved will make your home buying search more productive and often less stressful. Sellers will know you’re serious and will give higher priority to your offers. By taking the time to get a mortgage pre-approval, you’ll find yourself in your new home faster.
<br/><br/>
Need advice on getting a mortgage pre-approval? Before you apply for your next mortgage, <span><Link to={{ pathname:'/contact' }} style={{color:'black'}}>contact us.</Link></span> As mortgage bankers, we can help you make the best decision for your needs.

    </p>
    
    ,
    blogSnippet:'There’s a big difference between a mortgage pre-approval and a mortgage pre-qualification. Many home buyers think these terms are interchangeable, but they are not. Here’s the difference.',
    blogImage:'https://i.ibb.co/StZkbHS/Pre-Approved-vs-Pre-Qualified1.jpg',

  }, 
  {
    blogTitle:'Your Mortgage Application Checklist',
    blogAuthor: 'Hilda Hensley',
    blogText: <p className="blog-text">
    <h2>Your Mortgage Application Checklist</h2>

    Before you apply for a mortgage, you’ll need to gather many different documents to complete your mortgage application. The better prepared you are before you meet with your lender, the less stressful the mortgage application process will be. Here is a handy checklist of the most common documents you’ll need to have ready.
    <br/>
    <h4 style={{paddingTop:'80px'}}>General:</h4>
    <ul>
    <li>Driver’s Licenses for all applicants</li>
    <li>Social Security Card (only on FHA and VA)</li>
    <li>Resident Alien Card or VISA – when applicable</li>
    </ul>
    <h4> Income: </h4>
    <ul>
  <li>Most recent 30 days of pay stubs with year-to-date totals</li>
  <li>W-2 forms and/or 1099s (past 2 years)</li>
  <li>Verification of other income such as social security (provide award letter for current year), alimony, or child support (provide divorce decree)</li>
  <li>Most current 2 years tax returns (Federal only including all schedules)</li>
  <li>Partnerships, S-Corp, and/or Corporate Federal returns for the previous 2 years including all schedules and K1s</li>
  <li>If you have rental property income: Copies of all lease/rental agreements</li>
  </ul>
  <h4>Assets:</h4>
    <ul>
<li>Most recent 2 months (60 days) actual bank statements. Include all pages for both checking and savings accounts.</li>
<li>Most recent 2 months retirement and investment account statements. Include all pages.</li>
<li>Source of any non-direct deposit(s) that are greater than 50% of your monthly income.</li>
<li>Proof of where the earnest money funds will originate. Lenders need proof that the earnest money has cleared your account.</li>
<li>If you are receiving gift money for this transaction, additional documentation may be required.</li>
</ul>
    <h4>Properties Owned:</h4>
    <ul>
<li>Copy of current mortgage statement on all properties owned</li>
<li>Property tax information on all properties</li>
<li>Insurance Declarations page on all properties</li>
</ul>
    <h4>Other:</h4>
    <ul>
<li>Bankruptcy – Copy of discharge and schedule of creditors</li>
<li>Divorced? – If so please provide your Divorce Decree if less than 18 years ago</li>
<li>VA only – Copy of Form DD214</li>
<li>Self Employed – Copy of current business license</li>
</ul>
<br/>
Keep in mind that everyone listed on the loan needs to complete the mortgage application and provide their financial information. And don’t be alarmed if your lender asks you for more documents as they review your mortgage application. After all, the lender’s goal is to assess you as a borrower and ensure you can make your payments on time. As such, you’ll need to provide them with numerous documents to showcase your creditworthiness.
<br/>
When you’re ready to begin your mortgage application, contact us. As mortgage bankers, we can help you make the best decision for your needs.
   
    </p>,
    blogSnippet: 'Before you apply for a mortgage, you’ll need to gather many different documents to complete your mortgage application. Here is a handy checklist of the most common documents you’ll need to have ready.',
    blogImage:'https://i.ibb.co/jG7Bb2C/checklist.jpg',

  },
  {
    blogTitle: 'Mortgage Banker Versus Mortgage Broker',
    blogAuthor: 'Hilda Hensley',
    blogText: 
    <p className="blog-text">
<h1> Should You Use a Mortgage Banker or a Mortgage Broker?</h1>

When it’s time to secure a home loan, many people seek out a mortgage broker. But is this your best option? Would a mortgage banker be a better option?

If you’re not sure of the difference between a mortgage broker and a mortgage banker, you’re not alone. Most people use the terms “mortgage broker” and “mortgage banker” interchangeably. In reality, they are two very different things. 

<h2>  Mortgage Broker </h2> 
A mortgage broker deals with many different wholesale lenders. The broker is an independent operator and can be a one-person office or a large organization with different loan agents acting under the one broker’s license. Mortgage brokers do not have affiliation with any one company. As a result, they are at the whim of the individual wholesale lenders guidelines, overlays, timeframes, and underwriters. Often, they don’t have strong relationships with underwriters, and communication is not encouraged. 
 
<h2>  Mortgage Banker  </h2> 
A mortgage banker is also called a correspondent lender. Mortgage bankers are independent offices working under a corporate umbrella where they underwrite and fund/close their loans in their own name.  They retain the servicing of the loans or they sell the servicing after closing. Mortgage bankers often have deep relationships with their underwriters, who are dedicated to the team at the mortgage banker’s office. They work in concert with underwriters to ensure each and every possible loan reaches the closing table.  

<h2>  Which is Better?  </h2> 
So which is better, the mortgage broker or the mortgage banker? While the mortgage broker might have been a competitive choice in the past, today’s mortgage programs are more commoditized, which means you really need a mortgage banker working for you. By having a mortgage banker in control of your home loan process, you’ll get better service, more competitive pricing, and often a faster path to closing on the loan. 

Before you apply for your next mortgage, <span><Button ><Link to={{ pathname:'/contact' }}className="bottomnav-links">Contact Us</Link></Button></span> . As mortgage bankers, we can help you make the best decision for your needs.

      </p>
    ,
    blogSnippet:'When it’s time to secure a home loan, many people seek out a mortgage broker. But is this your best option? Would a mortgage banker be a better option? Learn the difference between the two',
    blogImage: 'https://i.ibb.co/YtcC90W/3.jpg'
  },
  ]
  const BlogHomePage = () => (
    <div>
    <Link to={{ pathname:'/blog' }}><h3 className="homepage-header"> Mortgage Lending 101 </h3></Link>
    <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
    {homeBlogs.length > 0 ? homeBlogs.map((blog, index) =>  
    <div style={{padding:'0 24px 24px', minWidth: '26%', maxWidth:'380px'}}>
    <div className="card">
    <img className="card-image" src={blog.blogImage}/>
    <div className="container">
    {/* <p className="blog-snippet" style={{paddingBottom:'0'}}> {blog.blogAuthor}</p> */}
      <h4 className="blog-title"><b>{blog.blogTitle}</b></h4> 
      <div style={{height:'180px'}}>
      <p className="blog-snippet"> {blog.blogSnippet}</p>
      </div>
    </div>
    <div style={{paddingBottom:'10px', paddingTop:'10px'}}>
    <Link to={{ pathname: `/blogs/${blog.blogTitle.split(' ').join('-')}`, state: { key: index} }}className="read-more"><Button variant="outlined" style={{borderColor: '#242f6e', color: '#242f6e'}}>Read More</Button></Link>
    </div>
    </div>
    </div>
    ) : null}
    </div> 
    </div> 
    );
    {/* <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      maxWidth:'95%',
      marginLeft:'10%'
      // justifyContent: 'space-around'
    }}>
        {homeBlogs.length > 0 ? homeBlogs.map((blog, index) =>  
    <Card style={{height:'auto', 
      width: '22%',
      minWidth:'340px', 
      display: 'flex',
      flexWrap: 'wrap',
      marginRight:'3%', 
      }}>
      <CardHeader
        title={blog.blogTitle}
        titleStyle={{fontSize:'20px', fontWeight: 'bold'}}
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
    </div> */}

export default BlogHomePage;