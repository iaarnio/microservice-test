'use strict';

var
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  morgan = require('morgan'),
  //hb = require('express-handlebars'),
  db = require('./server/db'),
  debug = require('debug')('app');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//app.engine("handlebars", hb());
//app.set('view engine', 'handlebars');
//app.set('views', path.join(__dirname, '/server/views'));
//app.set('view engine', 'jade');

var uiRoute = require('./server/uiRoute');
var apiRoute = require('./server/apiRoute');
app.use('/', uiRoute);
app.use('/api', apiRoute);

// All undefined asset or api routes should return a 404
app.route('/:url(api|auth|components|app|bower_components|lib|assets)/*')
  .get(function(req, res) {
    res.send('Not found');
  });


// All other routes should redirect to the index.html
app.route('/*')
  .get(function(req, res) {
    res.sendFile('/index.html');
  });

//// catch 404
//app.use(function(req, res) {
//  var err = new Error('Not Found');
//  err.status = 404;
//});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

db.connect();

var server = app.listen(app.get('port'), function () {
  console.log('server started on port %s', server.address().port);
  app.set('server', server);
});

module.exports = app;
