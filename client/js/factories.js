

this_app.factory('userFactory', function($http, $location, $routeParams){
  var factory = {}

  factory.create = function(info, callback){
    console.log('userfactory.create with', info);
    $http.post('/users', info).success(function(output){
      console.log('post to /users output', output);
      if (output.status) {
        factory.currUser = output.user
        $location.path('/dashboard')
      }
      else {
        callback(output.errors)
      }
    })
  }

  return factory
})
