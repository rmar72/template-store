angular.module('template-store.templates',['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/templates',{
    templateUrl : 'templates/template.html',
    controller : 'TemplatesCtrl'
  })
  .when('/templates/:templateId',{
    templateUrl : 'templates/template-details.html',
    controller : 'TemplatesDetailsCtrl'
  })
}])

.controller('TemplatesCtrl', ['$scope','$http',function($scope, $http){
  $http.get('/json/templates.json').success( (data) => $scope.templates=data );
}])

.controller('TemplatesDetailsCtrl', ['$scope',function($scope){

}])
