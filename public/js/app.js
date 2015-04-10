(function () {
  'use strict';

  var app = angular.module('job.view', ['ngRoute']);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'UiController',
        templateUrl: '/partials/view.html'
      });
  }])
})();
