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
    blogTitle: 'Tips to Avoid a Mortgage Scam',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
      Because the mortgage industry is so heavily regulated, it’s hard to believe that mortgage scams exist … but, unfortunately, they do. The most common mortgage scam is a wire fraud. This is when hackers send you fake wire transfer instructions. The good news is that with a little diligence and common sense, you can stay safe.
<br/><br/>
Before closing on your home, your title company or Realtor will send you instructions for wiring your closing funds. Of course, you can opt to get a cashier’s check from your bank, thus eliminating all possibility of wire fraud and this mortgage scam. However, some people prefer to skip the trip to the bank, or they do their banking exclusively online. In this case, a wire transfer is needed.
<br/><br/>
If you’re going to do a wire transfer of funds, here are some tips to ensure you don’t fall victim to a mortgage scam.
<br/><br/>
<ol>
<li>Closely examine any wire transfer instructions you receive. Particularly, review the “from” email address. Is it really from your title company, mortgage company, or Realtor? Look at the actual address, not just the company or person’s name. </li>
<li>Don’t reply to any wire transfer instructions. Even if the email looks legitimate, it’s best not to hit the “reply” button. Ask questions directly by calling your primary contact person. If you prefer email, open a new message and type in the address you normally use. </li>
<li>Ask for verification. Forward the email to your lender, title company, or Realtor and verify the instructions are correct. Or print it out and bring it to their office to review. They’ll be more than happy to help you and ensure your money is safe. </li>
</ol>
<br/><br/>
The worst part of this mortgage scam is that there is little recourse for victims. Because the money is often wired overseas, the US law enforcement agencies don’t have jurisdiction to recover the funds. 
<br/><br/>
So always keep open communication with your lender, title company, and Realtor. And ask questions when you have any hint of doubt. That’s the best way to avoid being the victim of a mortgage scam.
<br/><br/>
Is applying for a mortgage in your future? Contact us. As mortgage bankers, we can help you make the best decision for your needs.

      </p>,
    blogSnippet: 'Because the mortgage industry is so heavily regulated, it’s hard to believe that mortgage scams exist … but, unfortunately, they do. The most common mortgage scam is a wire fraud. If you’re going to do a wire transfer of funds, here are some tips to ensure you don’t fall victim to a mortgage scam.',
    blogImage: 'https://i.ibb.co/zf2NC0F/mortgagescams.png',
  },
  {
    blogTitle: 'What to Do If Your Mortgage Application is Denied',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
      “I’m sorry … your mortgage application was denied.” Those are words no home buyer wants to hear. But sometimes it happens. Does it mean that all hope for buying a home is lost? Not necessarily. 
      <br/><br/>
Since the mortgage approval process is rigorous, there are a number of factors that could trigger a denial. The key is to find out why. Your lender should tell you exactly why your mortgage application was denied. In some cases, you may be able to quickly rectify the situation and turn the denial into an approval. In other cases, fixing the issue can take some time. 
<br/><br/>
Here are some of the more common reasons that could cause your mortgage application to be denied.
<ol>
  <li>
You recently opened a new line of credit or took out a personal loan. Taking on a new debt obligation can negatively affect your debt-to-income ratio. In simplest terms, your debt-to-income ratio is the total of all your monthly debt payments divided by your gross income. Ideally, you want to keep your debt-to-income ratio below 40%. If you couldn’t resist the opportunity to save 20% by opening a new department store credit card, pay off some debt, wait a few months, and try again.
</li>
<li>
You recently missed some debt payments. Missing payments, even if you innocently “forgot,” will definitely trigger a denial. Most lenders are most concerned about missed payments in the immediate two years; however, many credit reports will show late payments as far back as seven years, and some even longer. If your credit report is showing very old missed payments, try to get those items removed from your credit. If the missed payments are more recent, talk with your lender about the situation. If it was an extenuating circumstance, and if you have proof of that, they may be able to overlook it. 
</li>
<li>
You forgot to include important information in your mortgage application. Triple check all the numbers and data you report. For example, did you forget a zero in your figure when reporting income? Did you forget to report that “no payment due for three years” loan that’s showing on your credit report? Be thorough in your application. If you realize your forgot anything or made a mistake, fix it immediately.
</li>
</ol>
<br/><br/>
The good news is that finding out your mortgage application was denied doesn’t mean your home ownership dreams are over. It simply means you have a little more work to do. Fix what needs to be fixed, and then apply again. Before you know it, you’ll have that approval … and the new home … you’ve been dreaming of. 
<br/><br/>
Is applying for a mortgage in your future? Contact us. As mortgage bankers, we can help you make the best decision for your needs.
      </p>,
    blogSnippet: ' No one wants to hear that their mortgage application was denied. But getting a denial doesn’t mean that all hope for buying a home is lost. Here are some of the more common reasons that could cause your mortgage application to be denied.',
     blogImage: 'https://i.ibb.co/s36HbVM/2a162fca19d043f391cf53cbeb361de4.jpg',
  },
  {
    blogTitle: 'Title Insurance – Do You Need It?',
    blogAuthor:'Hilda Hensley',
    blogText: <p>
      As you go through the mortgage process, your mortgage banker will include a line item on your closing documents called Title Insurance. Many home buyers, especially first-time home buyers, are unsure what Title Insurance is and why they need it. So, let’s clear up both those questions.
      <br/><br/>
<h1>What is Title Insurance?</h1>
<br/><br/>
In simplest terms, Title Insurance protects home buyers and mortgage lenders against defects or problems with a property’s title when there is a transfer of property ownership. Homeowner’s Title Insurance protects your interests in the property, while lender’s Title Insurance protects your lender’s interest in the property. You will need both. Essentially, when you buy a home, a title company will do a records search to make sure there are no undisclosed heirs to the property, unpaid taxes, pending legal action, errors, fraud, or other problems with the deed. Once the title company declares the property’s title “clean,” they will issue Title Insurance for the property.
<br/><br/>
<h1>If the Title is Clean, Do I need Title Insurance?</h1>
<br/><br/>
Even though title companies are very thorough in their research, sometimes things get missed. Or, more commonly, a lien hasn’t posted to the property yet. For example, suppose the home seller did a big remodel on the home, but they didn’t pay the electrician. While the home was for sale, the electrician may have been sending late notices and starting legal action. However, the home may transfer ownership before the electrician was able to complete the legal paperwork to initiate a lien against the property. Even though the previous owners neglected to pay the bill, the lien goes against the home (now your home) and you are now responsible for the bill.
<br/><br/>
Title insurance ensures that you are not liable for any past issues related to the title that may transpire. Of course, if you hire an electrician while you are the owner and fail to make payment, you are responsible for any legal action or liens. Title Insurance applies to past actions that could come back and affect the property’s title. Similarly, lender’s Title Insurance protects your lender from unexpected claims against the property, such as a long-lost heir to the previous owner claiming rights to the property.
<br/><br/>
The good news is that your Title Insurance policy is valid for the entire time you own the home, whether that’s 3 years or 30 years. And you typically pay in one lump sum at closing. In other words, unlike other types of insurance, there are no monthly payments or yearly premiums to worry about.
<br/><br/>
As you can see, Title Insurance is an important part of the mortgage process. It enables you to rest easy, knowing you have a clean title, and it protects you should the unexpected happen.

      </p>,
    blogSnippet: 'As you go through the mortgage process, your mortgage banker will include a line item on your closing documents called Title Insurance. Many home buyers, especially first-time home buyers, are unsure what Title Insurance is and why they need it. Here are the answers you need.',
     blogImage: 'https://i.ibb.co/YDPwpjM/b57cb3fe060b4e365f4756e99b2b4287w-c238696xd-w685-h860-q80.jpg',
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