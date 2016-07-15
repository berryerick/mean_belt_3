

this_app.factory('userFactory', function($http, $location, $routeParams){
  var factory = {}

  factory.logout = function(){
    factory.currUser = null
    $location.path('/login')
  }

  factory.index = function(callback) {
    $http.get('/users').success(function(output){
      console.log(output);
      callback(output)
    })
  }

  factory.create = function(info, callback){
    console.log('userfactory.create with', info);
    $http.post('/users', info).success(function(output){
      console.log('post to /users output', output);
      if (output.status) {
        factory.currUser = output.info
        $location.path('/dashboard')
      }
      else {
        callback(output.errors)
      }
    })
  }


  return factory
})

this_app.factory('testmodelFactory', function($http, $location, $routeParams){
  var factory = {}

  factory.create = function( info, callback) {
    console.log('testmodelFactory. create with', info);
    $http.post('/users', info).success(function(output){
      console.log('post to /users output:', output);
      if (output.status) {
        // update factory
        factory.testmodels.push(output.info)
        $location.path('/dashboard')
      }
      else {
        callback(output.errors)
      }
    })
  }
  return factory
})
