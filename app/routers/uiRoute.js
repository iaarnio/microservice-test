'use strict';

var
  path = require('path');

module.exports = function(app) {
  app.get('/ui*', function(req, res) {
    res.sendFile(path.resolve(app.get('appRootDir') + '/ui/main.html'));
  });
};
