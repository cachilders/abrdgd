const mongoose = require('mongoose')

// Make a file like this for each schema you need, then require it in db-config.js

const sampleSchema = mongoose.Schema({
    name: String,
    friends: {type: String, default: 'Not many, tbh.'},
    list: {type: [], default: ['apparently', 'array', 'is', 'a', 'datatype']}
    // More schema options live here. Sky's the limit.
});

// This is where we produce a model from our schema:

module.exports = mongoose.model('Sample', sampleSchema);