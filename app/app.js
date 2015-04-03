var
  app = require('express')(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  router = require('./router'),
  debug = require('debug')('app');

module.exports = app;

router.loadRoutes(app);

app.use(morgan('combined'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('server started on port %s', server.address().port);
  app.set('server', server);
});
