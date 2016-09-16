// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

/* 
#todo: Fix chat (secondary goal)
#todo: Defined image columns (secondary goal)
#todo: pull projects from GitHub API (secondary goal)

#todo: PRIORITY #1 - is get the search page working (both front-end and backend)
#todo: PRIORTY #1 - Pull information from database (to get your profile)
#todo: PRIORITY #1 - REGISTRATION + Login handling
/*

================================================================

#todo - Get Static Content Folder working (DONE)
#todo - POST route untested 
#todo - No Frontend GUI yet  
#todo - get index.html working again (DONE)
#todo - get data from database (DONE)
#todo - login oAuth github. 
#todo - login without oAuth to send to know which user is logged in 
#todo - first creation 
#todo - modal to search through to look through whoever. 	
*/ 

// Dependencies
// =============================================================
var express 	= require('express');
var bodyParser 	= require('body-parser');

//OAuth Password Dependencies
var GitHubStrategy = require('passport-github2').Strategy;
var passport = require('passport');
var util = require('util');
var session = require('express-session');
var methodOverride = require('method-override');
var partials = require('express-partials');


//OAuth Password
var GITHUB_CLIENT_ID = "eaeca29238a5058cda6a";
var GITHUB_CLIENT_SECRET = "8ae093ff672b91de7d14f725e5baee2bf6b7cfc6";


// Passport session setup
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the GitHubStrategy within Passport.
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://programmedtolove.herokuapp.com/auth/github/callback"

  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//configure Express
app.set('views', __dirname + '/app/public');
app.set('view engine', 'ejs');
app.use(partials());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

var staticContentFolder;
staticContentFolder = __dirname + '/app/public';


app.use('/static', express.static(staticContentFolder));

// Routes
// =============================================================
require("./app/controllers/ptl_controller.js")(app);

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log(staticContentFolder);
	console.log('App listening on PORT ' + PORT);
})