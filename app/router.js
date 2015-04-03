'use strict';

var
  path = require('path'),
  fs = require("fs"),
  debug = require('debug')('app');

exports.loadRoutes = function(app) {
  var routePath = path.resolve("./app/routers") ;
  fs.readdirSync(routePath).forEach(function(file) {
      var route = routePath + '/' + file;
      debug('adding route: ' + route);
      require(route)(app);
  });
};
