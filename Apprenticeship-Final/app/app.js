// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the proeprty associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('../config/routes.js');

var Navbar = require('../app/components/navbar.js');





ReactDOM.render(

	
	<Router>{routes}</Router>,
	document.getElementById('app')

)