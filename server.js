// Erick Berry's MEAN TEMPLATE FILE

// template for simple login-reg with validations, one model with owner

var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')

//set up static folder- express looks for index.js
app.use(express.static(__dirname + '/client'))
app.use(bodyParser.json())

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000, function () {
  console.log("running on 8000");
})
