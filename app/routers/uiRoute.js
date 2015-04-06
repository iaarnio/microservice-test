'use strict';

var
  path = require('path');

module.exports = function(app) {
  app.get('/ui', function(req, res) {
    res.sendFile(path.join(app.get('public'), 'index.html'));
  });
};
