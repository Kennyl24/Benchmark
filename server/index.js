const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const fs = require('fs');

app.use(require('prerender-node'));
let cors = require('cors');
let forceSsl = require('force-ssl-heroku');
// const compression = require('compression');
const sitemap = require('express-sitemap');
let path = require('path');
const fbCrawlerCheck = require('fb-crawler-check');
let userAgent = 'string';
let isCrawler = fbCrawlerCheck(userAgent);
// app.use(compression());
app.use(forceSsl);
// sitemap.generate(app);
// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });
sitemap({
  map: {
    '/': ['get'],
    '/home': ['get', 'post'],
    '/about': ['get'],
    '/contact': [],
    '/blog': [],
    '/vlog': [],
    '/reviews': [],
    '/privacy': [],
    '/blogs': [],
    '/services': [],
  },
  route: {
    '/': {
      lastmod: '2019-06-07',
      changefreq: 'always',
      priority: 1.0,
    },
    '/blog': {
      lastmod: '2019-06-07',
      changefreq: 'always',
      priority: 1.0,
    },
    '/vlog': {
      lastmod: '2019-06-07',
      changefreq: 'always',
      priority: 1.0,
    },
  },
}).XMLtoFile();
// sitemap.toFile();

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/Home', express.static(__dirname + '/../client/dist'));
app.use('/About', express.static(__dirname + '/../client/dist'));
app.use('/Contact', express.static(__dirname + '/../client/dist'));
app.use('/Calculator', express.static(__dirname + '/../client/dist'));
app.use('/Blog', express.static(__dirname + '/../client/dist'));
app.use('/Vlog', express.static(__dirname + '/../client/dist'));
app.use('/AboutMe', express.static(__dirname + '/../client/dist'));
app.use('/Services', express.static(__dirname + '/../client/dist'));
app.use('/blogs/#', express.static(__dirname + '/../client/dist'));
app.use('/Reviews', express.static(__dirname + '/../client/dist'));
app.use('/Directions', express.static(__dirname + '/../client/dist'));
app.use('/Individualblog', express.static(__dirname + '/../client/dist'));
app.use('/Email', express.static(__dirname + '/../client/dist'));
app.use('/Vlog', express.static(__dirname + '/../client/dist'));
app.use('/Privacy', express.static(__dirname + '/../client/dist'));
app.use('/VA', express.static(__dirname + '/../client/dist'));
app.use('/first-time-home-buyer', express.static(__dirname + '/../client/dist'));
app.use('/FHA', express.static(__dirname + '/../client/dist'));
app.use('/Conventional', express.static(__dirname + '/../client/dist'));
app.use('/Refinance', express.static(__dirname + '/../client/dist'));
app.use('/More-services', express.static(__dirname + '/../client/dist'));
app.use('/Updates', express.static(__dirname + '/../client/dist'));

app.use('/blogs/:title', express.static(__dirname + '/../client/dist'));
app.use('/about/#', express.static(__dirname + '/../client/dist'));
// app.use('/*', express.static(__dirname + '/../client/dist'));
const blogs = [
  'FHFA Announces Conforming Loan Limit Increase In 2019',
  'Nervous About Buying? Here’s A Dose of Confidence',
  'Can I Still Get A VA Loan With Bad Credit?',
  'Benchmark and The Patriot Tour by Team Never Quit',
  'How To Avoid Roadblocks Before Closing On Your New Home',
  'Construction Loans: What to Expect',
  'Benchmark Introduces New Program to Expand Options for Medical Professionals',
];

app.post('/Email', (req, res) => {
  const mailOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: req.body.email,
    subject: 'Benchmark Mortgage Blog Subscription',
    text: `
    Hi There, 

    Thank you for subscring to our blog, when our blogs are updated weekly, you will be the first to find out!
    
    Warmly, 

    The Hilda Hensley Team.`
  
  };
  const teamOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: 'kenny.laprelle@gmail.com',
    subject: 'Benchmark Mortgage Blog Subscriber',
    text: `Hi Team,
    
    Just a heads up. Someone has reached out on the website! 

    They are subscribing to the BLOG.
    
    Woo Woo.
    
    Here is there information: 

    Email: ${req.body.email}

    Warmly, 

    Kenny
    `
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'kenny.laprelle@gmail.com',
      pass: 'fkladjajkxnqqdwn'
    }
  });
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  transporter.sendMail(teamOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(200);
});

app.post('/Vlog', (req, res) => {
  const mailOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: req.body.email,
    subject: 'Benchmark Mortgage Vlog Notice',
    text: 'Thank you for your interest in our vlog, as soon as our vlogs are released, you will be the first to know!'
  };
  const teamOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: 'teamhensley@benchmark.us',
    subject: 'Benchmark Mortgage Contact Inquiry',
    text: 'Thank you for your interest in our vlog, as soon as our vlogs are released, you will be the first to know!'
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'kenny.laprelle@gmail.com',
      pass: 'fkladjajkxnqqdwn'
    }
  });
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  transporter.sendMail(teamOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(200);
});
app.post('/Contact', (req, res) => {
  const mailOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: req.body.email,
    subject: 'Benchmark Mortgage Contact Inquiry',
    text: `Hi ${req.body.name},
    
    Thank you for reaching out to The Hilda Hensley Team. We have receieved your inquiry and we will reach out to you as soon as we can! 

    Warmly, 

    The Hilda Hensley Team
    `
  };
  const teamOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: 'kenny.laprelle@gmail.com',
    subject: 'Benchmark Mortgage Contact Inquiry',
    text: `Hi Team,
    
    Just a heads up. Someone has reached out on the website! Woo Woo.
    
    Here is there information: 

    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Message: ${req.body.message}

    Warmly, 

    Kenny
    `
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'kenny.laprelle@gmail.com',
      pass: 'fkladjajkxnqqdwn'
    }
  });
  transporter.sendMail(teamOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(200);
});
app.get('/sitemap.xml', function(req, res) {
  res.sendFile(path.join(__dirname, 'path', '../sitemap.xml'));
});
app.use(cors());

app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});