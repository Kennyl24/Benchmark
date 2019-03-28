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
    blogTitle:'Avoid These Mistakes When Applying for a Mortgage',
    blogAuthor: 'Hilda Hensley',
    blogText: <p>
      Applying for a mortgage requires that you do certain things, such as check your credit, get your financial papers in order, and save as much money as possible for your down payment. But there are also several things you should NEVER do when applying for a mortgage – things that could potentially cause you to lose your mortgage mid-application.
<br/>
<br/>
To ensure you don’t sabotage your mortgage approval, be sure to avoid the following five things. 
<br/>
<br/>
<ol>
<li>Don’t make any big purchases. Hold off on buying that new car or boat until after your loan has closed. Even if you feel comfortable with all the new payments, your mortgage lender may determine that you are overextending yourself. </li>

<li>Don’t apply for new credit. It’ll lower your credit score. Keep your credit report as stable as possible when applying for a mortgage. Your debt-to-income ratio is a big factor in your lender’s decision. Keep this percentage stable by not taking on new credit. </li>

<li>Don’t co-sign any loans. Co-signing a loan for a family member is certainly generous, but it also makes you liable for the debt if the main borrower defaults. These co-signed loans act just like a new credit inquiry for you. </li>

<li>Don’t miss payments. Your goal is to show your mortgage lender that you are a good risk for them. Therefore, make every effort to ensure you pay everything on time.</li>

<li>Don’t make big life changes. When applying for a mortgage, keep your life as stable as possible. Don’t start a new career with a new employer, start your self-employment venture, or quit your current job (no matter how much you may dislike your current position). Basically, don’t do anything that could make you look like a higher risk to lenders. </li>
</ol>
Remember, when you’re applying for a mortgage, your lender wants to see financial stability. In fact, it’s one of their biggest criteria for deciding to lend money. Therefore, don’t jeopardize your mortgage by doing anything on this list. Wait until after your mortgage is closed and you have the keys to your new home in your hands before making any major financial decisions. 
<br/>
<br/>
Is applying for a mortgage in your future? <span><Link to={{ pathname:'/contact' }} style={{color:'black'}}>Contact us.</Link></span> . As mortgage bankers, we can help you make the best decision for your needs.
    </p>,
    blogSnippet:'There are several things you should never do when applying for a mortgage – things that could potentially cause you to lose your mortgage mid-application. To ensure you don’t sabotage your mortgage approval, be sure to avoid the following five things. ',
    blogImage:'https://i.ibb.co/yBdffHv/mistakes.jpg',
  },
  {
    blogTitle:'Loan Estimate – What it is and Why it’s Important', 
    blogAuthor: 'Hilda Hensley',
    blogText: <p>
      When you apply for a mortgage, you receive many documents—one of which is a loan estimate. Be sure you carefully review this vital three-page document.  It’s essentially your guide to the mortgage you’re applying for. And if you don’t receive one, speak up! By law, your lender must provide you a loan estimate within three days of receiving your application.
    <h2>Why is the Loan Estimate So Important? </h2>
    <h4>Your loan estimate gives you important loan information, such as</h4>
  <ul>
  <li>The estimated interest rate</li>
  <li>Monthly payment</li>
  <li>Total closing costs for the loan, broken down by line item</li>
  <li>Estimated costs of taxes and insurance</li>
  <li>How the interest rate and payment may change in the future</li>
  <li>Special loan features you need to be aware of (such as whether there is a penalty for paying off the loan early)</li>
  <li>Plus many more loan details</li>
</ul>
Fortunately, the loan estimate is an easy-to-read and understand document that isn’t filled with complicated legal jargon. In fact, all lenders are required to use the same standard loan estimate form, which makes it easy for you to compare loans. 
<br/><br/>
Keep in mind that just because you receive a loan estimate, this does not mean your loan is approved or denied yet. It just means your application has been accepted. The loan estimate is there to show you what loan terms the lender expects IF you decide to proceed.  Should you decide to move forward, the lender will likely ask you to supply additional financial information. 
<br/><br/>
While applying for a mortgage can be stressful and the amount of documentation you receive can be overwhelming, be sure you carefully review your loan estimate (as well as any other papers you receive from your lender). The more involved and aware you are, the easier the process will be. 
<br/><br/>
When you’re ready to begin your mortgage application, <span><Link to={{ pathname:'/contact' }} style={{color:'black'}}>contact us.</Link></span> As mortgage bankers, we can help you make the best decision for your needs.
    </p>,
    blogSnippet: ' When you apply for a mortgage, you receive many documents—one of which is a loan estimate. Find out what this vital document is and why you need to review it carefully.',
    blogImage: 'https://i.ibb.co/09dXr4w/what-can-you-afford.jpg',
  },
  {
    blogTitle:'5 Reasons to Refinance Your Mortgage', 
    blogAuthor: 'Hilda Hensley',
    blogText: 
    <p className="blog-text">
    <h2>A Special Report from Hilda Hensley, Mortgage Banker with Benchmark Mortgage</h2>
    If you’ve had a mortgage for any length of time, you may have thought about refinancing it. After all, the TV and internet commercials touting the benefits of doing a mortgage refinance are plentiful. They claim you can do everything from save money and pay off your mortgage faster to use the equity in your home to consolidate debt and embark on that dream vacation. But is refinancing right for you? 
    <br/><br/>
    As with anything in life, refinancing a mortgage has both pros and cons. Since refinancing costs money (on average 3% to 6% of the loan) and requires such things as an appraisal, title search, and application fees, you need to be refinancing for the right reasons. Following are some of the top reasons why you may want to refinance your mortgage.
    <h3>Reason #1: You Can Get a Lower Interest Rate</h3>
    Perhaps you purchased your home when mortgage interest rates were higher overall. Or maybe when you bought your home, your credit score was lower than it is today. There are many reasons why you may have a higher interest rate than what’s currently being offered. If you can save 1% to 2% on your mortgage interest rate by refinancing, it may be worth the effort. 
    <br/><br/>
    When you reduce the interest rate on your mortgage, you increase the rate at which you build equity in your home. Additionally, your monthly payment will be lower. For example, if you have a 30-year, $250,000 mortgage at a 6.5% interest rate, your monthly payment would be approximately $1,580. Reduce that mortgage rate to 4.5% and your monthly payment would go down to $1,267. Over the course of a year, that’s a savings of nearly $4,000.
    <h3>Reason #2: You Can Shorten Your Loan Term</h3>
    If you’re comfortable with your current mortgage payment, you may think refinancing has no benefit for you. But what if you could pay the same amount you currently do each month yet shave years off your repayment time? Refinancing may be able to help you.
    <br/><br/>
    For example, let’s revisit the earlier example of a 30-year, $250,000 mortgage with a 6.5% interest rate and a monthly payment of $1,580. If you refinance to a 4.5% rate and shorten the loan term to 20 years, your payment is $1,582. So, for essentially the same amount of money paid each month, you could pay off your mortgage 10 years sooner. Over the course of the entire mortgage period, that can save you approximately $190,000 in interest. 
    <h3>Reason #3: You Can Get More Favorable Terms</h3>
    When buying their home, some people opt for an adjustable rate mortgage or a mortgage with a balloon payment due. These are often attractive due to their initial low payments. But when their mortgage payments start creeping up, or when the due date for that balloon payment gets closer, refinancing to a fixed rate mortgage may be the best option. 

    Even if you do have a fixed rate mortgage, look closely at all the terms you agreed to, including pre-payment penalties, whether you can make partial payments, late fees you agreed to, etc. If refinancing can give you more favorable terms in other areas, it may be a worthwhile option.

    <h3>Reason #4: You Can Consolidate Debt </h3>
    Credit card debt can quickly ruin any budget. High interest credit card debt is easy to accumulate, and once you fall into the cycle of carrying a balance, it can be difficult to break free. And with the average credit card interest rate at around 15.96%, it’s easy to see how expensive this type of debt can be. 
    <br/><br/>
    If you have enough equity in your home, you could refinance and cash out the equity to pay off your higher interest rate debt. This can then lower the amount you pay to your creditors each month. And instead of writing out multiple checks each month, you’ll only have one payment to make. They key, though, is to make sure you don’t fall back into bad habits and run up credit card debt again. Additionally, refinancing your home mortgage so you can take a vacation, buy an expensive car, or do anything else frivolous or non-essential is never recommended.

    <h3>Reason #5: You Can Make Home Improvements</h3>
    If your home is older and in need of repairs or updates, but you don’t have the financial resources required for the renovations, refinancing may be a good option. Rather than run up credit card debt or totally deplete your savings, you can tap into your home’s equity to enhance your home. 
    <br/><br/>
    One benefit is that by making the repairs or updates you’ll be adding value to your home. So if your plan is to sell the home in a few years, you’ll often get a good return on the investment. And if your plan is to stay in your home long-term, you’ll have a more livable space that warrants your mortgage payment.

    <h3>Is Refinancing Right for You?</h3>
    Of course, before you refinance your mortgage, you need to know what your goals are and why you’re doing it. Are you hoping to lesson your monthly payment obligation? Do you want to shorten your loan term? Do you need cash for some reason? And most important, how long do you plan to stay in your current home?
    <br/><br/>
    While refinancing is often easier than getting the initial mortgage, there are still many steps involved and costs associated with it. Only you can be sure the time, effort, and money involved are worth it in the end. 
    <br/><br/>
    If you do decide that refinancing is right for you, shop around for an experienced mortgage banker who can help. You want someone who understands your goals and can direct you to the best products that enable you to meet them. By working together with your mortgage banker, your mortgage refinancing process will be faster and easier than you thought possible.
    <br/><br/>
    When you’re ready to apply for a mortgage or refinance an existing one, contact us at 707-254-8891 or hilda.hensley@benchmark.us. We can also direct you to the perfect real estate agent to help you.
    </p>,
    blogSnippet: 'If you’ve had a mortgage for any length of time, you may have thought about refinancing it. After all, the TV and internet commercials touting the benefits of doing a mortgage refinance are plentiful.', 
    blogImage:'https://i.ibb.co/QpD2gcz/should-you-refinance-your-mortgage.jpg',
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

export default BlogHomePage;