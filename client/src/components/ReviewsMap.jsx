import React from 'react';
import { Link } from 'react-router-dom';
import Review from './Review.jsx';

const reviews = [
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