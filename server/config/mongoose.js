// *replace DB_NAME with your dataBase_Name*

var mongoose = require('mongoose')
var fs  = require('fs');
var fs  = require('fs');

mongoose.connect('mongodb://localhost/DB_NAME')
// read all models files
var models_path = __dirname + '/../models'
fs.readdirSync(models_path).forEach(function(file){
  if (file.indexOf('.js') > 0) {
    require(models_path + '/' + file)
  }
})
