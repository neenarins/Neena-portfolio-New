// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;


var Navbar = require('../app/components/navbar.js');
var Main = require('../app/components/main.js');
var Employer = require('../app/components/employerform.js');
var Employee = require('../app/components/employeeform.js');
var JobListings = require('../app/components/jobListings.js');
var EmployerProfile = require('../app/components/employerprofile.js');
var JobPosting = require('../app/components/jobposting.js');
var SavedListings = require('../app/components/savedListings.js')
var EmployerProfile = require('../app/components/employerprofile.js')

module.exports = (

	<Route path='/' component={Navbar}>
		
		<Route path='Employer' component={Employer} />	
		<Route path='Employee' component={Employee} />
		<Route path='Jobs' component={JobListings}/>
		<Route path='PostJob' component={JobPosting}/>
		<Route path='SavedJobs' component={SavedListings}/>
		<Route path='employerprofile' component={EmployerProfile}/>
		<IndexRoute component = {Main}/>
 
	</Route>

	)

// 		<Route path='Employer' component={employer} />
