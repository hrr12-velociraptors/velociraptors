// ///////////
// sequelize// 
//         //

var Sequelize = require('sequelize');
var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
var orm = new Sequelize(match[5], match[1], match[2], {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging: false,
    dialectOptions: {
        ssl: true
    }
});
//var orm = new Sequelize('learnItNowdb', 'root', '');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var user = orm.define('users', {
  username: { 
    type: Sequelize.STRING, 
    unique: true 
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
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

user.beforeCreate(function(user, options) {
  user.password = user.hashPassword();
});

var session = orm.define('sessions', {
  topic: Sequelize.STRING,
  description: Sequelize.STRING,
  startTime: Sequelize.DATE,
  link: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
});

user.hasMany(session); 
session.belongsTo(user);

user.sync();
session.sync();

exports.user = user;
exports.session = session;



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