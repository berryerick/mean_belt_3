var this_app = angular.module('this_app', ['ngRoute'])

this_app.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/login.html'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html'
  })
  .otherwise({
    redirectTo: '/login'
  })
})
