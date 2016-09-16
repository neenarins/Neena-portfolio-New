var React = require('react');
var Router = require('react-router');
var helpers = require("../../utils/helpers.js");
var EmployeeSavedJobs = require('./employeesavedjobs.js');

var SavedListings = React.createClass({

	getInitialState: function(){
			
			return {
				user:1,
				jobs:[]
			
			}
	 },
	 componentDidMount: function(){
		console.log("mounted 3")
		// helpers.getArticles().then(function(data){
		// 	this.setState({
		// 				articles: data.articles,
		// 			})
		// }.bind(this))
		
		helpers.savedJobs(this.state.user).then(function(result){
			this.setState({
				jobs:result.jobs.data[0].savedJobs
				
			})
			console.log(result.jobs.data)
			//console.log(result.jobs.data[0].savedJobs)
			//console.log(this.state.jobs)
		}.bind(this))

	},

	handleTransfer:function(jobs){
		this.setState({
			jobs:jobs
		})

	},


	render: function() {

		return (

			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-default">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>Saved Jobs</strong></h1>
						</div>
						
					</div>
				</div>
			
			
			
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>Listings 5</strong></h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
									  
										 {this.state.jobs.map(function(result) {
	           				return <EmployeeSavedJobs  key={result.savedJobsID} data={result} user={this.state.user} jobID={result.jobIDSavedJobs} savedJobsID={result.savedJobsID} callback={this.handleTransfer}   />;
	        						
	        					}.bind(this))}   





								</ul>					
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	},
});

module.exports = SavedListings;