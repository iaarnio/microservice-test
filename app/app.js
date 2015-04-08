'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var router = require('./router')(app);
var db = require('./db');
var debug = require('debug')('app');

module.exports = app;

db.connect();

app.set('rootDir', path.join(__dirname, '..'));
//app.set('appDir', __dirname);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.set('public', path.join(app.get('rootDir'), 'public'));

app.use(express.static(app.get('rootDir')));

var server = app.listen(app.get('port'), function() {
  console.log('server started on port %s', server.address().port);
  app.set('server', server);
});
