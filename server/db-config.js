var mongoose = require('mongoose');
var path = require('path');

mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/abrdgd'
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose did wet the bed.'));
db.once('open', function () {
  console.log('Mongoose is up and running.')
});

module.exports = db;