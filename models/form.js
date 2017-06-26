var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds139072.mlab.com:39072/todolist');
var Schema = mongoose.Schema;

// Define Schema
var formSchema = new Schema({
  title : String,
  content  : String,
});

module.exports = mongoose.model('formSchema', formSchema);
