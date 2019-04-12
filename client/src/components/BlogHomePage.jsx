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
    blogTitle:'Mortgage Points',
    blogAuthor: 'Hilda Hensley',
    blogText: 
    <p>
      <h1 className="homepage-header" style={{fontSize:'1.4em'}}>Mortgage Points – What Are They and Should You Buy Them?</h1>
   
During the mortgage application process, you’re likely to be asked whether you want to pay mortgage points. Typically, few people know what points are or how they work. And, unfortunately, many people inherently believe that points are bad. (Hint: They’re not.)
<br/><br/>
<h1 className="homepage-header" style={{fontSize:'1.4em'}}>Let’s start with the first question: “What are mortgage points?”</h1>

In the simplest terms, mortgage points are fees you pay to lower your mortgage interest rate. Typically, one point is equal to 1% of the mortgage total. So, if your mortgage is for $500,000, one point is $5,000, two points is $10,000, etc. For each point you pay, your mortgage interest rate goes down a little bit. Think of it as paying some interest upfront in order to secure a lower interest rate and thereby lower monthly payments.
<br/><br/>
<h1 className="homepage-header" style={{fontSize:'1.4em'}}>The next question then is: “Should I pay points?” The answer: “It depends.”</h1>

Let’s go back to that $500,000 mortgage example. For a 30-year fixed loan with a 4% interest rate, the monthly payment would be $2387.08. If you pay one point ($5,000) your lender may reduce your interest rate to 3.75%. That would reduce your monthly payment to $2315.58 – a difference of $71.50 per month. That may not seem significant on a monthly basis, but over the course of the 30-year mortgage, it’s actually a savings of $25,739.47.
<br/><br/>
The key, of course, is determining your break-even timeline. In other words, how long would you need to stay in the home to recoup that initial $5,000 you paid for mortgage points? In this example, you’d need to stay in your home 70 months, or 5.8 years, for that $71.50 savings to equal $5,000. On average, most mortgage points have a break-even timeline of between five and eight years. 
<br/><br/>
Therefore, if you know the home you’re purchasing is a starter home that you plan to keep for three to five years, then paying points doesn’t make sense. But if you know you’re buying your forever home, then you may want to consider paying a point or two in order to save money in the long run.  
<br/><br/>
As you can see, mortgage points aren’t always a bad idea. In some cases, they can help you save a significant amount of money. It all depends on your goals and timeline. Your mortgage banker can help you with calculations so you can determine whether paying mortgage points is a wise decision. 
<br/><br/>
Is applying for a mortgage in your future? Contact us. As mortgage bankers, we can help you make the best decision for your needs.
      </p>
    ,
    blogSnippet:'Mortgage points aren’t always a bad idea. In some cases, they can help you save a significant amount of money. It all depends on your goals and timeline. Discover the pros and cons of mortgage points.',
    blogImage: 'https://i.ibb.co/7Ggm2yg/canstockphoto24940348-1.jpg',
  },
  {
    blogTitle: 'Looking for a Mortgage? Know Your Options',
    blogAuthor: 'Hilda Hensley',
    blogText: 
    <p className="blog-text">
      When it comes to getting a mortgage, you have options. Unfortunately, for many people, the various mortgage options seem confusing and overwhelming. In reality, they’re not, especially when you break them down into categories. That’s when it’s easy to see the many differences of each so you can decide which is the best option for your situation.
      <br/>
<br/>
Because different lenders may offer special programs or loan features, there’s no way to examine every possible option. So let’s take a look at the most common mortgage options that the majority of people choose from. 
<br/>
<br/>
<span style={{fontWeight:'bold'}}>Fixed Rate Versus Adjustable Rate Mortgages</span>
<br/>
One of the first decision you’ll need to make is whether you want your loan to have fixed interest rate or an adjustable interest rate. Here’s what these terms mean:
<br/>
<br/>
<ul>
<li><span style={{fontWeight:'bold'}}>Fixed Rate Mortgage</span> – These loans have the same interest rate for the life of the loan. So if you lock in an interest rate of 5% today, you will always pay 5% interest no matter what the interest rates rise to during the terms of your loan, even if your loan term is for 30 years. As a result, your mortgage payment will not increase or decrease due to interest rate changes. This is great for budgeting and for people who like stability.</li>
<br/>
<br/>
<li><span style={{fontWeight:'bold'}}>Adjustable Rate Mortgage</span> – These loans have an interest rate that will change over time, based on the current mortgage interest rate. Most adjustable rate loans have an initial period (usually 3-5 years) where the rate is stable. After that initial period, the rate will change (adjust) every year. You’ll often see adjustable rate mortgage called things like a “3/1 ARM” or a “5/1 ARM.” The first number indicates the initial rate lock period in years. The second number indicates how often after that initial rate lock period the rate will change (again in years). And “ARM” stands for adjustable rate mortgage. Because the initial interest rate during the lock period is often lower than traditional fixed rate products, these loans are attractive to people who are certain they will not stay in the home for longer than the initial lock time.</li>
</ul>
<br/>
<br/>
<span style={{fontWeight:'bold'}}>Specific Loan Types</span>
<br/>
Now that you know whether you want a fixed or adjustable rate mortgage, it’s time to choose the specific loan type. While there are more than three loan options, these three are the most common that the majority of people opt to use. Talk to your mortgage banker about other options they may offer.
<br/>
<br/>
<ul>
  
<li><span style={{fontWeight:'bold'}}>FHA Loan</span> – FHA stands for Federal Housing Administration. The word “federal” in there should tell you that this is a government backed product. These loans are managed by the Department of Housing and Urban Development (HUD). Many people believe only first-time buyers can obtain an FHA loan. This is not true. FHA loans are available to all types of borrowers. 

With FHA loans, the government insures the lender against any losses that might result from a borrower defaulting. Now, before you try to get a multi-million-dollar property with an FHA loan, realize there are borrowing limits. FHA sets single-family loan limits at 115% of median house prices for the area. Talk with your mortgage banker to see how this affects you based on your location. 

What’s appealing to many about FHA loans is that you can make a low down payment (as low as 3.5% of the purchase price). Keep in mind that all FHA loans require that you pay Mortgage Insurance Premium (MIP), which will increase your monthly payment. Your mortgage banker can help you determine how long you need to keep the Mortgage Insurance.  
</li>
<li><span style={{fontWeight:'bold'}}>VA Loan </span>– VA Loans are offered through the U.S. Department of Veterans Affairs (VA). These loans are available only to military service members who meet at least one of the following requirements:
You have served 90 consecutive days of active service during wartime, OR
You have served 181 days of active service during peacetime, OR
You have more than 6 years of service in the National Guard or Reserves, OR
You are the spouse of a service member who has died in the line of duty or as a result of a service-related disability.
<br/>
<br/>
Just like FHA loans, VA loans are guaranteed by the federal government to insure the lender against any potential losses. The biggest benefit of a VA loans is that you can borrow 100% of the purchase price of a home, up to the borrowing limit as determined by your county. If your loan amount is over the borrowing limit, you can still purchase the home provided you put down 25% of the difference between the county limit and the purchase price. But if your home loan is at or under the borrowing limit, you can get a home with no down payment. 
</li>
<br/>
<br/>
<li><span style={{fontWeight:'bold'}}>Conventional Loan</span> – A conventional loan is a mortgage that is not backed by any government agency, such as the Federal Housing Administration (FHA) or Department of Veterans Affairs (VA). However, conventional loans must meet the lending requirements of Fannie Mae and Freddie Mac, the two largest government-controlled buyers of mortgage loans in the U.S.
<br/>
<br/>
There are many advantages to a conventional loan, such as higher loan limits than FHA, being able to secure one for a second home or investment property, and lower mortgage insurance rates than FHA loans. Of course, to qualify for a conventional loan there are credit score and down payment requirements, as well as other guidelines to meet. 
<br/>
<br/>
Conventional loans are the most common type of mortgage. In fact, according to the US Census Bureau, in 2018, 74% of all mortgage loans were conventional loans.
</li>
</ul>
<span style={{fontWeight:'bold'}}>One More Option – Conforming or Jumbo </span>
Finally, depending on how much you are borrowing, you might fall into either the conforming or jumbo category. Remember those two government agencies noted earlier – Fannie Mae and Freddie Mac? They are the two government-controlled corporations that purchase and sell mortgages. In other words, they buy loans from the lenders who generate them, and then sell them to investors via Wall Street. 
<br/>
<br/>
A conforming loan falls within their maximum loan size limits (it “conforms” to Fannie Mae’s and Freddie Mac’s criteria). In contrast, a jumbo loan exceeds the conforming loan limits established by Fannie Mae and Freddie Mac. 
<br/>
<br/>
Because jumbo loans are much higher in value, they present a higher risk to the lender. As such, borrowers typically must have excellent credit to qualify, and they must have a higher down payment. 
<br/>
<br/>
<span style={{fontWeight:'bold'}}>Mortgages Made Simple</span>
Once most people see all these mortgage options broken down by category, the mortgage terminology makes more sense and mortgages in general seem less stressful. The best advice is to always talk with your mortgage banker about any questions or concerns. They can also help steer you to the right mortgage product for your current needs.
<br/>
<br/>
When you’re ready to apply for a mortgage or refinance an existing one, contact us at 707-254-8891 or hilda.hensley@benchmark.us. We can also direct you to the perfect real estate agent to help you.

    </p>
    ,
    blogSnippet: 'When it comes to getting a mortgage, you have options. Unfortunately, for many people, the various mortgage options seem confusing and overwhelming. In reality, they’re not, especially when you break them down into categories.',
    blogImage:'https://i.ibb.co/q71w6Tc/mortgage-types.jpg',
  },
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
]
  const BlogHomePage = () => (
    <div>
    <Link to={{ pathname:'/blog' }}><h3 className="homepage-header"> Mortgage Lending 101 </h3></Link>
    <div style={{display:'flex', flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
    {homeBlogs.length > 0 ? 
    homeBlogs.map((blog, index) => 
    <div style={{padding:'0 24px 24px', minWidth: '26%', maxWidth:'380px'}}>
    <div className="card">
    <img className="card-image" src={blog.blogImage}/>
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