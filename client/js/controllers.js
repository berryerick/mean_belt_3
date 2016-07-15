
this_app.controller('loginController', function(userFactory){
  var that = this
  this.errors = []


  this.login = function(){
    this.errors = []
    console.log('LC.login with', this.user);
    userFactory.create(this.user, function(errors){
      console.log(errors);
      for (var error in errors) {
        // console.log(errors[error]);
        that.errors.push(errors[error].message)
      }
    })
  }




})

this_app.controller('dashboardController', function(userFactory){
  var that = this
  this.errors = []

  this.currUser = userFactory.currUser
  if (this.currUser === null) {
    userFactory.logout()
  }

  this.getUsers = function(){
    userFactory.index(function(data){
      that.users = data
    })
  }
  this.getUsers()


  this.login = function(){
    console.log('LC.login with', this.user);
    userFactory.create(this.user, function(errors){
      console.log(err);
      for (var error in errors) {
        console.log(errors[error]);
        that.errors.push(errors.error.message)
      }
    })
  }
  this.logout = function(){
    userFactory.logout()
  }


})
