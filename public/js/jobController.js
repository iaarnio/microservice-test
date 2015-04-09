"use strict";

var app = angular.module('job.view');

app.controller('uiCtrl', [uiCtrl]);

function uiCtrl($scope) {
  $scope.hellovar = 'hello from ctrl';
}
