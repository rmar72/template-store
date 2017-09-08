angular.module('template-store.templates',['ngRoute'])

//ROUTES
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

//DIRECTIVES
.directive('templateDirective', function(){
  return {
    restrict:'E', //restricting to only element directives
    templateUrl:"directives/template_directive.html",
    replace:false, //not replacing ng directive elem
    scope: {
      templateObj: '=' //binding an obj
    }
  }
})

//CONTROLLERS
.controller('TemplatesCtrl', ['$scope','$http',function($scope, $http){
  $http.get('/json/templates.json').success( (data) => $scope.templates=data );
}])

.controller('TemplatesDetailsCtrl', ['$scope',function($scope){

}])
