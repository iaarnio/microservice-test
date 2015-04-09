'use strict';

var
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  morgan = require('morgan'),
  hb = require('express-handlebars'),
  db = require('./server/db'),
  debug = require('debug')('app');

var app = express();
module.exports = app;

var uiRoute = require('./server/uiRoute');
var apiRoute = require('./server/apiRoute');
app.use('/', uiRoute);
app.use('/api', apiRoute);

app.engine("handlebars", hb());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

db.connect();

var server = app.listen(app.get('port'), function () {
  console.log('server started on port %s', server.address().port);
  app.set('server', server);
});
