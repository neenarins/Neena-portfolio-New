// Include React 
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


var EmployerForm = React.createClass({

  getInitialState: function() {
    return {name: '', company: '', locationcity: '', locationzip: '', email: '', username:'', password:'', companysite:'' };
  },
  
  handleCompanyChange: function(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    
    console.log('name: ' + this.state.yourname);
    console.log('username: ' + this.state.username);
    console.log('password: ' + this.state.password); 
    console.log('email: ' + this.state.email);
    console.log('company: ' + this.state.company);
    console.log('location city: ' + this.state.locationcity);
    console.log('location zip: ' + this.state.locationzip);
    console.log('company site: ' + this.state.companysite);  

    //saveEmployer:function(name,username,password,email,companyName,companyLocation,companyZipcode,companyWebsite)
    helpers.saveEmployer(this.state.yourname,this.state.username,this.state.password,this.state.email,this.state.company,this.state.locationcity,this.state.locationzip,this.state.companysite)



    // TODO: send request to the server
    this.setState({name: '', company: '', locationcity: '', locationzip: '', email: '', username:'', password:'', companysite: ''});
    return false;
  },

  render: function() {
      return (
        <div className="container">
          <div className="col-sm-12">
           <div className="panel panel-default signUpForm" >
              <div className="panel-heading" >
                 <h3 className="panel-title">Employer Sign-Up</h3>
              </div>
                 <div className="panel-body">
                  <Form horizontal action=" " onSubmit={this.handleSubmit} >
                          <FormGroup controlId="yourName">
                            <ControlLabel>Name</ControlLabel>
                              <FormControl type="text" placeholder="i.e. John" name="yourname" value={this.state.yourname} onChange={this.handleCompanyChange} required/>
                          </FormGroup>

                          <FormGroup controlId="userName">
                            <ControlLabel>Username</ControlLabel>
                              <FormControl type="text" placeholder="johnrecruiter1" name="username" value={this.state.username} onChange={this.handleCompanyChange}/>
                          </FormGroup>

                          <FormGroup controlId="formControlsPassword">
                            <ControlLabel>Password</ControlLabel>
                              <FormControl type="password" placeholder="i.e. @pA$$w0rd" name="password" value={this.state.password} onChange={this.handleCompanyChange}/>
                          </FormGroup>

                          <FormGroup controlId="employerEmail">
                            <ControlLabel>Email</ControlLabel>
                              <FormControl type="email" placeholder="i.e. recruiter@example.com" name="email" value={this.state.email} onChange={this.handleCompanyChange}/>
                          </FormGroup>


                          <FormGroup controlId="companyName">
                            <ControlLabel>Company Name</ControlLabel>
                              <FormControl type="text" placeholder="i.e. Apple" name="company" value={this.state.company} onChange={this.handleCompanyChange} required/>
                          </FormGroup>

                          <FormGroup controlId="companycity">
                            <ControlLabel>City</ControlLabel>
                              <FormControl type="text"  placeholder="i.e New York" name="locationcity" value={this.state.locationcity} onChange={this.handleCompanyChange} required/>
                          </FormGroup>

                          <FormGroup controlId="companyzip">
                            <ControlLabel>Zip Code</ControlLabel>
                              <FormControl type="text"  placeholder="10001" name="locationzip" value={this.state.locationzip} onChange={this.handleCompanyChange} required/>
                          </FormGroup>


                          <FormGroup controlId="companyLink">
                            <ControlLabel>Link to Company Site</ControlLabel>
                              <FormControl type="text" placeholder="i.e. yourcompany.com" name="companysite" value={this.state.companysite} onChange={this.handleCompanyChange}/>
                          </FormGroup>

                            <div className="well">
                              <Button bsStyle="primary" bsSize="large" block onClick={this.handleSubmit}>Submit</Button>
                            </div>

                       
                    </Form>
                 </div>
           </div>
         </div>
       </div>
          
       
   );
  }
});


module.exports = EmployerForm;