import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Button from '@material-ui/core/Button';
const homeBlogs = [
  {
    blogTitle: 'Jumbo Loans',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
      When shopping for a mortgage, you may have heard the phrase “jumbo loan.” What is it? And do you
need one?
<br/><br/>
In most locations, conventional mortgages have loan limits set in place by Fannie Mae and Freddie Mac,
the two government-sponsored enterprises that buy mortgages from lenders, pool them together, and
sell them as mortgage-backed securities to investors. Typically, the loan limit is set at $484,350.
However, if you’re in a more expensive housing area or a hot market, that limit may be higher. For
example, in Napa County, CA, the loan limit is currently $726,525. If you need a mortgage greater than
that amount, you’ll need to apply for a jumbo loan.
<br/><br/>
Realize this relates to the mortgage amount, not the home’s sale price. So if you’re buying a home in
Napa County for $1 million, and making a down payment of $300,000, then your mortgage amount is
$700,000, which is below the conventional loan limit. In this case, there’s no need for a jumbo loan.
However, if your down payment were $200,000, then your loan amount would be $800,000, and you
would need to apply for a jumbo loan.
<br/><br/>
<h1>Differences Between a Jumbo Loan and a Conventional Loan</h1>
<br/><br/>
Since jumbo loans are not backed by Freddie Mac or Fannie Mae, lenders view them as riskier. As such,
qualifying for one is a little more difficult. Here are some key things to note.
<br/><br/>
<ul>
  <li>
Lenders may require your FICO credit score to be 700 or higher.
</li>
<li>
They may also have stricter limits on debit-to-income ratios.
</li>
<li>
Typically, you’ll need more cash reserves to qualify.
</li><li>
The documentation process will be more involved.
</li>
<li>
Be prepared to need a higher down payment (lenders for jumbo loans like to see at least 20%
being put down).
</li>
<li>

Finally, because jumbo loans are bigger and harder to qualify for, often involving extra steps,
you may have to pay slightly higher closing costs and fees.
</li>
</ul>
<br/><br/>
Before proceeding with a jumbo loan, be sure to talk with your mortgage banker. There may be
alternative options that fit your needs better.
<br/><br/>
Is applying for a mortgage in your future? Contact us. As mortgage bankers, we can help you make the
best decision for your needs.
       </p>,
    blogSnippet: 'When shopping for a mortgage, you may have heard the phrase “jumbo loan.” What is it? And do you need one? Learn the facts about jumbo loans.',
    blogImage: "https://i.ibb.co/9ncw0rP/fha-jumbo-loan.png",
  },
  {
    blogTitle: 'What is an IRRRL VA refinance loan',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
An IRRRL, or Interest Rate Reduction Refinancing Loan, is a quick VA refinance option with fewer qualifications and less paperwork than other refinance loan options. It’s meant to be a quick and non-complicated refinance option for qualified VA homeowners, and there is no appraisal requirement. If you have an existing VA loan and are looking for a quick way to refinance at a lower rate or shorten the term of your mortgage, an IRRRL might be a great option for you!

<br/><br/>
<h1>How do I know if I qualify?</h1>
<br/><br/>
To qualify for a IRRRL you must already have an existing VA loan you are looking to refinance. Approval is also very simple. No credit review is needed, making this one of the easiest refinance options available to VA homeowners.

 
<br/><br/>

<h1>Is it worth it? How would I benefit from an IRRRL?</h1>
<br/><br/>

With an IRRRL, you can potentially refinance at a lower interest rate than when your original VA loan was taken out. It gives existing VA homeowners like you a chance to take advantage of the current low interest rates. If you are looking to reduce your monthly mortgage payment this might be a great opportunity.
<br/><br/>

You can also shorten a 30-year mortgage to a 15-year mortgage when you refinance with an IRRRL. Be aware that your monthly payment will probably be larger when shortening the term of your mortgage. However, depending on your goals and financial situation, this might be an opportunity to cut your number of mortgage payments significantly. You can also switch from an existing ARM (adjustable-rate mortgage) to a new fixed-rate loan.  
<br/><br/>


 

<h1>How much does it cost? How do I apply?</h1>
<br/><br/>

Before discussing the cost, it’s a good idea to understand what the VA funding fee is, exactly.
<br/><br/>

As we shared in VA Funding Fee: A Closer Look, the VA funding fee is a percentage of the loan amount that is applied to every VA purchase and refinance. The proceeds from the fee go directly to the VA to help keep the loan guarantee program running. While this is a benefit that all veterans have earned, the fee helps to offset any losses that the VA takes on by issuing the guarantee, so that this program will continue to be available for future generations.
<br/><br/>

The amount of paperwork required for this streamlined loan is very minimal. The VA funding fee for an IRRRL only 0.5%, and there is an exception to this for disabled veterans, or spouses of deceased veterans who died in service or from an injury sustained during service.
<br/><br/>

If you are ready to get started with an IRRRL, you find your local branch, and contact them, or apply today! For more information, please contact our VA specialists at 1-833-VET-EASY.

 

Benchmark brings you home.

    </p>,
    blogSnippet: 'An IRRRL, or Interest Rate Reduction Refinancing Loan, is a quick VA refinance option with fewer qualifications and less paperwork than other refinance loan options.',
    blogImage: 'https://i.ibb.co/Mc671Cn/save-money-with-an-IRRRL.jpg',
 
  },
  {
    blogTitle: 'What to do if the Home Appraisal Comes in Low',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
A home appraisal is an important step when buying a home—and one that is absolutely necessary if you’re getting a mortgage. The purpose of the home appraisal is to determine the property’s actual value. Lenders require this, as it’s a way for them to protect their investment.
<br/><br/>
For example, suppose you and the seller agree on a purchase price of $500,000. You are putting $25,000 down, meaning your mortgage will be for $475,000. If the appraisal says the home is valued at $450,000, your lender many deny your application. That’s because there’s a $25,000 gap between the mortgage amount and the home’s value. If you were to default on the loan, chances are high that the mortgage company wouldn’t be able to recoup the full amount of the loss.
<br/><br/>

So, what happens when your home appraisal comes in lower than expected? Is your dream home gone forever? Not necessarily. Here are some things to consider.
<br/><br/>
<ol>
<li>
Get your lender involved. Due to mandated mortgage industry requirements, you as a consumer cannot request a new appraisal. However, your lender can rebut an appraisal on your behalf. Therefore, let your lender know why you agreed to the price you did. Show your lender the comparables you and your Realtor used to determine an offer price. If that doesn’t work, consider the next two suggestions. 
  </li> 
<li>Re-negotiate with the seller. If the appraisal stands as is (even with a second opinion), see if the seller will lower the price. After all, unless they find a cash buyer, in which appraisals aren’t needed, they’re going to run into this problem again with a new buyer. </li>
<li>Make up the difference with a higher down payment. If you have the means, you can increase your down payment so that the lender is no longer at risk. </li>
</ol>
<br/><br/>

As you can see, all is not lost if your home appraisal comes in lower than expected. Take the next step that makes the most sense for your situation. And always work closely with your Realtor and mortgage banker to ensure the best outcome for all.
<br/><br/>

Is applying for a mortgage in your future? Contact us. As mortgage bankers, we can help you make the best decision for your needs.

    </p>,
    blogSnippet: 'A home appraisal is an important step when buying a home—and one that is absolutely necessary if you’re getting a mortgage. What happens when your home appraisal comes in lower than expected? Here are some things to consider.',
    blogImage: 'https://i.ibb.co/RSCh1cZ/5-Best-Ways-Home-Inspection-1.png',
 
  },
]
  const BlogHomePage = () => (
    <div>
    <Link to={{ pathname:'/blog' }}><h3 className="homepage-header"> Mortgage Lending 101 </h3></Link>
    <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
    {homeBlogs.length > 0 ? 
    homeBlogs.map((blog, index) => 
    <div style={{padding:'0 24px 24px', minWidth: '26%', maxWidth:'380px'}}>
    <div className="card">
    <img className="card-image" src={blog.blogImage} alt={blog.blogTitle}/>
    <div className="container">
      <h4 className="blog-title"><b>{blog.blogTitle}</b></h4> 
      <div style={{height:'200px'}}>
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