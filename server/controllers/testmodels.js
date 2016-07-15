var mongoose = require('mongoose');
var Testmodel = mongoose.model('Testmodel')

module.exports = (function(){
  return {

    index: function(req, res){
      console.log('in users.js index method')
      Testmodel.find({}, function(err, results){
        if (err) { console.error(err) }
        else { res.json(results) }
      })
    },

    create: function(req, res){
      var result = {status: true, errors: []}
      console.log('in users.js create method', req.body)
      Testmodel.find({name: req.body.name}, function(err, data){
        if (err) {
          console.error(err);
        }
        else {
          console.log(data);
          if (data.length > 0) {
            // result.errors.push("This name already exists")
            result.user = data[0]
          }
          else {
            var user = new Testmodel(req.body)
            user.save(function(err, user){
              if (err) {
                console.error(err)
                result.status = false
                for (var i = 0; i < err.errors.length; i++) {
                  result.errors.push(err.errors[i])
                }
              }
              else {
                result.user = user
              }
            })
          }
          res.json(result)
        }
      })
    },

    show: function(req, res){
      console.log('in users.js show method', req.body)
      Testmodel.find({_id:req.body._id}, function (err, user) {
        if (err) { console.error(err) }
        else { res.json(user) }
      })
    },

    update: function(req, res){
      console.log('in users.js update method', req.body)
      Testmodel.update({_id: req.body._id}, {$set: req.body}, function(err) {
        if (err) { console.error(err) }
        // else { res.json(user) }
      })
    },

    destroy: function(req, res){
      console.log('in users.js destroy method')
      Testmodel.remove({_id: req.body._id}, function(err) {
        if (err) { console.error(err) }
      })
    }

  }
})()
