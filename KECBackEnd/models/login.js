var mdb = require('mongoose');
var loginSchema = mdb.Schema({
  email: String,
  password: String,
})
var login_schema= mdb.model('login',loginSchema);

module.exports = login_schema;