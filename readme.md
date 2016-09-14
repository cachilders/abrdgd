ABRDGD is a lightweight seed scaffold for rapidly deploying ideas. It ships with a basic configuration of Node/Express, Angular/UI Router, and MongoDB.

It is not ready for prime time. Please submit PRs with the intent of providing a solid footing for a variety of projects without reaching far beyond that footing. Keep things clean and commented as necessary, and please share as you'd like.

MongoDB is set up for use with either .env or your localhost. For the former you'll need a .env file in the root directory with MONGODB_URI set to yours. For localhost, run mongod.

Passport is configured on the server side to work variables entered into .env from Auth0. It's provisionally tested/working, but will require front end login hooks and subsequent handling to make magic happen. Read the docs to go to there.



TODO:
* Update app config to Angular component model (In addition to working with ng1, the component setup will make for an educational and functional opportunity to push toward ng2)
* React! (Turns out UI Router is at home with React so ABRDGD will have a React flavor)