// this compoent maps the employees saved jobs

var React = require('react');
var helpers = require("../../utils/helpers.js");
var Router = require('react-router');

import Modal from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Radio from 'react-bootstrap/lib/Radio';
import Button from 'react-bootstrap/lib/Button';

var EmployeeSavedJobs = React.createClass({

	getInitialState: function(){
		
		return {
			employeeID:this.props.user,
			savedJobsID:this.props.savedJobsID,
			jobID:this.props.jobID,
			jobs:[],
			showModal:false,
			title:this.props.data.title,
			description:this.props.data.description,
			jobLocation:this.props.data.jobLocation,
			postingLink:this.props.data.postingLink,
			startingSalary:this.props.data.startingSalary,
			finalSalary:this.props.data.finalSalary,
			zipcode:this.props.data.zipcode,
			keywords:[]


			
		}
 	},
 	 close() {
    this.setState({ showModal: false });
  },

  open() {
    

    this.setState({ showModal: true });
  
  },
  componentWillMount:function(){
  	// on  mount, job info as well as keywords are queried
	var obj = {
  		jobID:this.state.jobID
  	}


  	helpers.retrieveJobEmployee(obj).then(function(result){
  		console.log(result.result.data)
  		
  		var array = [];
  	 	

 	 	for(var i=0 ; i < result.result.data[0].keywordsEmployers.length ; i++){
  	 		console.log(result.result.data[0].keywordsEmployers[i].keywords)
			array.push(result.result.data[0].keywordsEmployers[i].keywords)
		  }

  		this.setState({
  			title:result.result.data[0].title,
			description:result.result.data[0].description,
			jobLocation:result.result.data[0].jobLocation,
			postingLink:result.result.data[0].postingLink,
			startingSalary:result.result.data[0].startingSalary,
			finalSalary:result.result.data[0].finalSalary,
			zipcode:result.result.data[0].zipcode,
			keywords:array


  		})


  	}.bind(this))

  },




 	
 	
 	removeJob:function(){
 		// removes job 
 	
 		var obj = {employeeID:this.state.employeeID,
 			   savedJobsID:this.state.savedJobsID
 		}

 		helpers.removeJobReturnDataEmployee(obj).then(function(result){
 			console.log(result.result.data.jobs)
 			this.setState({
 				jobs:result.result.data[0].savedJobs
 			})
 			this.handleChange();
 		}.bind(this))
 		



 	},

 	handleChange:function() {
	    // sends updated info to parent element
	    this.props.callback(
	      this.state.jobs
	    );
	 
	 },



	render:function(){

		return(
			<div>
			 <li className="list-group-item">
						
				<h3>
				  	<span><em>{this.state.title}</em></span>
					<span className="btn-group pull-right" >
						<p>{this.state.description}</p>

						<Button onClick={this.removeJob}>Delete</Button>
						<Button onClick={this.open}>Modal</Button>

					</span> 
				</h3>
				
				
			</li> 
		


			<Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>{this.state.description}</p>

            

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>{this.state.keywords[0]}</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

		</div>










		)

}
});

module.exports = EmployeeSavedJobs;