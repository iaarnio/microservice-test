var
  work = require('../work');

module.exports = function(app) {
  app.get('/work', function(req, res) {
    work.list(req, res);
  });
  app.get('/work/:id', function(req, res) {
    work.get(req, res);
  });
}
