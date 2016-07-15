

surveys.factory('userFactory', function($http, $location, $routeParams){
  var factory = {}
  factory.currUser = null
  factory.logout = function(){
    factory.currUser = null
    $location.path('/')
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
        console.log(output.info);
        $location.path('/dashboard')
      }
      else {
        callback(output.errors)
      }
    })
  }


  return factory
})

surveys.factory('surveyFactory', function($http, $location, $routeParams){
  var factory = {}

  factory.surveys = []

  factory.index = function(callback) {
    $http.get('/surveys').success(function(output){
      console.log(output);
      callback(output)
    })
  }
  factory.show = function(callback){
    console.log("fetching:", $routeParams.id);
    $http.get('/surveys/'+ $routeParams.id).success(function(output){
      factory.survey = output
      callback(output)
    })
  }

  factory.create = function( info, callback) {
    console.log('surveyFactory.create with', info);
    $http.post('/surveys', info).success(function(output){
      console.log('post to /surveys output:', output);
      if (output.status) {
        // update factory
        factory.surveys.push(output.info)
        $location.path('/dashboard')
      }
      else {
        callback(output.errors)
      }
    })
  }

  factory.update = function(info, callback){
    for (var i = 0; i < factory.survey.options.length; i++) {
      if (factory.survey.options[i].content === info) {
        var index = i
        console.log(index);
      }
    }
    $http.patch('/surveys/'+$routeParams.id, {option: index}).success(function(output){
      console.log( 'update output',output);
      callback(output)
    })
  }

  factory.delete = function(id) {
    $http.delete('/surveys/'+id).success(function(){
      console.log('successfuly deleted', id);
    })
  }
  return factory
})
