// Code template from module 18 activity 21 config/connection.js
const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
