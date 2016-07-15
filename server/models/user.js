var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    required: 'name is required'
  },
})

var User = mongoose.model('User', userSchema)
