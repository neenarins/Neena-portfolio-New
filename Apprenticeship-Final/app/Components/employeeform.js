// this component is the signup form for new employees.


var React = require('react');
var helpers = require("../../utils/helpers.js");

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Radio from 'react-bootstrap/lib/Radio';
import Button from 'react-bootstrap/lib/Button';




var EmployeeForm = React.createClass({

    getInitialState: function(){
      return {employee: '', name: '', email: '', userName: '',location:'', zipcode:'', password: '', school: '', selectValue: '', selectValue1: ''};
    },

    handleChange: function(event){
      this.setState({selectValue: event.target.value});
    },

    handleExpChange: function(event){
      this.setState({selectValue1: event.target.value})
    },

    handleEmployeeChange: function(event){
      var newState = {};
      newState[event.target.name] = event.target.value;
      this.setState(newState);
    },

    handleSubmit: function(event){
      event.preventDefault();
      
    console.log('employee: ' + this.state.employee);
    console.log('name: ' + this.state.name);
    console.log('email: ' + this.state.email);
    console.log('userName: ' + this.state.userName);
    console.log('password: ' + this.state.location);
    console.log('zipcode: ' + this.state.zipcode);
    console.log('password: ' + this.state.password);
    console.log('school: ' + this.state.school);
    console.log('degree: ' + this.state.selectValue);
    console.log('experience: ' + this.state.selectValue1);

    var obj = { usertype: 'employee',
  name: this.state.name,
  username: this.state.userName,
  password: this.state.password,
  employeeLocation: this.state.location,
  employeeZipcode: this.state.zipcode,
  email: this.state.email,
  school: this.state.school,
  degree: this.state.selectValue,
  experience: this.state.selectValue1 }

  // saves employee to employee database
  helpers.saveEmployee(obj)
    

   

      this.setState({employee: '', name: '', email: '', userName: '', password: '', school: '', });

      return false;
    },
    
    render: function() {

      return (
        <div className="container">
         <div className="panel panel-default signUpForm">
            <div className="panel-heading">
               <h3 className="panel-title">Employee Sign-Up</h3>
            </div>
               <div className="panel-body">
                <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup controlId="employeeName">
                          <ControlLabel>Name</ControlLabel>
                            <FormControl type="text" placeholder="Your Name" value={this.state.name} name="name" onChange={this.handleEmployeeChange}/>
                        </FormGroup>

                        <FormGroup controlId="employeeUserName">
                          <ControlLabel>User Name</ControlLabel>
                            <FormControl type="text" placeholder="User Name" value={this.state.userName} name="userName" onChange={this.handleEmployeeChange}/>
                        </FormGroup>

                        <FormGroup controlId="employeePassword">
                          <ControlLabel>Password</ControlLabel>
                            <FormControl type="text" placeholder="Password" value={this.state.password} name="password" onChange={this.handleEmployeeChange}/>
                        </FormGroup>

                        <FormGroup controlId="employeeLocation">
                          <ControlLabel>City</ControlLabel>
                            <FormControl type="text" placeholder="City" value={this.state.location} name="location" onChange={this.handleEmployeeChange}/>
                        </FormGroup>

                        <FormGroup controlId="employeeZipcode">
                          <ControlLabel>Zipcode</ControlLabel>
                            <FormControl type="text" placeholder="Zipcode" value={this.state.zipcode} name="zipcode" onChange={this.handleEmployeeChange}/>
                        </FormGroup>







                        <FormGroup controlId="employeeEmail">
                          <ControlLabel>Email address</ControlLabel>
                            <FormControl type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleEmployeeChange}/>
                        </FormGroup>

                        

                        

                        <FormGroup controlId="employeeDegree">
                          <ControlLabel>Highest Degree Completed</ControlLabel>

                          <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} value={this.state.selectValue}>
                               <option value="select">Degree</option>
                               <option value="GED">GED</option>
                               <option value="Associates">Associates</option>
                               <option value="Bachelors">Bachelors</option>
                               <option value="Masters">Masters</option>
                               <option value="Ph.D">Ph.D</option>
                               <option value="Certification">Certification</option>
                            
                          </FormControl>
                        </FormGroup>

                        <FormGroup controlId="employeeSchools">
                          <ControlLabel>University/School Attended</ControlLabel>
                            <FormControl type="text" placeholder="School Attended" value={this.state.school} name="school" onChange={this.handleEmployeeChange} />
                        </FormGroup>


                     <FormGroup controlId="employeeExperience">
                        <ControlLabel>Experience With Developing</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={this.handleExpChange} value={this.state.selectValue1}>
                             <option value="select">Please Choose</option>
                             <option value="1">>1 year</option>
                             <option value="1-2">1-2 years</option>
                             <option value="2-3">2-3 years</option>
                             <option value="3-5">3-5 years</option>
                             <option value="5+">5+ years</option>
                        </FormControl>
                     </FormGroup>


                        <FormGroup controlId="employeePosition">
                          <ControlLabel>Position Seeking: </ControlLabel><br/>
                           
                          <Checkbox >
                            Front-End
                          </Checkbox>
                          {' '}
                          <Checkbox >
                            Back-End
                          </Checkbox>
                          {' '}
                          <Checkbox >
                            Full Stack
                          </Checkbox>
                        </FormGroup>

                        <FormGroup controlId="employeeFiles">
                           <ControlLabel>File</ControlLabel>
                              <FormControl type="file" />  
                              <FormControl type="file" />       
                        </FormGroup>

                        <Checkbox checked readOnly>
                           Willing to Relocate?
                        </Checkbox><br/>

                     <div className="well">
                            <Button bsStyle="primary" bsSize="large" block onClick={this.handleSubmit}>Submit</Button>
                          </div>
                  </Form>
               </div>
         </div>
       </div>
    
    
          
       
   );
  }
});


module.exports = EmployeeForm;