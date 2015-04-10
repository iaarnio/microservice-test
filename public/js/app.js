(function () {
  'use strict';

  var app = angular.module('job.view', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/ui', {
      template: '<p>direct html</p>'
  //    templateUrl: '/partials/view.html',
      controller: 'UiController'
    })
    .when('/', {
      controller: 'UiController',
      template: '<h2>We are home</h2>'
    });
  }])
})();
