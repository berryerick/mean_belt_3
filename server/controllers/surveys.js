var mongoose = require('mongoose');
var Survey = mongoose.model('Survey')

module.exports = (function(){
  return {

    index: function(req, res){
      console.log('in users.js index method')
      Survey.find({}).populate('_user').exec(function(err, results){
        if (err) { console.error(err) }
        else { res.json(results) }
      })
    },

    create: function(req, res){
      var result = {status: true, errors: []}
      console.log('in surveys.js create method', req.body)

      var survey = new Survey(req.body)
      survey.save(function(err, survey){
        if (err) {
          // console.log(err.errors)
          result.status = false
          for (var i in err.errors) {
            // if (err.errors[i]) {
            //
            // }
            if (result.errors.indexOf(err.errors[i].message)=== -1) {
              result.errors.push(err.errors[i].message)
            }
            // console.log(err.errors[i].message);
          }
        }
        else {
          result.survey = survey
        }
        res.json(result)
      })
    },

    show: function(req, res){
      console.log('in users.js show method', req.body)
      Survey.findOne({_id:req.params.id}, function (err, user) {
        if (err) { console.error(err) }
        else { res.json(user) }
      })
    },

    update: function(req, res){
      console.log('in users.js update method', req.body)
      var option = 'options['+req.body.option+']'
      Survey.findOne({_id:req.params.id}, function(err, survey){
        console.log(survey.options);
        survey.options[req.body.option].votes++
        console.log(survey.options);
        survey.save(function(err, saved){
          if (err) { console.error(err) }
          else { res.json(saved) }
        })
      })

      // Survey.update({_id: req.params.id}, {'items'}, function(err, survey) {
      //   if (err) { console.error(err) }
      //   else { res.json(survey) }
      // })
    },

    destroy: function(req, res){
      console.log('in users.js destroy method')
      Survey.remove({_id: req.params.id}, function(err) {
        if (err) { console.error(err) }
      })
    }

  }
})()
