"use strict";

angular
  .module('job.view')
  .controller('JobController', jobController);

//$inject.

function jobController() {
  var vm = this;
  vm.hellovar = 'hello from ctrl';
}
