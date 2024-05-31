// Utilizes the 'dotenv' package in order to load the .env file and sets the environment variables to the process.env object.
require('dotenv').config();

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Import express server
const express = require('express');

// Import express-session
const session = require('express-session');

// Import express handlebars for template views
const exphbs = require('express-handlebars');

// Import the routes
const routes = require('./controllers');

// Import the custom helper methods
const helpers = require('./utils/helpers');

// Import the connection object
const sequelize = require('./config/connection');

//Incorporate session storage using sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize an instance of Express app
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });

// Set up sessions with cookies
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    // maxAge sets the maximum age for the cookie to be valid. Here, the cookie (and session) will expire after one hour. The time should be given in milliseconds.
    maxAge: 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static middleware pointing to the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/styles', express.static(path.join(__dirname, 'public/css')));

// Turn on routes
app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync({ force: false }).then(() => {
  // listen() method is responsible for listening for incoming connections on the specified port
  app.listen(PORT, () => console.log('Now listening'));
});
