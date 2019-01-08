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
  {
    blogTitle: 'Fast Track your mortgage approval',
    blogAuthor: 'Hilda Hensley',
    blogText: 
    <p className="blog-text">
    Many people think getting a mortgage approval is a difficult and stressful process. Since a mortgage is often the biggest financial obligation someone has, it’s no wonder qualifying for one requires some work. Between the mounds of paperwork and the waiting time involved as approvals are processed, it’s normal to feel anxious and stressed. However, there are steps you can take before you apply that can make getting a mortgage approval easier.

As a mortgage banker who has helped thousands of people through the home-buying process, here are my top tips to fast-track your mortgage approval. 

Check Your Credit
Your credit score is vital to any type of lending decision, particularly a mortgage. Realize, though, that this does not mean you must have perfect credit. However, the higher your credit score, the lower your interest rate will likely be. When you check your credit, you can often find an estimation of your score through your bank, your credit card issuer, or even via online credit monitoring sites. But your score is only half the equation. You’ll also want an actual copy of your credit report from each of the three credit reporting agencies: Experian, Equifax, and TransUnion. Review each agency’s report for accuracy. If something doesn’t seem right, get it fixed before you apply for a mortgage.

Save for a Down Payment
Almost all mortgages require a down payment. The exact amount can range anywhere from 5% to 20% depending on the loan type. Realize that if you put less than 20% down, your mortgage lender will require you to carry PMI (Private Mortgage Insurance). The cost of PMI varies, but it’s usually around one half of 1% of the loan amount. So if you can avoid it, you should. You may be able to remove it later once your loan balance is paid down enough so that you have at least 20% equity. You’ll need to talk to your lender for specifics regarding this option. 

Build a Nest Egg
In addition to saving for a down payment, you’ll also want some extra cash on hand. Most lenders prefer to see that you have a couple of months of mortgage payments in reserve. No mortgage lender wants to think you’ll be living paycheck to paycheck with nothing saves for emergencies. One appliance repair shouldn’t impede on your ability to make your mortgage payment. Additionally, the greater your reserves, the more that can help make up for less than perfect credit history.

Be Realistic About What You Can Afford
We all want our dream home now. But depending on your circumstances, that dream home may have to wait a few years. Be honest about what you can really afford. What kind of monthly payment can you comfortably carry? Remember that your mortgage amount may also need to include PMI, homeowner’s insurance, and property taxes. Calculate all this into your equation. Also look at your debt to income ratio, or DTI. This is the amount of monthly debt payments you have compared to your monthly income. Most mortgages will allow a maximum DTI of 41%. Ideally your DTI should be no higher than 36%. If your DTI is too high, or if you bite off more than you can chew in terms of a monthly payment, you’ll be more likely to miss mortgage payments if an emergency arises. 

Get Your Documents Ready
Getting a mortgage requires a lot of paperwork and documentation. If you come to your lender with all the documents they are likely to need, you can make the process of getting a mortgage faster and less stressful. Here are the most common documents you’ll need to have ready.

General:
Driver’s Licenses for all applicants
Social Security Card (only on FHA and VA)
Resident Alien Card or VISA – when applicable
Income:
Most recent 30 days of pay stubs with year-to-date totals
W-2 forms and/or 1099s (past 2 years)
Verification of other income such as social security (provide award letter for current year), alimony, or child support (provide divorce decree)
Most current 2 years tax returns (Federal only including all schedules)
Partnerships, S-Corp, and/or Corporate Federal returns for the previous 2 years including all schedules and K1s
If you have rental property income: Copies of all lease/rental agreements
Assets:
Most recent 2 months (60 days) actual bank statements. Include all pages for both checking and savings accounts.
Most recent 2 months retirement and investment account statements. Include all pages.
Source of any non-direct deposit(s) that are greater than 50% of your monthly income.
Proof of where the earnest money funds will originate. Lenders need proof that the earnest money has cleared your account.
If you are receiving gift money for this transaction, additional documentation may be required.
Properties Owned:
Copy of current mortgage statement on all properties owned
Property tax information on all properties
Insurance Declarations page on all properties
Other:
Bankruptcy – Copy of discharge and schedule of creditors
Divorced? – If so please provide your Divorce Decree if less than 18 years ago
VA only – Copy of Form DD214
Self Employed – Copy of current business license

You Can Get an Easy Mortgage Approval

    </p>
    ,
    blogSnippet:'Many people think getting a mortgage approval is a difficult and stressful process. Since a mortgage is often the biggest financial obligation someone has, it’s no wonder qualifying for one requires some work.',
    blogImage: 'https://i.ibb.co/vjsD0p9/app.jpg'
  },
  {
    blogTitle: 'Why an Online Mortgage May Not Be Your Best Option',
    blogAuthor: 'Hilda Hensley', 
    blogSnippet: 'We live in an era where people want everything online, from online shopping and food delivery to an online mortgage and doctor visit. Learn why online may not be better, especially for your mortgage needs.',
    blogImage: 'https://i.ibb.co/2PXHtrR/euhfwue.jpg'
  },
  ]
  const BlogHomePage = () => (
    <div>
    <Link to={{ pathname:'/blog' }}><h3 className="homepage-header"> BLOGS </h3></Link>
    <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
    {homeBlogs.length > 0 ? homeBlogs.map((blog, index) =>  
    <div style={{padding:'0 24px 24px', minWidth: '26%', maxWidth:'380px'}}>
    <div className="card">
    <img className="card-image" src={blog.blogImage}/>
    <div className="container">
    <p className="blog-snippet" style={{paddingBottom:'0'}}> {blog.blogAuthor}</p>
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