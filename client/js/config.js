var surveys = angular.module('surveys', ['ngRoute'])

surveys.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html'
  })
  .when('/create', {
    templateUrl: 'partials/create.html'
  })
  .when('/surveys/:id', {
    templateUrl: 'partials/survey.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
