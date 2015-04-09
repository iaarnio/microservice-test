var express = require('express');
var router = express.Router();

/* GET all jobs and POST new job */
router.route('/')
  .get(function (req, res) {
    var data = {'dummy': 'dummy'};  //TODO get jobs
    res.send(data);
  })

  .post(function (req, res) {

    // TODO: populate job
    var newJob = {
      'title': req.body.title
    };

  // TODO save data

  //        res.set('Content-Type', 'application/json');
  res.status(201).send(newJob);
})
;


/* GET, PUT and DELETE job */
router.route('/:id')

  .get(function (req, res) {

    console.log('Retrieving job id: ' + req.params.id);

    // TODO get job
    var job = {
      'title': req.body.title
    };

    if (!job) {
      res.sendStatus(404);
    } else {
      res.send(job);
    }
  })

  .delete(function (req, res) {
    console.log('delete not yet implemented');
    // TODO delete impl
    res.sendStatus(204);
  })

  .put(function (req, res) {
    console.log('put not yet implemented');
    // TODO put impl
    res.sendStatus(204);
  });


function getJob() {
  var data = { 'dummy': 'dummy' }; // TODO get job implementation
  return JSON.parse(data);
}

function saveJob(data) {
  // TODO save job impl
}

module.exports = router;
