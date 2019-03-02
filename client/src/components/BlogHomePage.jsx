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
  {
    blogTitle:'Understanding the Closing Costs for Home Buyers',
    blogAuthor: 'Hilda Hensley',
    blogText:
    <p className="blog-text">
    Buying a home has many costs associated with it—not just the down payment, but also the closing costs. In fact, many buyers, especially first-time home buyers, are often surprised at how quickly the closing costs can add up. The average closing costs percentage is about 2% to 5% of the purchase price, but 3% to 6% is certainly not uncommon. 
    <br/><br/>
    Here are the typical closing costs buyers are responsible for. Since exact fees vary widely based on location and lender requirements, talk to your mortgage banker for specific details. 
    <h4> Lender Related Closing Costs </h4>
    <ul>
  <li>Credit Report</li>
  <li>Private Mortgage Insurance: If your down payment is less than 20% of the purchase price, lenders require this insurance to protect their interest in the home.</li>
  <li>Initial Interest: This covers the interest from the date you close until the end of the month.  </li>
  <li>Document Preparation Fee</li>
  <li>Lender’s Title Insurance Policy: This is a title insurance policy that protects the lender’s mortgage interest in the property. </li>
  <li>Wire Transfer Fees: Most lenders fund the transaction via a wire transfer versus a check. </li>
  </ul>
  <h4>Other Closing Costs Potentially Required by Lenders</h4>
    <ul>
  <li>Home Appraisal</li>
  <li>Homeowner’s Insurance: Lenders and insurance companies require payment of the first year’s homeowner’s insurance to protect against natural and manmade disasters.</li>
  <li>Flood Zone Certification </li>
</ul>
<h4>Title Related Closing Costs</h4>
    <ul>
  <li>Homeowner’s Title Insurance Policy: This protects your interest in the real estate from claims of ownership or other interests by others. While this is optional, the cost of the lender’s premium goes up without the purchase of the homeowner’s title insurance policy, so it is not cost effective to forgo it. </li>
  <li>Settlement Fee: This covers the title company’s services. </li>
  <li>Document Preparation Fee: Charge for the cost of preparing legal papers. </li>
  <li>Government Recordation Charges</li>
  <li>Proration of Property Taxes: Expect to pay the property taxes from the date you take ownership to the end of the year. </li>
</ul>
    
    
    While closing costs do add up, the good news is that most of them are one-time fees. That means you’ll never have to pay them again until you buy another home. Any recurring fees, like taxes and insurance, can be escrowed into your mortgage payment.  
    <br/><br/>
    When you’re ready to begin your mortgage application, contact us. As mortgage bankers, we can help you make the best decision for your needs.
    
    </p>
    , 
    blogSnippet:'Buying a home has many costs associated with it—not just the down payment, but also the closing costs. Here are the typical closing costs buyers are responsible for.',
    blogImage:'https://i.ibb.co/MgtjfXB/Closing-costs-thumbnail-copy-1.png'

  },
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

  }
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