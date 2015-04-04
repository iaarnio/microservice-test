'use strict';

var
  job = require('../job');

module.exports = function(app) {
  app.get('/job', function(req, res) {
    job.list(req, res);
  });
  app.post('/job', function(req, res) {
    job.create(req, res);
  });
  app.get('/job/:id', function(req, res) {
    job.get(req, res);
  });
  app.delete('/job/:id', function(req, res) {
    job.delete(req, res);
  });
}
