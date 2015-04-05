'use strict';

var
  app = require('express')(),
  bodyParser = require('body-parser'),
  path = require('path'),
  morgan = require('morgan'),
  router = require('./router'),
  db = require('./db'),
  debug = require('debug')('app');

module.exports = app;

db.connect();
router.loadRoutes(app);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.set('rootDir', path.normalize(__dirname + '/..'));
app.set('appRootDir', __dirname);

var server = app.listen(app.get('port'), function() {
  console.log('server started on port %s', server.address().port);
  app.set('server', server);
});
