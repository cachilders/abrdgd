require('dotenv').config();
const express       = require('express');
const partials      = require('express-partials');
const session       = require('express-session');
const bodyParser    = require('body-parser');
const fs            = require('fs');
const passport      = require('passport');
const cookieParser  = require('cookie-parser');
const strategy      = require('./server/setup-passport');
const db            = require('./server/db-config');
const sampleSchema  = require('./server/db-schemas/sample.js') // You'll want to require your schemas where you use them with Mongoose

const app = express();

const port = process.env.PORT||3000;

app.listen(port);

app.use(express.static(__dirname + "/client"));

app.use(cookieParser());
app.use(session({ secret: process.env.AUTH0_CLIENT_SECRET, resave: false,  saveUninitialized: false }));

// Routes

app.get('/', (req, res) => res.redirect('/index.html'))  // Ultimately needs to be /public

app.get('/furthermore', (req, res) => res.send('Sup.'))

// Auth Routes (TODO: move the meat of these to their own module)
app.get('/authCallback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/user");
  });

app.get('/user', function (req, res) {
  res.render('user', {
    user: req.user
  });
});

console.log('Server now listening on port ' + port);

app.use(passport.initialize());
app.use(passport.session());

module.exports = app;
