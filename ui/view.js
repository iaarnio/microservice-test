'use strict';

angular.module('job.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ui', {
    templateUrl: 'view.html',
    controller: 'UiCtrl'
  });
}])

.controller('UiCtrl', [function() {

}]);
