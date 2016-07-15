var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = (function(){
  return {

    index: function(req, res){
      console.log('in users.js index method')
      User.find({}, function(err, results){
        if (err) { console.error(err) }
        else { res.json(results) }
      })
    },

    create: function(req, res){
      var result = {status: true, errors: []}
      console.log('in users.js create method', req.body)
      User.find({name: req.body.name}, function(err, data){
        if (err) {
          console.error(err);
        }
        else {
          console.log("user find Data",data);
          if (data.length > 0) {
            // result.errors.push("This name already exists")
            result.info = data[0]
          }
          else {
            var user = new User(req.body)
            user.save(function(err, info){
              if (err) {
                console.error("save Error:", err)
                result.status = false
                for (var i = 0; i < err.errors.length; i++) {
                  result.errors.push(err.errors[i])
                }
              }
              else {
                result.info = info
              }
            })
          }
          res.json(result)
        }
      })
    },

    show: function(req, res){
      console.log('in users.js show method', req.body)
      User.find({_id:req.body._id}, function (err, user) {
        if (err) { console.error(err) }
        else { res.json(user) }
      })
    },

    update: function(req, res){
      console.log('in users.js update method', req.body)
      User.update({_id: req.body._id}, {$set: req.body}, function(err) {
        if (err) { console.error(err) }
        // else { res.json(user) }
      })
    },

    destroy: function(req, res){
      console.log('in users.js destroy method')
      User.remove({_id: req.body._id}, function(err) {
        if (err) { console.error(err) }
      })
    }

  }
})()
