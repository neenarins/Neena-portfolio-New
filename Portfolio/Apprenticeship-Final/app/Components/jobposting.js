// Include React 
var React = require('react');
var helpers = require("../../utils/helpers.js");
var KeywordContainer = require('./keywordcontainer.js')

import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Radio from 'react-bootstrap/lib/Radio';
import Button from 'react-bootstrap/lib/Button';


var JobPosting = React.createClass({

  getInitialState: function() {
    return {userID:1, company: '',title: "", jobcity: '', jobzip:'', description:'', startingsalary: '', finalsalary:'', postinglink:'',keywords:[], keyword:''}
  },
  
  handleCompanyChange: function(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  },

  handleKeywordChange:function(e){

    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);

  },

  addKeyword:function(e){
    e.preventDefault();
    console.log('addKeyword')
    
    if(this.state.keyword.trim() ){

    var keywords = this.state.keywords;
  
    keywords.push(this.state.keyword)

    this.setState({
      keywords:keywords,
      keyword:''
      
    })
    return false;
  }

  

  },

  clearKeywords:function(){

    
    this.setState({
      keywords:[]
    })
    
  

  },

  handleSubmit: function(e) {
    e.preventDefault();
    
    console.log('company: ' + this.state.company);
    console.log('jobcity: ' + this.state.jobcity);
    console.log('jobzip: ' + this.state.jobzip); 
    console.log('description: ' + this.state.description);
    console.log('startingsalary: ' + this.state.startingsalary);
    console.log('finalsalary: ' + this.state.finalsalary);
    console.log('postinglink: ' + this.state.postinglink);
    console.log('title: ' + this.state.title)

    var obj = {

    
    main:{
    employerIDforeign:this.state.userID,
    title:this.state.title,
    company:this.state.company,
    description:this.state.description,
    jobLocation:this.state.jobcity,
    zipcode:this.state.jobzip,
    startingSalary:this.state.startingsalary,
    finalSalary:this.state.finalsalary,
    postingLink:this.state.postinglink
    },
    keywords:this.state.keywords
    





    }
    
    console.log(obj)


    helpers.saveJob(obj)


    // TODO: send request to the server
    this.setState({company: '',title:'', jobcity: '', jobzip: '', description: '', startingsalary: '', finalsalary: '', postinglink:'',keywords:[],keyword:''})
    return false;
  },

  

  render: function() {
      return (
        <div className="container">
          <div className="col-sm-12">
           <div className="panel panel-default signUpForm" >
              <div className="panel-heading" >
                 <h3 className="panel-title">Post a Job</h3>
              </div>
                 <div className="panel-body">
                  <Form horizontal action=" "  onSubmit={this.handleSubmit} >
                          <FormGroup controlId="companyName">
                            <ControlLabel>Company</ControlLabel>
                              <FormControl type="text" placeholder="i.e. Apple" name="company" value={this.state.company} onChange={this.handleCompanyChange} required/>
                          </FormGroup>

                          <FormGroup controlId="title">
                            <ControlLabel>title</ControlLabel>
                              <FormControl type="text" placeholder="i.e. Software Engineer" name="title" value={this.state.title} onChange={this.handleCompanyChange} required/>
                          </FormGroup>

                          <FormGroup controlId="jobCity">
                            <ControlLabel>City</ControlLabel>
                              <FormControl type="text" placeholder="i.e. New York" name="jobcity" value={this.state.jobcity} onChange={this.handleCompanyChange}/>
                          </FormGroup>

                          <FormGroup controlId="jobZip">
                            <ControlLabel>Zip Code</ControlLabel>
                              <FormControl type="text" placeholder="i.e. 10001" name="jobzip" value={this.state.jobzip} onChange={this.handleCompanyChange}/>
                          </FormGroup>

                          <FormGroup controlId="description">
                            <ControlLabel>Description</ControlLabel>
                              <FormControl type="description" placeholder="i.e. Front End Developer for an agency that..." name="description" value={this.state.description} onChange={this.handleCompanyChange}/>
                          </FormGroup>

                          <FormGroup controlId="keyword">
                            <ControlLabel>Skills</ControlLabel>
                              <FormControl type="text" placeholder="Add skills using button below" name="keyword" value={this.state.keyword} onChange={this.handleKeywordChange}/>
                          </FormGroup>

                          
                          <ul className="list-group">
                              {this.state.keywords.map(function(result) {
                              return <KeywordContainer  keyword={result}   />;
                               }.bind(this))}
                            </ul>
                            <Button bsSize="xsmall" onClick={this.addKeyword}> Add Skill   </Button>
                          <Button bsSize="xsmall"onClick={this.clearKeywords}> Clear   </Button>
                          

                          <FormGroup controlId="startingSal">
                            <ControlLabel>Starting Salary</ControlLabel>
                              <FormControl type="text" placeholder="i.e. $40,000" name="startingsalary" value={this.state.startingsalary} onChange={this.handleCompanyChange} required/>
                          </FormGroup>

                          <FormGroup controlId="finalSal">
                            <ControlLabel>Final Salary</ControlLabel>
                              <FormControl type="text"  placeholder="i.e $65,000" name="finalsalary" value={this.state.finalsalary} onChange={this.handleCompanyChange} required/>
                          </FormGroup>

                          <FormGroup controlId="postinglink">
                            <ControlLabel>Posting Link</ControlLabel>
                              <FormControl type="text"  placeholder="i.e. yourcompany.com/posting17" name="postinglink" value={this.state.postinglink} onChange={this.handleCompanyChange} required/>
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


module.exports = JobPosting;