ABRDGD is a lightweight seed scaffold for rapidly deploying ideas. It ships with a basic configuration of Node/Express, Angular/UI Router, and MongoDB.

It is not ready for prime time. Please submit PRs with the intent of providing a solid footing for a variety of projects without reaching far beyond that footing. Keep things clean and commented as necessary, and please share as you'd like.

[note] MongoDB is set up for use with either .env or your localhost. For the former you'll need a .env file in the root directory with MONGODB_URI set to yours. For localhost, run mongod.

TODO:
* Update app config to Angular component model (In addition to working with ng1, the component setup will make for an educational and functional opportunity to push toward ng2)
* Configure generic Auth0/Passport setup (ABRDGD will include this feature in time)
* Configure generic Synaptic.js setup (ABRDGD is a reflection of my intents for rapid development. It will include basic hooks for neural nets)
* React! (Turns out UI Router is at home with React so ABRDGD will have a React flavor)
* Redux (See React, but it will probably be useful for both the Angular and React flavors of this scaffold)