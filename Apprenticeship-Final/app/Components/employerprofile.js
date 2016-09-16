// Include React 
var React = require('react');
var helpers = require("../../utils/helpers.js");
var EmployerSavedJobs = require('./employersavedjobs.js')

var EmployerProfile = React.createClass ({


	getInitialState: function(){
		return {
			jobsposted: "",
			postedJobs:[],
			info:[]
			
		}
	},

	componentDidMount: function(){

		helpers.employerJobs(1)
			.then(function(jobdata){
				this.setState({
					postedJobs: jobdata.employerData.data.jobs,
					info:jobdata.employerData.data
				});
				console.log("saved results", jobdata.employerData.data.employerID);
				console.log(this.state.postedJobs)
			}.bind(this))
		


	},

	handleTransfer:function(jobs){
		this.setState({
			postedJobs:jobs
		})

	},

	render: function() {

		return (
		<div className="container" id="spacing">

			
			
			
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>Posted Jobs</strong></h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
										  
									 {this.state.postedJobs.map(function(result) {
	           				return <EmployerSavedJobs  key={result.jobID} data={result} callback={this.handleTransfer}  />;
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

module.exports = EmployerProfile;