var React = require('react');
var Router = require('react-router');
var helpers = require("../../utils/helpers.js");
var EmployeeResults = require('./employeeresults.js');

var JobListings = React.createClass({

	getInitialState: function(){
      	return {keywords: '', location: '', data:[] ,user:1};
    },

    handleInput: function(event){
      	var newState = {};
      	newState[event.target.name] = event.target.value;
      	this.setState(newState);
    },

    handleSubmit: function(event){
      	event.preventDefault();
      
    console.log('keywords: ' + this.state.keywords);
    console.log('location: ' + this.state.location);


   









   helpers.employeeSearch(this.state.keywords,this.state.location).then(function(data){
   		
   		this.setState({
   			data:data.jobQuery.data,
   			keywords:'',
   			location:''
   		})
   		console.log(this.state.data)
   }.bind(this))

    //this.setState({keywords: '', location: ''});

    






    return false;





},

	render: function() {

		return (
			<div className="main-container" id="spacing">
			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-default" id="panelSpace">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>Search Opportunities</strong></h1>
						</div>
						<div className="panel-body">
							<div className="col-lg-6">
							    <div className="input-group">
								    <input type="text" className="form-control" placeholder="Keywords: JavaScript, MongoDB, Front-End, Back-End, etc." name="keywords" value={this.state.keywords} onChange={this.handleInput}>
								    </input>
								    
							    </div>
							    <br/>
							    <div className="input-group">
								    <input type="text" className="form-control" placeholder="Location: Zip Code, City" name="location" value={this.state.location} onChange={this.handleInput}></input>
								    
							    </div>

							    <span className="input-group-btn">
								    	<button className="btn btn-default" type="button" onClick={this.handleSubmit}><span className="glyphicon glyphicon-search" aria-hidden="true"> Submit!</span></button>
								</span>
							</div>
						</div>
					</div>
				</div>
			
			
			
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>Listings</strong></h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
							
								 {this.state.data.map(function(result) {
	           				return <EmployeeResults  key={result.jobID} data={result} user={this.state.user}  />;
	        					}.bind(this))}   

				  
								</ul>					
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>

		);
	},
});

module.exports = JobListings;