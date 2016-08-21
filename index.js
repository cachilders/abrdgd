var express = require('express');
var partials = require('express-partials');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT||3000;

app.listen(port);

app.get('/', (req, res) => res.send('It me.'))
app.get('/furthermore', (req, res) => res.send('Sup.'))

console.log('Server now listening on port ' + port);
