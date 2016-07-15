
surveys.controller('loginController', function(userFactory){
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

surveys.controller('dashboardController', function(userFactory, surveyFactory){
  var that = this
  this.errors = []


  if (userFactory.currUser === null) {
    userFactory.logout()
  }
  this.currUser = userFactory.currUser


  this.getSurveys = function(){
    surveyFactory.index(function(data){
      that.surveys = data
    })
  }
  this.getSurveys()
  this.parseDate = function(date){
    date = new Date(date)
    return date.toDateString()
  }

  this.delete = function(id){
    surveyFactory.delete(id)
    for (var i = 0; i < this.surveys.length; i++) {
      if (this.surveys[i]._id === id){
        this.surveys.splice(i, 1)
      }
    }
  }

  this.logout = function(){
    userFactory.logout()
  }


})
surveys.controller('createController', function(userFactory, surveyFactory){
  var that = this
  this.errors = []
  this.currUser = userFactory.currUser
  if (this.currUser === null) {
    userFactory.logout()
  }

  this.survey = {
    question:"",
    options:[{votes: 0},{votes: 0},{votes: 0},{votes: 0}],
    _user: this.currUser._id
  }

  this.create = function(){
    this.errors = []
    // this.survey._user = this.currUser._id
    console.log('LC.login with', this.survey);
    surveyFactory.create(this.survey, function(errors){
      console.log(errors);
      for (var error in errors) {
        console.log(errors[error]);
        that.errors.push(errors[error])
      }
    })
  }


  this.logout = function(){
    userFactory.logout()
  }


})

surveys.controller('surveyController', function(userFactory, surveyFactory, $routeParams){
  var that = this
  this.errors = []

  if (userFactory.currUser === null) {
    userFactory.logout()
  }
  this.currUser = userFactory.currUser

  surveyFactory.show( function(data){
    that.survey = data
  })

  this.vote = function(option){
    console.log('voted for:', option);
    surveyFactory.update(option, function(data){
      console.log('vote success');
      that.survey = data
    })
  }




  this.logout = function(){
    userFactory.logout()
  }


})
