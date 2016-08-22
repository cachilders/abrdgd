const express = require('express');
const partials = require('express-partials');
const session = require('express-session');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const port = process.env.PORT||3000;

app.listen(port);
console.log('Server now listening on port ' + port);

app.use(express.static(__dirname + "/client")); // This ultimately needs to be /public

// app.get('/', (req, res) => res.send('I should load the client, but I do not.'))
app.get('/', (req, res) => res.redirect('index.html'));