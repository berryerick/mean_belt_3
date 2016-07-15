var mongoose = require('mongoose');
var Schema = mongoose.Schema

var surveySchema = new mongoose.Schema({
  question: {type: String, required: 'Question is required', minlength: [8, 'question must be 8 or more characters long']},
  options: [{content: {type: String, required: "all options are required", minlength: [3, 'options must be 3 or more characters long']}, votes: {type: Number}}], // references Child model
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

var Survey = mongoose.model('Survey', surveySchema)
