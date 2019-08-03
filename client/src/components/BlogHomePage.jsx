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
    blogTitle: 'Using Gift Money for Your Down Payment',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
Saving for a down payment can take a long time. However, if you’re fortunate to have family willing to
give you a monetary gift that you can use for your down payment, you can reach your goal of home
ownership must faster.
<br/><br/>
According to the 2017 National Association of REALTORS® Profile of Home Buyers and Sellers report,
nearly 25% of first-time home buyers used cash gifts from family for a down payment. If any family
members are willing to gift you some down payment money, you’ll need to get a signed statement from
the giver that explicitly states the money is a gift, not a loan, and that no repayment is required. The
mortgage gift letter must include the giver’s name, address, and contact information; the recipient’s
name and relationships to the giver; and the dollar amount and approximate date of the gift.
<br/><br/>
Here is a sample gift letter you may be able to use. Your lender may require additional information:
<br/><br/>
<div style={{marginLeft:'100px'}}>
August 1, 2019
<br/><br/>
To Whom It May Concern:
<br/><br/>
I am giving my son, John Smith, a gift of $7,000 toward the purchase of his home. I do not expect
or require any kind of repayment for this gift. I wrote the check for these funds on July 15, 2019,
and he deposited it the next day. Should you need to contact me regarding this gift, you can do
so using the information below.
<br/><br/>
Sincerely,
<br/><br/>
Michael Smith
<br/>
1234 Main Street
<br/>
Anytown, CA 90210
<br/>
(123) 555-4459
</div>
<br/><br/>
Whatever you do, don’t take a loan from family and try to pass it off as a gift. If it needs to be repaid at
any time in the future, it’s a loan and not a gift. If the money really is a loan, your lender will need to
factor that amount into your debt-to-income ratio.
<br/><br/>
The good news is an individual can give up to $14,000 to an unlimited number of people each year and
still face no federal gift tax. In other words, two parents could each give a son and daughter-in-law
$14,000. That’s $28,000 per person, or $56,000 total. That’s a big down payment.
<br/><br/>
So don’t be afraid to ask Mom or Dad (or your favorite aunt or uncle) if a gift is possible. It may help you
get that home of your dreams sooner than you ever thought possible.
<br/><br/>
Is applying for a mortgage in your future? Contact us. As mortgage bankers, we can help you make the
best decision for your needs.


    </p>,
    blogSnippet: 'Saving for a down payment can take a long time. However, if you’re fortunate to have family willing to give you a monetary gift that you can use for your down payment, you can reach your goal of home ownership must faster.',
    blogImage: 'https://i.ibb.co/vJXG8tf/gift1.jpg',
  },
  {
    blogTitle: 'The Facts about Lender Placed Insurance',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
      All mortgage lenders require homeowners to have adequate insurance on the property. This protects
the homeowner as well as the mortgage company, which has a vested interest in the home. At some
point during your home ownership, you may receive notice that your lender has issued “Lender Placed
Insurance,” “Creditor Placed Insurance,” or “Force Placed Insurance” on your property. What is this?
And why would a mortgage company make this move?
<br/><br/>
Typically, there are three main reasons why Lender Placed Insurance may go into effect.
<br/><br/>
<ol>
  <li>
Your current homeowner’s insurance has lapsed or been cancelled. If your insurance payments
are not escrowed and you pay them yourself each year, you may have mistakenly missed your
payment date. Or perhaps your insurance company cancelled your policy for some other reason.
While you would likely receive several notifications prior to any termination of coverage,
oversights happen and your life is busy. So sometimes things get missed. In this case, your
mortgage company would jump in and secure this insurance for you.
</li>
<li>
Your property insurance doesn’t provide adequate coverage. Maybe your home has significantly
risen in value, but you haven’t updated your homeowner’s insurance coverage in years. If your
policy no longer provides adequate protection from a loss, your mortgage company would issue
Lender Placed Insurance to fill in the gap.
</li>
<li>
Your bank or mortgage servicer has no record of adequate homeowner’s insurance coverage.
Your insurance company should provide your mortgage company with proof of coverage. If they
fail to do so, or something gets overlooked, your mortgage company will think you don’t have
insurance and will issue a policy.
</li>
<br/><br/>
It’s important to note that Lender Placed Insurance is meant to be temporary. It’s usually basic coverage
that only offers protection for the lender for the loan balance should a major loss occur. Additionally,
this basic coverage is often more expensive than a traditional homeowner policy, and you as the
homeowner are responsible for paying the premium of the Lender Placed Insurance.
<br/><br/>
Once you have proof that your property is covered by traditional homeowner’s insurance, your
mortgage company will promptly cancel the Lender Placed Insurance. So if you receive a notice of
Lender Placed Insurance, address it right away to ensure your home is properly insured.
<br/><br/>
Is applying for a mortgage in your future? Contact us. As mortgage bankers, we can help you make the
best decision for your needs.
</ol>
    </p>,
    blogSnippet: 'At some point during your home ownership, you may receive notice that your lender has issued “Lender Placed Insurance,” “Creditor Placed Insurance,” or “Force Placed Insurance” on your property. Find out what this is and what it means for you.',
    blogImage: 'https://i.ibb.co/RgmktZN/covered.jpg',
  },
  {
    blogTitle: 'Tips for Getting a Mortgage When You’re Self-Employed',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
While getting a mortgage is usually a straight-forward process, when you’re self-employed, it
can get a little complicated. Even if you earn a good living from your self-employment, without
a weekly paycheck and W2 to present as proof of income, your mortgage application and
approval process can often involve a few more steps and more paperwork. Fortunately, by
being proactive and keeping good records you can get approved.
<br/><br/>
First, here are the key things mortgage companies are looking for from self-employed
borrowers. When you know what they’re looking for before you apply, you can position
yourself in the best light possible.
<br/><br/>

Here’s what lenders want to see from self-employed mortgage applicants:
<br/><br/>
<ul>
  <li>
Stable income: Even though self-employment has its share of financial ups and downs,
you should be able to prove stability, with an overall upward financial trend. Lenders
will definitely ask for your last two years’ worth of tax returns (possibly more), so make
sure you are always reporting all your income. When lenders review your tax returns,
they are looking not only at your gross income via 1099s and other reportable income,
but also your business expenses so they can calculate your net profit and taxable
income.
</li>
<li>

Consistency: Ideally, you’ll be self-employed for two or more years (in the same
industry) before applying for a mortgage. If you’re new to self-employment but have
filed at least one tax return as a self-employed professional and have W2s from an
employer in the same field, lenders may give you some leeway. The goal is for you to
show that you are stable and not career hopping.
</li>

<li>

Good credit: Credit is always a big factor when getting a mortgage, perhaps more so
when you’re self-employed. If you have a business credit rating, lenders will check that
as well.
</li>
<li>

Cash reserves: Because self-employment income often fluctuates, lenders will want to
see that you have enough cash reserves to weather any dry spells. Plan to show at least
6 months’ worth of living expenses set aside in savings.
</li>
<li>

Adequate down payment: Whether you’re self-employed or a traditional W2 employee,
the down payment requirements are the same. However, if your credit isn’t strong or
your income is very unstable, having a larger down payment can certainly help get you
approved.
</li>

</ul>
Now that you know the key things lenders are looking for from self-employed applicants,
here are some tips for making the approval process easier.

<br/><br/>
<ul>
<li>
Have your paperwork ready: The first thing you’ll notice when you’re self-employed is
that lenders will want a lot of paperwork from you. It helps to have it ready and
complete as soon as possible. Although the requirements may vary by lender, the most
common documents you’ll need are:
</li>
<br/>
<div style={{marginLeft:'100px'}}>
o Complete personal tax returns for two years
<br/>
o Business tax returns for two years (usually Schedule C)
<br/>
o IRS Form 4506-T, giving permission to the lender to request transcripts for tax
returns
<br/>
o Profit and loss statements for the past two years
<br/>
o Business bank statements for the last 90 days (some will require longer)
<br/>
o Business verification, such as a DBA (“doing business as”) or a letter from your
CPA or clients
<br/>
o A business license (if applicable for your type of self-employment)
<br/>
<br/>
</div>
<li>
Clean up your credit: Whether self-employed or not, you should always keep on top on
your credit, especially before applying for a mortgage. Obtain a current credit report
from each of the three credit reporting agencies. Review your report for errors, and be
sure to dispute anything that shouldn’t be there (and address any legitimate concerns
that appear). Do this before your lender pulls your credit. You want it as spotless as
possible before the mortgage application process.
</li>
<li>
Save as much as you can: Many self-employed professionals understand that it’s
common to go through periods of financial feast and periods of financial famine. Be sure
to save as much money as possible during times of feast so you can boost your reserves
and your down payment amount.
</li>
<li>
Keep clean business records: If you haven’t already, separate your business and
personal income. Be sure you have separate checking and savings accounts for each.
Have a separate credit card for business expenses. Also, use a business accounting
software program to make generating reports easier and more accurate.
</li>
</ul>
<br/> <br/>
Being self-employed certainly doesn’t mean you can’t get a mortgage. It just means you may
have to do a few more steps to get the approval you desire. So be proactive in the process. Get
all your paperwork in order before submitting your application, and be prepared to gather
additional forms and papers as requested. With some patience and planning, any self-employed
professional can get a mortgage approval.
<br/> <br/>


When you’re ready to apply for a mortgage or refinance an existing one, contact us at 707-254-
8891 or hilda.hensley@benchmark.us. We can also direct you to the perfect real estate agent
to help you.

    </p>,
    blogSnippet: 'While getting a mortgage is usually a straight-forward process, when you’re self-employed, it can get a little complicated.',
    blogImage: 'https://i.ibb.co/dbk8hBp/self-employ.jpg',
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