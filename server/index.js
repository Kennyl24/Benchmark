const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const fs = require('fs');
var cors = require('cors');

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/Home', express.static(__dirname + '/../client/dist'));
app.use('/About', express.static(__dirname + '/../client/dist'));
app.use('/Contact', express.static(__dirname + '/../client/dist'));
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
// app.get('/blogs/*', function(req, res) {
//   for (let i = 0; i < blogs.length; i++) {
//     let title = blogs[i].blogTitle;
//     console.log(title)
//     res.render(page.render, page.language);
//   } 
// });

app.post('/Email', (req, res) => {
  const mailOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: req.body.email,
    subject: 'Benchmark Mortgage Blog Subscription',
    text: 'Thank you for subscring to our blog, when our blogs are updated weekly, you will be the first to find out!'
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'kenny.laprelle@gmail.com',
      pass: 'jlq0292424'
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

app.post('/Vlog', (req, res) => {
  const mailOptions = {
    from: 'kenny.laprelle@gmail.com',
    to: req.body.email,
    subject: 'Benchmark Mortgage Vlog Notice',
    text: 'Thank you for your interest in our vlog, as soon as our vlogs are released, you will be the first to know!'
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'kenny.laprelle@gmail.com',
      pass: 'jlq0292424'
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



app.get('/blogs/:title', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'});
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});