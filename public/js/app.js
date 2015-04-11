(function () {
  'use strict';

  angular
    .module('job.view', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/partials/view.html',
          controller: 'JobController',
          controllerAs: 'job'
        })
        .otherwise({
          templateUrl: 'partials/view.html',
          controller: 'JobController',
          controllerAs: 'job'
        });
    }])
})();
