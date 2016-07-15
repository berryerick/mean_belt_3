var mongoose = require('mongoose');
var Schema = mongoose.Schema

var modelSchema = new mongoose.Schema({
  first_name: {type: String, required: 'First name is required', minLength: 10},
  number: {type: Number, required: 'Last name is required', min: 2},
  email: {
    type: String,
    required: 'Email address is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: 'This email already exists'
  },
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  children: [{type: Schema.Types.ObjectId, ref: 'Child'}] // references Child model
})

var Testmodel = mongoose.model('Testmodel', modelSchema)
