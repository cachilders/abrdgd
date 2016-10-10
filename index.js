                      require('dotenv').config();
const express       = require('express');
const app           = express();
const partials      = require('express-partials');
const session       = require('express-session');
const bodyParser    = require('body-parser');
const fs            = require('fs');
// Uncomment this block as well as those below to use Auth0
// const passport      = require('passport');
// const cookieParser  = require('cookie-parser');
// const strategy      = require('./server/setup-passport');
const db            = require('./server/db-config');
const sampleSchema  = require('./server/db-schemas/sample.js') // You'll want to require your schemas where you use them with Mongoose
const synaptic      = require('./server/setup-synaptic.js') // github.com/cazala/synaptic

const port = process.env.PORT||3000;

app.listen(port);
console.log('Server now listening on port ' + port);

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
// app.use(cookieParser()); // Uncomment for authentication services
// app.use(session({ secret: process.env.AUTH0_CLIENT_SECRET, resave: false,  saveUninitialized: false }));

app.get('/', (req, res) => res.redirect('/index.html'))  // Ultimately needs to be /public

app.get('/furthermore', (req, res) => res.send('Sup.'))

// Auth Routes (TODO: move the meat of these to their own module)

// app.get('/authCallback', // Uncomment for authentication services
//   passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
//   function(req, res) {
//     if (!req.user) {
//       throw new Error('user null');
//     }
//     res.redirect("/user");
//   });

// app.get('/user', function (req, res) {
//   res.render('user', {
//     user: req.user
//   });
// });

// app.use(passport.initialize()); // Uncomment for authentication services
// app.use(passport.session());

module.exports = app;
