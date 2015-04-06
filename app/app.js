'use strict';

var
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  morgan = require('morgan'),
  router = require('./router'),
  db = require('./db'),
  debug = require('debug')('app');

var app = express();
module.exports = app;

db.connect();
router.loadRoutes(app);

app.set('rootDir', path.join(__dirname, '..'));
app.set('appRootDir', __dirname);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.set('public', path.join(app.get('rootDir'), 'public'));
app.set('views', path.join(app.get('rootDir'), 'ui/views'));

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function() {
  console.log('server started on port %s', server.address().port);
  app.set('server', server);
});
