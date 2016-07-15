var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'name is required'
  },
}, {timestamps: true})

var User = mongoose.model('User', userSchema)
