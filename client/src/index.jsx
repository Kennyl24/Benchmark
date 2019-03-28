import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Directions from './components/Directions.jsx'
import FrontPageModal from './components/FrontPageModal.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ConnectTab from './components/ConnectTab.jsx'
import HomePage from './components/HomePage.jsx'
import Reviews from './components/Reviews.jsx'
import BlogPage from './components/BlogPage.jsx'
import VlogPage from './components/VlogPage.jsx'
import Privacy from './components/Privacy.jsx'
import VaLoans from './components/VaLoans.jsx'
import Refinance from './components/Refinance.jsx'
import FHA from './components/FHA.jsx'
import Conventional from './components/Conventional.jsx'
import MoreServices from './components/MoreServices.jsx'
import NotFound from './components/NotFound.jsx'

import FirstTimeHome from './components/FirstTimeHome.jsx'
import IndividualAbout from './components/IndividualAbout.jsx'
import Individualblog from './components/Individualblog.jsx'
import Information from './components/Information.jsx'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import {isMobile} from 'react-device-detect';

import "isomorphic-fetch"
import "@babel/polyfill";


import StreetViewPanormaWithAnOverlayView from './components/Test.jsx'
const images = [
      {
        url: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'VA Loans',
        width: '33.3%',
        descripition:''
      },
      {
        url: 'https://images.pexels.com/photos/1166414/pexels-photo-1166414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'First Time Home Buyers',
        width: '33.3%',
        descripition:''
      },
      {
        url: 'https://images.pexels.com/photos/8556/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Refinancing',
        width: '33.4%',
        descripition:''
      },
      {
        url: 'https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Conventional loans',
        width: '33.3%',
        descripition:''
      },
      {
        url: 'https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Pre-Approvals',
        width: '33.3%',
        descripition:''
      },
      {
        url: 'https://images.pexels.com/photos/1549000/pexels-photo-1549000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'And More!',
        width: '33.4%',
        descripition:''
      },
    ];
const blogs = [
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
<ul>
<li>You have served 90 consecutive days of active service during wartime, OR</li>
<li>You have served 181 days of active service during peacetime, OR</li>
<li>You have more than 6 years of service in the National Guard or Reserves, OR</li>
<li>You are the spouse of a service member who has died in the line of duty or as a result of a service-related disability.</li>
</ul>
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
<span style={{fontWeight:'bold'}}>One More Option – Conforming or Jumbo </span><br/>
Finally, depending on how much you are borrowing, you might fall into either the conforming or jumbo category. Remember those two government agencies noted earlier – Fannie Mae and Freddie Mac? They are the two government-controlled corporations that purchase and sell mortgages. In other words, they buy loans from the lenders who generate them, and then sell them to investors via Wall Street. 
<br/>
<br/>
A conforming loan falls within their maximum loan size limits (it “conforms” to Fannie Mae’s and Freddie Mac’s criteria). In contrast, a jumbo loan exceeds the conforming loan limits established by Fannie Mae and Freddie Mac. 
<br/>
<br/>
Because jumbo loans are much higher in value, they present a higher risk to the lender. As such, borrowers typically must have excellent credit to qualify, and they must have a higher down payment. 
<br/>
<br/>
<span style={{fontWeight:'bold'}}>Mortgages Made Simple</span><br/>
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
      <br/>
      Applying for a mortgage requires that you do certain things, such as check your credit, get your financial papers in order, and save as much money as possible for your down payment. But there are also several things you should NEVER do when applying for a mortgage – things that could potentially cause you to lose your mortgage mid-application.
<br/>
<br/>
To ensure you don’t sabotage your mortgage approval, be sure to avoid the following five things. 
<br/>
<br/>
<br/>
<ol>
<li><span style={{fontWeight:'bold'}}>Don’t make any big purchases.</span> Hold off on buying that new car or boat until after your loan has closed. Even if you feel comfortable with all the new payments, your mortgage lender may determine that you are overextending yourself. </li>

<li><span style={{fontWeight:'bold'}}>Don’t apply for new credit.</span> It’ll lower your credit score. Keep your credit report as stable as possible when applying for a mortgage. Your debt-to-income ratio is a big factor in your lender’s decision. Keep this percentage stable by not taking on new credit. </li>

<li><span style={{fontWeight:'bold'}}>Don’t co-sign any loans.</span> Co-signing a loan for a family member is certainly generous, but it also makes you liable for the debt if the main borrower defaults. These co-signed loans act just like a new credit inquiry for you. </li>

<li><span style={{fontWeight:'bold'}}>Don’t miss payments.</span> Your goal is to show your mortgage lender that you are a good risk for them. Therefore, make every effort to ensure you pay everything on time.</li>

<li><span style={{fontWeight:'bold'}}>Don’t make big life changes.</span> When applying for a mortgage, keep your life as stable as possible. Don’t start a new career with a new employer, start your self-employment venture, or quit your current job (no matter how much you may dislike your current position). Basically, don’t do anything that could make you look like a higher risk to lenders. </li>
</ol>
Remember, when you’re applying for a mortgage, your lender wants to see financial stability. In fact, it’s one of their biggest criteria for deciding to lend money. Therefore, don’t jeopardize your mortgage by doing anything on this list. Wait until after your mortgage is closed and you have the keys to your new home in your hands before making any major financial decisions. 
<br/>
<br/>
Is applying for a mortgage in your future? <span><Link to={{ pathname:'/contact' }} style={{color:'black'}}>Contact us</Link></span>. As mortgage bankers, we can help you make the best decision for your needs.
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
    <br/><br/>
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
    blogSnippet: 'When you apply for a mortgage, you receive many documents—one of which is a loan estimate. Find out what this vital document is and why you need to review it carefully.',
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
  {
    blogTitle:'Understanding the Closing Costs for Home Buyers',
    blogAuthor: 'Hilda Hensley',
    blogText:
    <p className="blog-text">
    Buying a home has many costs associated with it—not just the down payment, but also the closing costs. In fact, many buyers, especially first-time home buyers, are often surprised at how quickly the closing costs can add up. The average closing costs percentage is about 2% to 5% of the purchase price, but 3% to 6% is certainly not uncommon. 
    <br/><br/>
    Here are the typical closing costs buyers are responsible for. Since exact fees vary widely based on location and lender requirements, talk to your mortgage banker for specific details. 
    <h4 style={{paddingTop:'60px'}}> Lender Related Closing Costs </h4>
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
Need advice on getting a mortgage pre-approval? Before you apply for your next mortgage, <span><Link to={{ pathname:'/contact' }} style={{color:'blue', textDecoration:'underline'}}>contact us.</Link></span> As mortgage bankers, we can help you make the best decision for your needs.

    </p>
    
    ,
    blogSnippet:'There’s a big difference between a mortgage pre-approval and a mortgage pre-qualification. Many home buyers think these terms are interchangeable, but they are not. Here’s the difference.',
    blogImage:'https://i.ibb.co/StZkbHS/Pre-Approved-vs-Pre-Qualified1.jpg',

  }, 
  {
    blogTitle:'Your Mortgage Application Checklist',
    blogAuthor: 'Hilda Hensley',
    blogText: <p className="blog-text">
    {/* <h2>Your Mortgage Application Checklist</h2> */}
    <div style={{paddingTop:'40px'}}>
    Before you apply for a mortgage, you’ll need to gather many different documents to complete your mortgage application. The better prepared you are before you meet with your lender, the less stressful the mortgage application process will be. Here is a handy checklist of the most common documents you’ll need to have ready.
    </div>
    <h4 style={{paddingTop:'140px'}}>General:</h4>
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
When you’re ready to begin your mortgage application,<span><Link to={{ pathname:'/contact' }}style={{color:'blue', textDecoration:'underline'}}>contact us.</Link></span>  As mortgage bankers, we can help you make the best decision for your needs.
   
    </p>,
    blogSnippet: 'Before you apply for a mortgage, you’ll need to gather many different documents to complete your mortgage application. Here is a handy checklist of the most common documents you’ll need to have ready.',
    blogImage:'https://i.ibb.co/jG7Bb2C/checklist.jpg',

  },
      {
            blogTitle: 'Mortgage Banker Versus Mortgage Broker',
            blogAuthor: 'Hilda Hensley',
            blogText: 
            <p className="blog-text">
        <h1 className="blog-subtitle"> Should You Use a Mortgage Banker or a Mortgage Broker?</h1>
        
        When it’s time to secure a home loan, many people seek out a mortgage broker. But is this your best option? Would a mortgage banker be a better option?
        
        If you’re not sure of the difference between a mortgage broker and a mortgage banker, you’re not alone. Most people use the terms “mortgage broker” and “mortgage banker” interchangeably. In reality, they are two very different things. 
        
        <h2 className="blog-subtitle2" style={{paddingTop:'20px'}}>  Mortgage Broker </h2> 
        A mortgage broker deals with many different wholesale lenders. The broker is an independent operator and can be a one-person office or a large organization with different loan agents acting under the one broker’s license. Mortgage brokers do not have affiliation with any one company. As a result, they are at the whim of the individual wholesale lenders guidelines, overlays, timeframes, and underwriters. Often, they don’t have strong relationships with underwriters, and communication is not encouraged. 
         
        <h2 className="blog-subtitle2">  Mortgage Banker  </h2> 
        A mortgage banker is also called a correspondent lender. Mortgage bankers are independent offices working under a corporate umbrella where they underwrite and fund/close their loans in their own name.  They retain the servicing of the loans or they sell the servicing after closing. Mortgage bankers often have deep relationships with their underwriters, who are dedicated to the team at the mortgage banker’s office. They work in concert with underwriters to ensure each and every possible loan reaches the closing table.  
        
        <h2 className="blog-subtitle2">  Which is Better?  </h2> 
        So which is better, the mortgage broker or the mortgage banker? While the mortgage broker might have been a competitive choice in the past, today’s mortgage programs are more commoditized, which means you really need a mortgage banker working for you. By having a mortgage banker in control of your home loan process, you’ll get better service, more competitive pricing, and often a faster path to closing on the loan. 
        
        Before you apply for your next mortgage, <span><Link to={{ pathname:'/contact' }} style={{color:'blue', textDecoration:'underline'}}>Contact Us</Link></span> . As mortgage bankers, we can help you make the best decision for your needs.
        
              </p>
            ,
            blogSnippet:'When it’s time to secure a home loan, many people seek out a mortgage broker. But is this your best option? Would a mortgage banker be a better option? Learn the difference between the two',
            blogImage: 'https://i.ibb.co/YtcC90W/3.jpg'
      },
       {
            blogTitle: 'Fast Track your Mortgage Approval',
            blogAuthor: 'Hilda Hensley',
            blogText: 
            <p className="blog-text">
        Many people think getting a mortgage approval is a difficult and stressful process. Since a mortgage is often the biggest financial obligation someone has, it’s no wonder qualifying for one requires some work. Between the mounds of paperwork and the waiting time involved as approvals are processed, it’s normal to feel anxious and stressed. However, there are steps you can take before you apply that can make getting a mortgage approval easier.
        <br/>
        As a mortgage banker who has helped thousands of people through the home-buying process, here are my top tips to fast-track your mortgage approval. 
        
        <h3> 1. Check Your Credit </h3>
        Your credit score is vital to any type of lending decision, particularly a mortgage. Realize, though, that this does not mean you must have perfect credit. However, the higher your credit score, the lower your interest rate will likely be. When you check your credit, you can often find an estimation of your score through your bank, your credit card issuer, or even via online credit monitoring sites. But your score is only half the equation. You’ll also want an actual copy of your credit report from each of the three credit reporting agencies: Experian, Equifax, and TransUnion. Review each agency’s report for accuracy. If something doesn’t seem right, get it fixed before you apply for a mortgage.
        
        <h3> 2. Save for a Down Payment </h3>
        Almost all mortgages require a down payment. The exact amount can range anywhere from 5% to 20% depending on the loan type. Realize that if you put less than 20% down, your mortgage lender will require you to carry PMI (Private Mortgage Insurance). The cost of PMI varies, but it’s usually around one half of 1% of the loan amount. So if you can avoid it, you should. You may be able to remove it later once your loan balance is paid down enough so that you have at least 20% equity. You’ll need to talk to your lender for specifics regarding this option. 
        
        <h3> 3. Build a Nest Egg </h3>
        In addition to saving for a down payment, you’ll also want some extra cash on hand. Most lenders prefer to see that you have a couple of months of mortgage payments in reserve. No mortgage lender wants to think you’ll be living paycheck to paycheck with nothing saves for emergencies. One appliance repair shouldn’t impede on your ability to make your mortgage payment. Additionally, the greater your reserves, the more that can help make up for less than perfect credit history.
        
        <h3>4. Be Realistic About What You Can Afford </h3>
        We all want our dream home now. But depending on your circumstances, that dream home may have to wait a few years. Be honest about what you can really afford. What kind of monthly payment can you comfortably carry? Remember that your mortgage amount may also need to include PMI, homeowner’s insurance, and property taxes. Calculate all this into your equation. Also look at your debt to income ratio, or DTI. This is the amount of monthly debt payments you have compared to your monthly income. Most mortgages will allow a maximum DTI of 41%. Ideally your DTI should be no higher than 36%. If your DTI is too high, or if you bite off more than you can chew in terms of a monthly payment, you’ll be more likely to miss mortgage payments if an emergency arises. 
        
        <h3>5. Get Your Documents Ready </h3>
        Getting a mortgage requires a lot of paperwork and documentation. If you come to your lender with all the documents they are likely to need, you can make the process of getting a mortgage faster and less stressful. Here are the most common documents you’ll need to have ready.
        
        <h4>General:</h4>
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
        
        You Can Get an Easy Mortgage Approval
        <br/>
        <br/>
        Remember that you’re never alone when getting your mortgage. Both your mortgage banker and real estate agent can help guide you through the process to make it easier. So while getting a mortgage can be a big undertaking, it doesn’t have to be a stressful or difficult process. By doing some financial pre-planning, you can get approved and reap the rewards of home ownership.

When you’re ready to apply for a mortgage, contact us at 707-254-8891 or hilda.hensley@benchmark.us. We can also direct you to the perfect real estate agent to help you.
            </p>
            ,
            blogSnippet:'Many people think getting a mortgage approval is a difficult and stressful process. Since a mortgage is often the biggest financial obligation someone has, it’s no wonder qualifying for one requires some work.',
            blogImage: 'https://i.ibb.co/vjsD0p9/app.jpg'
          },
  {

    blogTitle: 'Why an Online Mortgage May Not Be Your Best Option',
    blogAuthor: 'Hilda Hensley', 
    blogText: 
  <p className="blog-text">

We live in an era where people want everything online, from online shopping and food delivery to an online mortgage and doctor visit. But is online really better, especially for your mortgage needs?

Chances are you’ve seen numerous ads for an “easier” and “faster” way to get your mortgage. Just press a button and in a few moments you can have a mortgage approval in your hands. Unfortunately, few people question whether that online mortgage is the best mortgage for their needs. This is where an experienced mortgage banker can help. 

    <h2>Why a Mortgage Banker is Better than an Online Mortgage</h2>
    <p className="blog-text">
Mortgage bankers are skilled at helping you make sure you have not just any old mortgage, but the best mortgage for your unique situation. Rather than place you in a one-size-fits-all option, mortgage bankers analyze your situation and look at both your long-term and short-term goals. Armed with this knowledge, they can help you secure the right mortgage that enables you to reach your financial goals. The fact is that no online mortgage site can give you this type of professional advice.
    </p>
    <p className="blog-text">
Aside from advice, mortgage bankers can usually give you superior customer service compared to an online mortgage site. Think about your last customer service call to a large company. Assuming you made it through the phone maze and actually got to a live person, you probably had to re-explain your situation to each person you spoke with. Getting the same person to help you more than once rarely occurs, so you’re at the mercy of the last person’s note taking skills and luck of the draw of who you will speak with during this call. 
    </p>
    <p className="blog-text">
A good mortgage banker, on the other hand, creates a relationship of trust and reliability. Because they know you and your situation, they can hold your hand through the process, help prevent you from making major mistakes, and answer all of your questions. You get to work with the same person throughout the entire transaction, and even have access to them after your loan is closed. It’s a level of peace of mind that no online mortgage option can offer.
    </p>
    <p className="blog-text">
So before you apply for your next mortgage, contact us. We can help you make the best decision for your needs. 
    </p>
  </p>,
    blogSnippet: 'We live in an era where people want everything online, from online shopping and food delivery to an online mortgage and doctor visit. Learn why online may not be better, especially for your mortgage needs.',
    blogImage: 'https://i.ibb.co/2PXHtrR/euhfwue.jpg'
  },
  {
    blogTitle: 'FHFA Announces Conforming Loan Limit Increase In 2019',
    blogAuthor: 'I Am Benchmark',
    blogText: <p className="blog-text">
      The Federal Housing Finance Agency has announced that the maximum conforming loan limits for mortgages has increased.
       In most of the country, the confirming loan limits will increase nearly 6.5%, from $453,100 to $484,350 for 2019. For most high-cost areas, where 115% of the local median home value exceeds the loan limit, the loan limit for one unit properties will be $726,525.
      <h2>What Does This Mean for Homebuyers?</h2>
      <p className="blog-text">
    You can now purchase a home with a higher sales price using a conventional conforming loan through the FHFA regulated Fannie Mae or Freddie Mac.

The new limits are effective January 1st, 2019. Typically, the VA and Federal Housing Administration (FHA) are expected to adopt the same increased loan limits for 2019 for FHA and VA loans.
      </p>
    
    
    </p>,    
    
    blogSnippet: 'The Federal Housing Finance Agency has announced that the maximum conforming loan limits for mortgages has increased. In most of the country, the confirming loan limits will increase nearly 6.5%, from $453,100 to $484,350 for 2019. For most high-cost areas, where 115% of the local median home value exceeds the loan limit, the loan limit',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/jumping-on-bed.jpg'
  },
  {
    blogTitle: 'Nervous About Buying? Here’s A Dose of Confidence',
    blogAuthor: 'I Am Benchmark',
    blogText: <p className="blog-text">
      The Federal Housing Finance Agency has announced that the maximum conforming loan limits for mortgages has increased.
       In most of the country, the confirming loan limits will increase nearly 6.5%, from $453,100 to $484,350 for 2019. For most high-cost areas, where 115% of the local median home value exceeds the loan limit, the loan limit for one unit properties will be $726,525.
      <h2>Can You Relate? If So, You’re In The Right Place!</h2>
      <p className="blog-text">
    Be confident that you can do it! The basics are pretty simple. To qualify in the current market, you will need a down payment (would you believe that you don’t need 20%), a stable income, and a good credit history.

You will have contact with your lender, your agent, and other professionals whose roles help get you into your home. These pros are also valuable resources on your journey home.
        <h2>5 Easy Steps</h2>
        <p className="blog-text">
     Ready to apply? Here are 5 steps to follow as suggested by Freddie Mac:
          <br/>
1. Check your credit score and history.
Though the average FICO score for closed loans was 731 (September 2018 according to Ellie Mae), there are loan products for a wide range of scores. It’s just a good idea to know where you stand before applying.
          <br/>
2. Gather your documents.
You will need to be able to verify your income, which you can do with W-2 forms or tax returns, your credit history, and statements verifying cash assets (bank statements, investment statements, and the like).
          <br/>
3. Contact your loan officer!
Your loan officer can help you develop a spending plan, help you determine how much home you can afford,review your income, expenses and financial goals, and recommend a real estate agent who knows the market and will work for your best interests. With a pre-approval letter in hand, sellers will see your offer as legitimate, and will be more likely to accept. You may get pre-approved by your loan officer. Don’t have one? Meet our team or contact us today!
          <br/>
4. Contact your real estate agent.
Your real estate agent can help you find the right home for you in your price range, be your advocate in pricing negotiations, and be a great source of advice in the specifics of what you’re looking for in a home, neighborhood, and location.
        </p>
        <h2>Take Action</h2>
        <p className="blog-text">
      Armed with the information above, you are ready to start doing your own research. Just remember to know how much house you can afford, stick to your budget, and be mentally and emotionally prepared. Making dreams come true takes a little effort and responsibility. At Benchmark, we are here to help make it as easy as it can be.
        </p>
      </p>
    
    
    </p>,
    blogSnippet: 'If you are interested in buying a house, but do not know what you might need, or whether you can qualify, you’re not alone. Many would-be buyers are intimidated by the thought of what it takes to buy a home. Some wonder whether they can afford to buy, if they have enough saved for a',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/confident-buyers-in-new-home.jpg'
  },
  {
    blogTitle: 'Can I Still Get A VA Loan With Bad Credit?',
    blogAuthor: 'I Am Benchmark',
    blogText:
    <p className="blog-text">
    Unfortunately, it depends on the situation and reasons, so there is no simple answer for bad credit. A few potential reasons could be that you have experienced a divorce which led to a bankruptcy, mismanaged your finances, experienced job loss, or any other financial hazards.

Your credit is calculated from many moving parts. The good news is that your credit score is constantly changing! If you take steps to improve your financial habits, you may also gain an improved credit score in addition to greater peace of mind.

At Benchmark, we don’t leave you to figure it out all on your own.
      <h2>You are working hard for the chance to buy your dream home. Shouldn’t your lender, at least, work just as hard?</h2>
      <p className="blog-text">
    Knowing what improvements to make when improving your credit can be tricky. That’s where we can help. For example, while some factors apply to everyone, there will be others that only apply to you.

    Some strategies you could use to positively impact your score very quickly are:
        <br/>
    1. Keep credit card balances low: I like to call this the rule of 30. Your balance accounts for 30% of your credit score. You want to make sure that your utilization ratio is less than 30%. For example, if you have a credit limit of $1,000, your balance should NEVER exceed $300. If you are already over that, pay it down to where it is less than 30%. By far, this is the mistake that most people make.
        <br/>
    2. Pay your debts: This is not always as simple as it seems, but this accounts for 35% of your score. Something to keep in mind is that paying off new debt has a greater impact than paying off old debt. If you have a newer open credit card, pay that balance first.
        <br/>
    3. Clear up any mistakes: Did you know that as many as 4 out of 5 people have errors on their credit reports*? The odds that you may be one of them are high at 80%. While you can pull your own credit for free once a year, credit reports can be difficult to read. At Benchmark, we review your credit report with you to ensure your credit’s accuracy. If errors are found on your report, you have the opportunity to correct them.
        <br/>
        <p className="blog-text">
    Ratio of used credit and payment of debt combine to account for 65% of your score. The next biggest factor is time, or the length of your credit history. If you are trying to improve your credit, it is important that you do not close your credit card accounts. This hits you on two categories: one is your credit utilization ratio ,or how much you owe, because the ratios will not be calculated properly on closed accounts (you’d have debt, but no extra credit limit), and the other is on length of credit history, because a closed account does not report a length of time.
        </p>
      </p>
    
    
    </p>,     
    blogSnippet: 'Unfortunately, it depends on the situation and reasons, so there is no simple answer for bad credit. A few potential reasons could be that you have experienced a divorce which led to a bankruptcy, mismanaged your finances, experienced job loss, or any other financial hazards. Your credit is calculated from many moving parts. The good',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/bad-credit-mortgage-graphic.jpg'
  },
  {
    blogTitle: 'Benchmark and The Patriot Tour by Team Never Quit',
    blogAuthor: 'I Am Benchmark',
    blogText: <p className="blog-text">
    This year, we will be hitting the road with the 2018 Patriot Tour! Our Team is proud to have changed the way VA lending is done, and we take a “never quit” attitude with our veterans and their dreams.
      <br/><br/>
NO MORE will the veteran be taken advantage of. We have a heart and passion for our veteran community, and we pride ourselves in making the home financing experience amazing. Setting the industry standard for 20 years, we are proud to have helped make the American Dream of home ownership become a reality for more than 100,000 Americans. Home ownership has always been the American dream and we believe that no one is more deserving than those who have served our country.
      <br/><br/>
The Patriot Tour features retired Navy SEAL Marcus Luttrell, New York Times best selling author of “Lone Survivor”, a riveting tale of the heroic sacrifices of Marcus and fellow SEAL Team members assigned to Operation Red Wings in Afghanistan;  Taya Kyle, author of ‘American Wife’, Executive Director of the Chris Kyle Frog Foundation, and wife of the late U.S. Navy SEAL Sniper Chris Kyle; retired U.S. Army Capt. Chad Fleming; and retired Navy SEAL and ultra-marathon runner David Goggins.
      <br/><br/>
The Patriot Tour brings together things worth protecting, and things worth celebrating: Family, Service, Sacrifice, and Community. We are excited to be joining the Patriot Tour with these amazing heroes. Stay tuned for more exciting updates as we tour the country, coming to a city near you!
    </p>,
    blogSnippet: 'Benchmark Mortgage is proud to announce our partnership with Team Never Quit. This year, we will be hitting the road with the 2018 Patriot Tour! Our Team is proud to have changed the way VA lending is done, and we take a “never quit” attitude with our veterans and their dreams. NO MORE will the',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/40223498_10217472993639726_8198719343995912192_n.jpg'
  },
  {
    blogTitle: '2018 Homeownership Profiles: Millennial Buyers',
    blogAuthor: 'I Am Benchmark',
    blogText: <p className="blog-text">
    In 2017, Australian millionaire Tim Gurner famously attempted to blame millennial homebuyer obstacles on their inability to avoid frivolous spending on $19 avocado toast, in comments that were widely mocked throughout the internet.
      <br/><br/>
Many commentators are still quick to point the finger at extravagant spending to explain why homeownership among younger adults has declined compared to previous generations. However, the more likely culprit is soaring student loan debt and a limited supply of homes causing rapidly inflating prices, which is making it more difficult for millennials to afford homes.
      <br/><br/>
Despite what you hear, it’s not all doom and gloom for aspiring millennial homebuyers. According to the National Association of Realtors (NAR) latest study, millennials continue to be the largest generational cohort of buyers, making up 36% of the purchase market.
      <br/><br/>
Check out the latest statistics and trends among this influential bloc of homebuyers.
      <h2>Stats About Millennials </h2>
Many people still think of millennials as teenagers, instead of young adults in their 20’s and 30’s who currently make up the largest generation in the workforce. NAR’s study defines millennials as buyers age 20-37.
      <br/><br/>
Of this group:
      <br/><br/>
22% of millennial buyers are age 20-27, while 78% are age 28-37. The median age was 31.<br/>
66% were married couples, 18% were single, and 15% were unmarried couples <br/>
65% were first time homebuyers <br/>
Prior to buying, 56% rented an apartment or house, 18% lived with parents/relatives/or friends, and 24% owned a previous home<br/>
      <h2>Millennials As Homeowners</h2>
89% purchased previously built homes and 11% purchased new homes. Better price was cited as the number one reason buyers purchased previously owned homes.<br/>
Quality of the neighborhood, convenience to job, and overall affordability of homes were the top reasons millennial buyers chose their neighborhood.<br/>
The median purchase price was $220,000<br/>
44% paid asking price or higher for their home<br/>
      <h2>Millennials and Home Financing</h2>  
98% of millennials financed their home purchase, compared to 88% overall<br/>
75% used savings for the down payment, 23% used gift funds, and 21% used proceeds from the sale of a primary residence (respondents could select more than one source)<br/>
53% reported that student loans delayed saving for a home<br/>
55% reported that they made sacrifices to non-essential items like entertainment and vacations to save for a home<br/>
67% found the mortgage application and approval process not difficult or easier than expected.<br/>
Only 6% of millennial buyers had a previous mortgage application denied. The number one reason was for debt-to-income ratio, followed by low credit score.<br/>
46% of buyers had student loan debt. The median amount was $27,000.<br/>
55% used a conventional loan, 27% used an FHA loan, and 10% used a VA loan.  <br/>  <br/>
After analyzing their demographics and buying habits, it is clear that millennial buyers have become a powerful force in the housing market. As it turns out, avocado toast is not preventing millennials from buying homes.


    </p>,
    blogSnippet: 'In 2017, Australian millionaire Tim Gurner famously attempted to blame millennial homebuyer obstacles on their inability to avoid frivolous spending on $19 avocado toast, in comments that were widely mocked throughout the internet. Many commentators are still quick to point the finger at extravagant spending to explain why homeownership among younger adults has declined compared …',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/cover-1.jpg'
  },
  {
    blogTitle: 'How To Avoid Roadblocks Before Closing On Your New Home',
    blogAuthor: 'I Am Benchmark',
    blogText: <p>
    You have submitted a mortgage application, found your dream home, and put in an offer. Now what? Applying for a home loan is an ongoing process, from application to closing, that does not have to be stressful. There are several things you can do to make the process more efficient, and things not to do to avoid delaying your closing or changing the status of your approval. Below is a list of recommendations to make sure that this exciting journey progresses as smoothly as possible, all the way up to the day you receive your keys.
      <h2> DO:</h2>
      <h3>Pay bills on time</h3>
Remember to stay current on your existing accounts. Set reminders for yourself or place bills on autopay to avoid late payments, as they could cause a delay in your closing.

      <h3>Postpone career moves until after closing</h3>
Your approval is based on your current employment and income, and both need to be verified. Making career changes, regardless of the compensation, will make the verifications obsolete and cause the loan file to repeat the underwriting step. Of course, there are instances where you may not be able to control these changes. If you are considering a job change or experience an unexpected job change, give us a call.

 

      <h3>Keep financial documents available</h3>
We try to collect everything up front, however, our Underwriting team may request additional documentation. We recommend that you keep your financial records easily accessible until after closing.

 

      <h3>Save your income statements</h3>
Keep all current and upcoming income statements. There will be additional verbal verifications with your employer and your CPA, and verification of your IRS tax transcripts. Everything will need to match, so hang onto your incoming paystubs, as they may need to be updated by your underwriter.

 

      <h3>Save all pages of your bank statements</h3>
These pages may need to be updated, so be sure to keep upcoming bank statements available. This applies to all checking and savings accounts, along with any brokerage and retirement accounts.
      <h2> DO NOT:</h2>
      <h3>Make any large purchases (such as a boat or car)</h3>
Similar to the way a new credit card or credit inquiry can prevent us from being able to close your loan, making a large purchase before your closing can delay your move-in date. If you must make a large purchase, give us a call first to determine what kind of impact it could have.

 

      <h3>Make any unusually large deposits</h3>
Money used for a down payment on your home may not be borrowed money, and you will need proof that large deposits are not borrowed funds. A large deposit is defined as any amount greater than 25% of any one borrower’s monthly net income deposit.

 

      <h3>Close credit card accounts</h3>
Closing a credit card will reduce your total amount of available credit, impacting your credit score. New credit can bring your credit score down as well, so it’s best to postpone opening any new credit accounts until after closing. (see the next Do Not)

 

      <h3>Apply for new credit</h3>
New credit inquiries can have a negative impact on your credit score and your debt-to-income ratio. Any changes can create delays, change the terms of your loan, or cause your loan to be denied, in some cases. If you must open a new account, consult with us first, and we will analyze and properly document the impact.

 

      <h3>Be afraid to ask questions</h3>
If you are uncertain about what you need to do, or which steps you should take, we at Benchmark are here to help you through the process. Together, we can work towards a truly great experience purchasing your brand new home!

    </p>,
    blogSnippet: 'You have submitted a mortgage application, found your dream home, and put in an offer. Now what? Applying for a home loan is an ongoing process, from application to closing, that does not have to be stressful. There are several things you can do to make the process more efficient, and things not to do …',
    blogImage: 'http://brandonvaughn.com/wp-content/uploads/2014/01/overcoming-blocks.jpg'
  },
  {
    blogTitle: 'Construction Loans: What to Expect',
    blogAuthor: 'I Am Benchmark',
    blogText: <p>
      Building a new home offers many advantages over purchasing an existing home on the market. You are able to customize the home to your specific needs and preferences and avoid costly repairs of outdated features. New homes are often also more energy efficient and technologically equipped.

      <h2>Different from Traditional mortgages.</h2>
Securing financing for a construction loan does differ from obtaining a traditional mortgage, however. Since the home is not yet built, there is more risk for the lender because the home being purchased is used as collateral for the loan. In other words, there is no present collateral to back the loan before it is approved. Much like applying for a traditional mortgage, you will be required to submit documentation pertaining to your income, assets, and credit history to determine if you meet requirements set by the lender to qualify for the construction loan. You and your builder will also provide detailed documentation on the building plans and construction timeline to the lender to evaluate the ability for the project to be completed on time and within budget.
      <br/><br/>
Because of the increased risk that comes with building a house, you can typically expect to need a credit score of 700+ with a sizeable down payment of at least 10-20%. The specific requirements will vary based on your lender and the type of construction loan you choose.

      <h2>One-Time-Close, or “Construction-to-Permanent” loans</h2>
A one-time-close construction loan, also commonly known as a construction-to-permanent loan, is a popular choice among borrowers, because it allows you to avoid the extra expense of two closings when building your new home. Because construction and permanent financing are combined into one loan, you will save on costs associated with title and appraisal fees that would occur if there were two separate closings.
      <br/><br/>
With a one-time close program, the borrower will take out all of the financing to build the home, and the loan is closed before starting construction. Permanent house payments will not typically begin until the construction is completed. The loan is funded as the house is being built through construction draws to the builder. In order to receive these draws, the lender will conduct regular check-ins and inspections of the property to ensure the project is being completed according to the plans and timeline. Generally, you are making interest-only payments as the builder draws funds to build the home. Once construction is completed, the loan will be converted into a permanent note, and your permanent monthly house payment will begin.

      <h2>In Summary… </h2>
Construction loans are a great option for aspiring home owners who want to build their custom dream home from the ground up. While the process differs from obtaining a mortgage on an existing home, your lender can walk you through the process and advise you on the advantages and disadvantages of undergoing a building project.
      
    </p>,
    blogSnippet: 'Building a new home offers many advantages over purchasing an existing home on the market. You are able to customize the home to your specific needs and preferences and avoid costly repairs of outdated features. New homes are often also more energy efficient and technologically equipped. Different from Traditional mortgages. Securing financing for a construction …',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/cover.jpg'
  },
  {
    blogTitle: 'Benchmark Introduces New Program to Expand Options for Medical Professionals',
    blogAuthor: 'I Am Benchmark',
    blogText: 
    <p className="blog-text">
    Benchmark has launched a new mortgage product that is customized to the unique career and financial outlook of professionals in the medical field. Last year, we launched the Medical Doctor Loan Program to better serve medical residents and doctors. Now we have further expanded our options for medical professionals to include jumbo loan amounts up to $2 Million with our Preferred Medical Professional Program.
      <br/><br/>
The new Preferred Medical Professional Program is tailored to meet the needs of medical doctors within 10 years of residency, dentists and veterinarians OR newly licensed medical residents/students who are currently employed or starting new employment within 60 days of closing.
      <br/><br/>
At Benchmark, we understand what it has taken to get to this point in your medical career, so we designed our new Preferred Medical Professional Program to maximize your money, and even to exclude student loan debt in certain cases:
      <br/><br/>
Loan Amounts up to $2 million <sup>1</sup> <br/>
Student loan debt that is deferred for at least 12 months may be excluded from Debt-to-Income (DTI) calculations <br/>
Purchase and limited cash-out refinances<br/>
Loan-to-Value (LTV) up to 95%<sup>2</sup><br/>
Available on 5/1, 7/1, 10/1 + 15/1 Adjustable Rate Mortgages (ARMS)<br/><br/>

1 - minimum loan of $453,101 in most areas <br/>
2 - LTVs ≥ 90% requires Lender Paid Mortgage Insurance


    </p>,
    blogSnippet: 'Benchmark has launched a new mortgage product that is customized to the unique career and financial outlook of professionals in the medical field. Last year, we launched the Medical Doctor Loan Program to better serve medical residents and doctors. Now we have further expanded our options for medical professionals to include jumbo loan amounts up …',
    blogImage: 'https://1xajpy1pi3fu42ewvj3ek189-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Doctor-Picture-960w.jpg'
  },
];
ReactDOM.render(
  <body>
   {isMobile ?  null : <ConnectTab/>}
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/About" component={About} />
      {/* <Route  path="/About/" component={Information} /> */}
      <Route  path="/Home" component={HomePage} />
      <Route  path="/Vlog" component={VlogPage} />
      <Route  exact path="/Blog" component={BlogPage} />
      <Route  path="/blogs/"
      render={(props) => <Individualblog {...props} blogs={blogs} />}
      />
      <Route  path="/info/"
      render={(props) => <IndividualAbout {...props} images={images} />}
      />
      <Route  path="/Reviews" component={Reviews} />
      <Route  path="/Privacy" component={Privacy} />
      <Route  path="/first-time-home-buyer" component={FirstTimeHome} />
      <Route  path="/VA" component={VaLoans} />
      <Route  path="/Conventional" component={Conventional} />
      <Route  path="/FHA" component={FHA} />
      <Route  path="/Refinance" component={Refinance} />
      <Route  path="/More-services" component={MoreServices} />

      <Route  path="/Contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  </body>
  ,
  document.getElementById('app'),
);
