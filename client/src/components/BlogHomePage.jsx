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
    blogTitle: 'Top 10 Mortgage Questions Answered',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
<h1>A Special Report from Hilda Hensley, Mortgage Banker with Benchmark Mortgage</h1>
<br/><br/>
Since most people apply for a mortgage only a few times in their life, it’s natural that they have many questions about how the process works. After all, when you don’t do something every day (or even every year), it’s difficult to know exactly all the steps involved and all the nuances of the mortgage application and approval process.
<br/><br/>
At Benchmark Mortgage, we hear some variation of the same questions every day. So if you’re serious about securing a mortgage, here are the answers to the most common questions borrowers ask. 
<br/><br/>
<h1>1. What credit score do I need to qualify for a mortgage?</h1>
Most people think they need perfect credit to secure a mortgage. That’s not necessarily true. Fortunately, there are many mortgage programs available for people with less-than-perfect credit, including FHA and VA mortgages. In reality, your credit score is only one part of the approval process. Other factors, like yearly income, debt to income ratio, percent of credit being used, and employment status are just as important as your credit score. Ultimately, while an excellent credit score will likely secure you a lower interest rate, good and even okay credit won’t necessarily disqualify you from a mortgage. 

2. How large of a mortgage can I qualify for?
A better question is, “How large of a mortgage do I feel comfortable paying?” Just because you qualify for a certain amount doesn’t mean you’ll want to purchase a home at that price range. You really need to consider your income, your monthly financial obligations (including property taxes, home insurance, and HOA fees, if applicable), your savings and retirement goals, and what kind of lifestyle you want to live (how much “fun money” you want left over each month). 

Take your time considering all these things. Look back over your monthly budget for the past three months to ensure you don’t miss anything important. Then, discuss your finances with your mortgage banker so they can help you choose the best option for your needs. 

3. Do I need to get pre-approved for a mortgage before looking at houses?
You can certainly visit open houses and start getting a feel for neighborhoods and home styles before getting a mortgage pre-approval. However, once you get a Realtor involved, they will usually want to know that you have been pre-approved for a mortgage before showing properties to you. 

Realize that being pre-qualified is not the same thing as being pre-approved. In short, pre-qualification gives you a rough idea of a price range you can afford based on verbal information you supply. None of your information is verified and no credit report is run. Pre-approval is a much more involved process whereby you provide financial documents for review and get a credit report pulled. You will also receive an exact maximum amount that you’re approved for. 

4. Do I even qualify for a mortgage?
Many people, especially first-time home buyers, often wonder if they are actually eligible for a mortgage or if they’re wasting their time even applying. Self-doubt, particularly around big financial decisions, is quite common. Realize that no one has a crystal ball, so the only way you’ll know for sure is to run the numbers. At the very least, even if you don’t qualify, you’ll know what you need to work on to turn that denial into an approval. Your mortgage banker can help you create a plan so you can reach your home ownership goals sooner rather than later. 

5. Why might I be denied?
There are a number of reasons why a mortgage application might be denied. Too many late payments, too much credit card debt, unstable employment history, and many other factors could trigger a denial. Lenders want to ensure you are a good risk, so they’ll vet you very thoroughly. 

Realize, though, that a denial does not equal a “no.” It simply means “not now.” The majority of times, the borrower can quickly correct the issues that triggered the denial. For example, perhaps you forgot about that unpaid bill from three years ago and it went to collections. Pay it now and that issue is fixed. Or maybe you had a few late car payments while you or a family member was undergoing intense medical treatment. All you may need is to write a short explanation (and provide some proof of the situation), and that issue is fixed. Therefore, if your application is denied, don’t give up. Talk with your mortgage banker to determine how you can rectify whatever issues arise. 

6. What documents do I need?
To secure any mortgage, you’ll need to supply a lot of documentation. The most common things asked for are tax returns, pay stubs, bank statements, profit and loss statements if self-employed, and other financials like brokerage accounts and investments. You’ll also be asked to sign a number of documents, such as loan disclosures, credit authorization forms, letters of explanation, and so on. 

While getting all your documentation together can be frustrating and time consuming, work diligently to get everything in by the due date requested. The faster you supply requested information, the faster your loan can be processed. 

7. What type of mortgage should I get?
When it comes to type of mortgage, you have options. Whether you choose an adjustable-rate mortgage or a fixed-rate mortgage for 15 or 30 years depends on your unique situation. To understand the many differences, review this article we wrote about mortgage options. When you’re done, talk with your mortgage banker to review the various options so you can make the best choice for your needs.    

8. How big of a down payment do I need?
A lot of people think they must have 20% of the home’s purchase price as a down payment. That’s not always needed. There are many loan options that require as little as 3% to 5% down (and even some that still offer zero down options). In addition, you may qualify for a down payment assistance program. These are typically grant and government funding options that assist homebuyers who meet certain criteria with their down payment. As long as you’re not buying an investment property or a vacation home, you can still get a mortgage with a relatively small down payment. 

9. Do I need to pay mortgage insurance?
Whether you pay mortgage insurance depends on how much of a down payment you provide. If your down payment is less than 20%, then mortgage insurance will be required. As you make payments and build equity in your home, you may be able to get your lender to remove the mortgage insurance at a later date. Once your loan-to-value ratio reaches 80% or lower, contact your lender to see what they can offer. 

10. How quickly can I get a mortgage?
In general, most loans take anywhere from 30 to 45 days to process. However, sometimes things happen and the timeline is delayed. In these cases, it can take up to 60 days for the loan to process. Realize that part of this timeline depends on you and how long it takes you to supply requested documentation. So the more timely you are, the better your chances for keeping the timeline on track. 

What Questions Do You Have?
While this list is not exhaustive, it does cover the most common questions our clients typically ask. Use these answers to help prepare and guide you in the mortgage application process. And of course, feel free to ask us even more comprehensive questions. The more you ask, the more you’ll know, and the more confident you’ll be in the mortgage approval process!

When you’re ready to apply for a mortgage or refinance an existing one, contact us at 707-254-8891 or hilda.hensley@benchmark.us. We can also direct you to the perfect real estate agent to help you.


    </p>,
    blogSnippet: 'A Special Report from Hilda Hensley, Mortgage Banker with Benchmark Mortgage. Since most people apply for a mortgage only a few times in their life, it’s natural that they have many questions about how the process works.',
    blogImage: 'https://i.ibb.co/VQ6XWJs/Blog-Ten-Questions.jpg',
  },
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