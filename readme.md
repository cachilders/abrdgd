ABRDGD is a starter kit for getting ideas up and running with an uncanny quickness. It ships configured with Node/Express, Angular/UI Router, and MongoDB. Download the zip, run your installs, fire up the server, and you're golden.

It is not ready for prime time. Please submit PRs with the intent of providing a solid footing for a variety of projects without reaching far beyond that footing. Keep things clean and commented as necessary, and please share as you'd like.

[usage notes]
* MongoDB is set up for use with either .env or your localhost. For the former you'll need a .env file in the root directory with MONGODB_URI set to yours. For localhost, run mongod.
* Passport is configured on the server side to work variables entered into .env from Auth0. It's provisionally tested/working, but will require front end login hooks and subsequent handling to make magic happen. Read the docs to go to there.
* Synaptic.js hooks have been added to the server. It's a complex bit of kit, and none of the real work has been done here. If you don't mean to use it, delete at your leisure.
* Also dependencies are in place for Babel, Webpack, Mocha, and Redux (also ng-redux). They're not hooked up. Pardon the mess.

TODO:
* Setup task runner / linting / Mocha
* Update app config to Angular component model
* React (A react flavor of this repo is in the works)
* Redux (Redux will be integrated for Angular and React)
* Angular 2, Vue, Aurelia, Backbone — there'll be a flavor for all of them