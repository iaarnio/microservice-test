(function () {
  'use strict';

  var app = angular.module('job.view', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/ui', {
      template: '<p>direct html</p>',
  //    templateUrl: '/view.html',
      controller: 'JobController'
    })
    .when('/', {
      controller: 'JobController',
      template: '<h2>We are home</h2>'
    });
  }])
})();
