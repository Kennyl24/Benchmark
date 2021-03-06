import React from 'react';
import { Link } from 'react-router-dom';
import Review from './Review.jsx';

const reviews = [
{
    name: 'Maribel C.',
    review: 'I had a great experience from the beginning until the end. Hilda and her team are extremely professional. They are always there to help when needed and explain everything in detail. I would absolutely recommend them to anyone looking to buy a home or refinance their home.',
    date: '10/08/20',
    stars: 5
  },
  {
    name: 'Megan B.',
    review: 'We have worked many of times with Hilda and her team. They are always such a pleasure to work with and always make the mortgage processes easy and enjoyable. The team is extremely organized and friendly. We highly recommend Benchmark for any of your mortgage needs, including a new purchase or refinance.',
    date: '10/08/20',
    stars: 5
  },
  {
    name: 'Steven Smyth',
    review: 'Hilda was great to work with. Over the years I have had many mortgages and sometimes the process can be quite long and tedious. I felt Hilda was more like a partner thought out the entire process. She took the time to provide to provide guidance and support. I will definitely reach out to her for my next mortgage or refinance.',
    date: '10/08/20',
    stars: 5
  },
   {
    name: 'Katie Simas',
    review: 'Hilda and her team were very professional, friendly and helpful through the process of becoming pre-approved for a home loan to closing. The programs they use are user friendly and easy to submit paperwork. We started the process of purchasing a home with Benchmark being our Lender in February, and we became home owners with an amazing interest rate at the beginning of April. We were first time home buyers and we couldn’t have asked for a more smooth process for buying a home. Thank you so much Hilda and the Benchmark team for everything!!',
    date: '06/03/20',
    stars: 5
  },
{
    name: 'AJ Gracy',
    review: 'Hilda and her whole team are absolutely amazing at what they do!! I would never recommend anyone one else. They are prompt, professional and just down right wonderful people. They were ready every step of the way and always made sure I felt as if I was the only one they were helping. I could not have asked for a better experience. Getting a home loan is not the funnest thing to do but they made it effortless and I can not thank them enough for their hard work.',
    date: '08/26/20',
    stars: 5
  },

  {
    name: 'Will Carlton',
    review: 'Hilda and her team were great to work with. They know their stuff, and especially the local real estate market, and were able to get us a great rate for our first home!',
    date: '05/26/20',
    stars: 5
  },
  {
    name: 'Beto Johnson',
    review: 'Hilda was great! Very helpful though the entire process. She was very attentive with our requests and needs. Nearly all of our work together was done via email and phone, which made it very easy to find time to get the paper work together as both my wife and I work outside of the home.',
    date: '05/13/20',
    stars: 5
  },
  {
    name: 'Fred Flores',
    review: 'Working with Hilda and the team at Benchmark was a very simple process. Hilda has a great deal of experience and that made the process flow effortlessly and quickly. Everyone at Benchmark was friendly, helpful and knowledgable. They made me feel right at home and I had complete confidence that they were working hard to help me in every way possible. Hilda and the Team at Benchmark helped me get the home I wanted with as little stress as possible. What more could you ask for?',
    date: '02/04/20',
    stars: 5
  },
  {
    name: 'Macaraig Alex',
    review: 'Competent and friendly! I had a great experience working with the Benchmark team. All of my questions were answered right away and they always took the time to make sure it was an easy and comfortable process.',
    date: '02/01/20',
    stars: 5
  },
  {
    name: 'Jeremy',
    review: 'My wife and I just purchased our 1st home together with the outstanding help of Benchmark Mortgage. This being our 1st home I thought it was going to be overwhelming, but everyone at Hilda’s office made it so much better than I thought it would be. The entire team at Benchmark was EXTREMELY helpful and professional but at the same time made it feel more personal and caring , answering any questions I had , they kept me up to date on everything, they checked in with me frequently via telephone call and email , they put a rush on things even though it was during the holiday season ..I could not be more happy with them and I HIGHLY recommend them to anyone! Thank you so much Team Hensley',
    date: '01/02/20',
    stars: 5
  },
  {
    name: 'CBrewer',
    review: 'Hilda and team was super helpful and made the process very easy in purchasing our forever home. They are knowledgeable, always available and worked with us through the whole process.',
    date: '12/20/19',
    stars: 5
  },
  {
    name: 'Connie R.',
    review: 'Hilda and her team never disappoint us. Every transaction we have had with them has run smoothly and timely. In regards to communication, they outdo themselves every time and we give them a 10 out of 10.',
    date: '12/19/19',
    stars: 5
  },
  {
    name: 'Tiffanie S.',
    review: 'I would without a doubt recommend Hilda and her team for a home loan. They were extremely friendly, very responsive and available for any questions we had. Since we were selling a house and buying a new one at the same time, it could have been a stressful process but not once did we doubt or question the process. Hilda and her team made it very easy for us to understand what to expect and it all went very smoothly.',
    date: '08/13/19',
    stars: 5
  },
  {
    name: 'Jasmine',
    review: 'It’s was great working with Hilda. Good communication and available to answer questions. Working with her and her team was great. Would definitely recommend benchmark to friends and family.',
    date: '07/09/19',
    stars: 5
  },
  {
    name: 'Rebecca M.',
    review: 'We recently refinanced our home through Benchmark and could not be more pleased with the customer service we received.  Hilda and her team are efficient and professional.   They made the process easy and most of the transactions were done electronically which saved us time.  Thank you Hilda and entire Benchmark team!',
    date: '12/20/19',
    stars: 5
  },
  {
    name: 'Jerry P.',
    review: 'I have been referring this team to my clients for many years. However, recently they did a loan for our family vacation home. This re-affirmed why we trust them with all of our clients. The transaction was smooth, clear and timely. Not to mention the amazing interest rate they were able to lock for us. Five stars are not enough to describe Hilda Hensley and the Benchmark team.',
    date: '09/11/19',
    stars: 5
  },
  {
    name: 'Nancy Silva',
    review: 'Great speedy service on my refi by John Weber! and super support every step of the way!',
    date: '11/26/18',
    stars: 5
  },
  {
    name: 'cortes6',
    review: "Going through Benchmark for our purchase was the best decision we made. The team was super dedicated and made sure we got all possible assistance from local resources we did not know about! They had our best interest at heart, and they were very professional and clear. We really enjoyed the process and couldn't have been in better hands. We love Team Hensley!!",
    date: '2/19/19',
    stars: 5
  },
  {
    name: 'Reggie N.',
    review: 'Johnathn and his team were amazing in handling my home loan purchase! They were very knowledgeable and efficient. Johnathn met with me in person initially and erased all the fears I had about buying a home and helped me every step of the way through the process. In the end they were be able to close my loan in under 3 weeks which helped me get my offer accepted. I could not have done this without Johnathn and his Benchmark team. I would recommend him and then to anyone', 
    date: '6/24/2018', 
    stars: 5,
  },
  {
    name: 'Jennifer J.',
    review: 'Hilda and her team are great! They are great communicators and get things done! We have used them for 3 purchases and a refi. Always a great transaction!!', 
    date: '10/18/2018', 
    stars: 5,
  },
  {
    name: 'Jillian O.',
    review: "Hilda and her awesome team helped us purchase our very first home here in Napa. We got a CalHFA loan to buy our home and they made the process very smooth and listened to what price range we were wanting to go with. The entire process from start to finish was really easy and their communication is spot on. The team would email or call us to update us on things, and I appreciated Hilda meeting with us in person when we first got started, I'm more of an in-person kind of girl. We would highly recommend Benchmark to everyone we know!", 
    date: '11/01/2018', 
    stars: 5
  },
  {
    name: 'Kevin D.',
    review: 'We were looking to purchase a new home and used Hilda and her team at Benchmark Mortgage.  The process was very smooth and effortless.  Hilda and her staff were very professional and knowledgeable navigating the complex loan market and explained everything upfront and though out the process.  We would use Hilda and Benchmark Mortgage again and refer all of our friends to Hilda as well.  You will not find anyone better.', 
    date: '8/01/2017', 
    stars: 5,
  },
  {
    name: 'Timothy G.',
    review: "Benchmark Mortgage was excellent in refinancing for the first time.  All my expectations were met and the team was extremely responsive to my questions.  I couldn't ask for a better experience.  Their ability to take time and explain the process was very important and I would definitely recommend them in the future.  In addition, they have a network of trustworthy appraisers, escrow officer that can be leveraged for the process. The staff was especially helpful and this firm definitely deserves 5 stars!", 
    date: '11/16/2016', 
    stars: 5,
  },
  {
    name: 'Kristofer C.',
    review: 'I am a Realtor in town and have the privileged to work with Hilda, Laura, Thomas and her team often. In every transaction your team is made up of dozens of people. Lenders, Inspectors, Appraisers, Escrow Officers, Transaction coordinators, REALTORS and more. I am proud to have Benchmark on my team any day.', 
    date: '10/26/2018', 
    stars: 5
  },
  {
    name: 'Kelly S.',
    review: 'The staff at Benchmark Mortgage were very helpful when we purchased our home from the Owner in October 2015. We did not have a realtor working with us so it was a little confusing with all the new requirements for loans. Hilda and Kelly helped us through this process with patience and answered clearly everyone of our questions. The entire Staff is friendly and approachable I will continue to and have recommended them to others. They are a wonderful Team. Thank you for making this process less confusing and for your exceptional service.', 
    date: '2/4/2016', 
    stars: 5
  },
  {
    name: 'Giselle L.',
    review: "Hilda is great, she really takes the time to explain the whole mortgage process to her clients so they understand what is to be expected of them and of the process right at the beginning. She is always searching for ways to improve the experience for clients.  She is always available I've never had a hard time getting a hold of her. I honestly say I love working with as a Realtor in the Napa Valley, I can't recommend her enough as one of my allied partners in helping home buyers achieve their dreams.", 
    date: '03/08/2016', 
    stars: 5
  },
  {
    name: 'Amy W.',
    review: "I am so grateful I had this awesome group of professionals to help me navigate the financing of my new home. It was clear from day one that they operate with a great deal of integrity, and when circumstances weren't exactly right for me a year ago, they were honest and realistic about my options. It's ethical people like Hilda, Tracy, Kelly, and Anna who make our community a better place to live and do business. Thank you!!!",
    date: '05/23/2015', 
    stars: 5
  },
  {
    name: 'Joe E.',
    review: 'Hilda and her team got our refi done fast and at a great rate.  They were always quick to answer the phone and our dozens of emails.  I would recommend them to anyone!  Well done Benchmark!', 
    date: '03/31/2015', 
    stars: 5
  },
  {
    name: 'Alonso Hernandez',
    review: 'Benchmark Mortgage is the friendliest and most professional mortgage company I know. The staff is always welcoming and goes above and beyond to help their clients. I am completely confident that everyone I send there is taken care of to the highest standards.', 
    date: '11/15/2018', 
    stars: 5
  },
  {
    name: 'Bernie Narvaez',
    review: 'Johnathn Weber, Hilda Hensley and the rest of the Benchmark team provide excellent service. Plus, they know how to help veterans with their loans. They truly put the client first.', 
    date: '12/13/2018', 
    stars: 5
  },
  {
    name: 'Ryan Payne',
    review: 'My wife and I just closed the deal on our first home purchase. Hilda and her team were fantasstic to us. They helped facilitate a 21 day close and pulled it off without a hitch. They guided us through the process and answered any and all questions we had for them and made sure we understood every part of the transaction and that we were comfortable. I would highly recommend them to anyone who asks.', 
    date: '07/14/2018', 
    stars: 5
  },
  {
    name: 'Eric Putman',
    review: 'The Hilda Hensley team did a fantastic job as our Mortgage Group.  John Weber, Jeff Pinto, Kelly Winko, and the rest of the team went above and beyond to get us through the normal home-buying process, but they excelled with their personal touch, agility in their support during negotiations, and ease with which they handled the mortgage and loan process.  We look forward to a long-term relationship with the team, and appreciate how easy they made the home-buying process.', 
    date: '07/06/2018', 
    stars: 5
  },
  {
    name: 'Mirna Galeana',
    review: 'Hilda and her team have helped us patiently to understand this complicated process. Great plus, Hilda speaks Spanish! Thank you Benchamark Mortgage Napa!', 
    date: '08/07/2018', 
    stars: 5
  },
  {
    name: 'William Warring',
    review: 'Had a great experience with Johnathn Webber and the entire Benchmark Mortgage team. Would highly suggest using Benchmark for your mortage needs.', 
    date: '11/06/2018', 
    stars: 5
  },
  {
    name: 'Brie Anna',
    review: 'Hilda and the team are all awesome! Everyone there is always ready and willing to help!', 
    date: '11/10/2018', 
    stars: 5
  },
  {
    name: 'Doug Skelton',
    review: 'Jonathan Weber and the staff at Benchmark are outstanding. I cannot recommend them enough!', 
    date: '10/30/2018', 
    stars: 5
  },
];

const ReviewsMap = props => (
  <div style={{backgroundColor:'white'}}>
  <div className="review-container">
      {reviews.length > 0 ? reviews.map((review, key) => <Review review={review} key={key} />) : null}
  </div>
  </div>
);

export default ReviewsMap;