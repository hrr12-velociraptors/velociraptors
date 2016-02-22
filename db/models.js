// ///////////
// sequelize// 
//         //

var Sequelize = require('sequelize');
var orm = new Sequelize('learnItNowdb', 'root', '');
<<<<<<< HEAD
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
=======
>>>>>>> d20db9f2f345f3a26f64d5a8aecdee47b879c420

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
<<<<<<< HEAD
}, {
  instanceMethods: {
    hashPassword: function() {
      return bcrypt.hashSync(this.password);
    },
    validPassword: function(pass) {
      return bcrypt.compareSync(pass, this.password);
    }
  }
});

User.beforeCreate(function(user, options) {
  user.password = user.hashPassword();
=======
>>>>>>> d20db9f2f345f3a26f64d5a8aecdee47b879c420
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
<<<<<<< HEAD
exports.Session = Session;
=======
exports.Message = Message;
>>>>>>> d20db9f2f345f3a26f64d5a8aecdee47b879c420



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