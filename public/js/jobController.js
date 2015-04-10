"use strict";

var app = angular.module('job.view');

//$inject.
app.controller('jobController', jobController);

function jobController($scope) {
  $scope.hellovar = 'hello from ctrl';
}
