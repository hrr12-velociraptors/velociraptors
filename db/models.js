// ///////////
// sequelize// 
//         //

var Sequelize = require('sequelize');
var orm = new Sequelize('learnItNowdb', 'root', '');

var User = orm.define('User', {
  username: { 
    type: Sequelize.STRING, 
    unique: true 
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
});

var Session = orm.define('Session', {
  topic: Sequelize.STRING,
  description: Sequelize.STRING,
  startTime: Sequelize.DATE,
  link: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
});

User.hasMany(Session); 
Session.belongsTo(User);

User.sync();
Session.sync();

exports.User = User;
exports.Message = Message;



/////////////
//Raw mySql// 
//         //

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'learnItNowdb'
// });

// var onConnect = connection.connect(function(err) {
//   if(err) {
//     console.log('Error connecting to mysql database: ', err);
//   } else {
//     console.log('msql databse is connected.');
//   }
// });

// module.exports.connection = connection;