const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/Home', express.static(__dirname + '/../client/dist'));
app.use('/About', express.static(__dirname + '/../client/dist'));
app.use('/Contact', express.static(__dirname + '/../client/dist'));
app.use('/Blog', express.static(__dirname + '/../client/dist'));
app.use('/Vlog', express.static(__dirname + '/../client/dist'));
app.use('/AboutMe', express.static(__dirname + '/../client/dist'));
app.use('/Services', express.static(__dirname + '/../client/dist'));
app.use('/Reviews', express.static(__dirname + '/../client/dist'));
app.use('/Directions', express.static(__dirname + '/../client/dist'));
app.use('/Individualblog', express.static(__dirname + '/../client/dist'));

// let mysql = require('mysql');
// let connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'Kenny',
//   password: 'kennyl24',
//   database: 'Hilda'
// });

// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});