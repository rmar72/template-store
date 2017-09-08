'use strict';

// Declare app level module which depends on views, and components
angular.module('template-store', [
  'ngRoute',
  'template-store.view1',
  'template-store.view2',
  'template-store.templates'
]).
config(['$routeProvider', function($routeProvider) {
  //$locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
