'use strict';

var
  mongoose = require('mongoose'),
  debug = require('debug')('app');


// Bootstrap db connection
var connect = function() {
  mongoose.connect('mongodb://localhost/microservice-test', function(err) {
  	if (err) {
  		console.error(chalk.red('Could not connect to MongoDB!'));
  		console.log(chalk.red(err));
  	}
  })
};

// Express MongoDB session storage
// app.use(session({
// 	saveUninitialized: true,
// 	resave: true,
// 	secret: config.sessionSecret,
// 	store: new mongoStore({
// 		db: db.connection.db,
// 		collection: config.sessionCollection
// 	})
// }));

module.exports.connect = connect;
