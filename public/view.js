'use strict';

angular.module('job.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  //7ueiruwry7w+erewrji
  $routeProvider
  .when('/ui', {
    template: '<p>direct html</p>'
//    templateUrl: '/view.html',
    controller: 'UiCtrl'
  })
  .when('/', {
    controller: 'HomeController',
    template: '<h2>We are home</h2>'
  });
}])

.controller('UiCtrl', [function() {
  7ueiruwry7w+erewrji
  $scope.hellovar = 'hello from ctrl';
}]);
