'use strict';

var
  mongoose = require('mongoose'),
  model = require('./jobModel'),
  Job = mongoose.model('Job'),
  debug = require('debug')('app');

var listJobs = function(req, res) {
  Job
  .find()
  .sort('-created')
  .select('title employer')
  .exec(function(err, jobs) {
		if (err) {
      res.send('list failed: ' + err);
		} else {
			res.json(jobs);
		}
	});
};

var getJob = function(req, res) {
  res.send('get job');
};

var handleError = function(err, res) {
  if (err) {
    return res.status(400).send('save failed: ' + err);
  } else {
    res.json(job);
  }
}

var createJob = function(req, res) {
  var job = new Job(req.body);
  job.employer = 'test employer';
  job.title = 'test title';
  job.save(function(err) {
    if (err) {
      handleError(err, res);
    }
  });
  res.send('created job: ' + job);
};

var deleteJob = function(req, res) {
  var job = getJob(req, res);
  job.remove(function(err) {
    if (err) {
      handleError(err, res);
    }
  });
  res.send('removed job: ' + job);
};



module.exports.list = listJobs;
module.exports.get = getJob;
module.exports.create = createJob;
module.exports.delete = deleteJob;
