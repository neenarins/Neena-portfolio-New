var React = require('react');
var Router = require('react-router');

import Button from 'react-bootstrap/lib/Button';
//import FaBeer from 'react-icons/fa/beer'

var Landing = React.createClass({


	render: function(){

		return(			

			<div className="main-container">
			<div id="spacing">
				<div id="landing">
					
						<h1 className="text-center" id="logoText">
							APPRENTICE
						</h1>
						
						<h3 className="text-center" id="tagLine">
							DON'T GET LOST IN TECHSPACE
						</h3>
					<div className="row" id="buttonSpace">
						<div className="col-sm-12 col-md-4 col-md-offset-5">
							<a href="#/employer" className="btn btn-primary btn-large"><i className="icon-white icon-pencil"></i> Employer Signup</a>
							<a href="#/employee" className="btn btn-primary btn-large"><i className="icon-white icon-pencil"></i> Employee Signup</a>
						</div>
					</div>
					</div>
			</div>
			</div>
			)
		}	
});	


module.exports = Landing;