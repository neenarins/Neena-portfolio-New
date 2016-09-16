// Dependencies
var express = require('express');
var User = require('../models/user.js');
var path = require('path');
var bodyParser = require('body-parser');
var sequelize = require('sequelize');

//OAuth Password Dependencies
var GitHubStrategy = require('passport-github2').Strategy;
var passport = require('passport');
var util = require('util');
var session = require('express-session');
var methodOverride = require('method-override');
var partials = require('express-partials');

// Routes
// =============================================================
module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index', { user: req.user });
	});

	app.get('/register', ensureAuthenticated,function(req, res){

		var gitHubUser = req.user;

		console.log("this is from register route: ");
		 // console.log(req.user.username);
		 // console.log(req.user._json.name);
		console.log(gitHubUser._json.name);			

		res.render('register', { user: req.user });
		// res.sendFile(path.join(__dirname + '/../views/profilepage.ejs'));

	});

	

	app.get('/profilepage',ensureAuthenticated, function(req, res){

		console.log(req.user);
		 console.log(req.user.username);
		 console.log(req.user.name);

		res.render('profilepage', { user: req.user });
		// res.sendFile(path.join(__dirname + '/../views/profilepage.ejs'));
	});


	app.get('/search', function(req, res){
  		res.render('search', { user: req.user });
	});
	

	// GET /auth/github
	app.get('/auth/github',
	  passport.authenticate('github', { scope: [ 'user:email' ] }));

	// GET /auth/github/callback
	app.get('/auth/github/callback', 
	  passport.authenticate('github', { failureRedirect: '/' }),
	  function(req, res) {
	  	console.log("from github: ");
	  	console.log(req.user.username);
		res.redirect('/register');
	  });

	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});




	function ensureAuthenticated(req, res, next) {
	  if(req.isAuthenticated()){ 
	  	return next(); 
	  }else{
	  	console.log("user is not logged in");
	  }
	  //res.redirect('/')
	}
	
	// Query for all users or specific users 
	app.get('/api/users/:username?', function(req, res){

		username = req.params.username;

		if(username){

			User.findAll({
			  where: {
			    user_name: username
			  }
			}).then(function(result){
				res.json(result);
			})
		}

		else{

			User.findAll({

			}).then(function(result){
				res.json(result);
			})
		}
	})


	// =================================
	app.post('/api/users', function(req, res){

		var newUser = req.body;

		console.log("from the post route: ");
		console.log(req.user.username);
		var ghUserName = req.user.username;
		var ghName = req.user.displayName;
		var ghLocation = req.user._json.location;
		var ghPic = req.user._json.avatar_url;
		
		User.create({
			name: ghName,
			user_name: ghUserName,
			sex: newUser.sex,
			age: newUser.age,
			location: ghLocation,
			bio: newUser.bio,
			pic: ghPic,
			dev: newUser.dev,
			devPref: newUser.devPref,
			sexPref: newUser.sexPref
		}).then(function(result){
			res.json("User added");
		});


	});
	
}

