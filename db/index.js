var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'learnItNowdb'
});

var onConnect = connection.connect(function(err) {
  if(err) {
    console.log('Error connecting to mysql database: ', err);
  } else {
    console.log('msql databse is connected.');
  }
});

module.exports.connection = connection;