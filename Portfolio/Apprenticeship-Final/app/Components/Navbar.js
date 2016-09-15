var React = require('react');
var Router = require('react-router');



var Navbar = React.createClass({



	render: function() {


		return(

			<div className="main-container">
				<nav className="navbar navbar-inverse navbar-fixed-top" id="navBar">
				  <div className="container-fluid">
			      	<ul className="nav navbar-nav navbar-left">
			      	  <li><a href="#"><strong>Home</strong></a></li>
				      <li><a href="#/employee">Employees</a></li> 
				      <li><a href="#/jobs">Jobs</a></li>
				      <li><a href="#/savedjobs">Saved Jobs</a></li> 
			     	</ul>
				    <ul className="nav navbar-nav navbar-right">
				      <li><a href="#/employer">Employer Signup</a></li> 
				      <li><a href="#/postjob">Add A Job</a></li>
				      <li><a href="#/employerprofile">Employer Profile</a></li>
			      	</ul>
				    
			
				  </div>
				</nav>

				{this.props.children}

			</div>

		)
	}
})

module.exports = Navbar;