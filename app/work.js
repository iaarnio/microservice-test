var
  debug = require('debug')('app');

var list = function(req, res) {
  res.send('list works');
};

var get = function(req, res) {
  res.send('get work');
};

module.exports.list = list;
module.exports.get = get;
