var users = require('./../controllers/users.js') // require users controller
var surveys = require('./../controllers/surveys.js') // require users controller


module.exports = function(app){
  app.get('/surveys', function (req, res) {
    surveys.index(req, res)
  }),
  app.get('/surveys/:id', function(req, res) {
    surveys.show(req, res)
  }),
  app.post('/users', function(req, res){
    users.create(req, res)
  }),
  app.post('/surveys', function(req, res){
    surveys.create(req, res)
  }),
  app.patch('/surveys/:id', function(req, res){
    console.log("updating ", req.params.id);
    surveys.update(req, res)
  }),
  app.delete('/surveys/:id', function(req, res) {
    surveys.destroy(req, res)
  })
}
