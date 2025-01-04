var mdb = require('mongoose');
var userSchema = mdb.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
})
var user_schema = mdb.model('users', userSchema);

module.exports = user_schema;