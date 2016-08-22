//var app = require('./server/server.js');
const express = require('express');
const partials = require('express-partials');
const session = require('express-session');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const port = process.env.PORT||3000;

app.listen(port);

app.use(express.static(__dirname + "/client"));

app.get('/', (req, res) => res.redirect('/index.html'))  // Ultimately needs to be /public
app.get('/furthermore', (req, res) => res.send('Sup.'))

console.log('Server now listening on port ' + port);

module.exports = app;
