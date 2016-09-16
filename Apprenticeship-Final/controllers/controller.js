var bodyParser = require('body-parser');
var path = require('path');
var Employees = require('../models/employees.js');
var Employers = require('../models/employers.js');
var Jobs = require('../models/jobs.js');
var KeywordsEmployers = require('../models/keywordsEmployers.js');
var SavedJobs = require('../models/savedJobs.js');
var helpers = require('../utils/helpers.js');
var sequelize = require('../config/connection.js');
var DataTypes = require('sequelize/lib/data-types');
var axios = require('axios');


module.exports = function(app){

	app.get('/', function(req, res) {
    	res.sendFile(path.join(__dirname + '/index.html'));
	});

	app.post('/employerspost',function(req,res){
		
		Employers.create(req.body)


	})



	app.post('/employeespost',function(req,res){
		
		Employees.create(req.body)
	})


	
	app.post('/jobspost',function(req,res){
		
		Jobs.create(req.body.main).then(function(result){
			
		 	KeywordsEmployers.bulkCreate(helpers.bulkCreateSetup(req.body.keywords,result.dataValues.jobID))
 		})
	})



	app.post('/employersearchquery',function(req,res){


		var baseJoin = 'select * from keywordsEmployers inner join jobs on keywordsEmployers.jobIDforeign = jobs.jobID' ;
		
		var mainSubject = req.body.mainSubject;
		mainSubject = mainSubject.split(" ");
		var location = req.body.location;
		var zipQuery = 'https://www.zipcodeapi.com/rest/bzES3pkCYry5b6f6fCNYCLQ2Rz01EoWQXBI113E0uc5FjlMyXAxzmoCdXDfC1csZ/radius.json/'+ location +'/25/miles';


		var titleString = '';
		for(var j = 0 ; j < mainSubject.length ; j++ ){
			titleString += 'title like "%' + mainSubject[j] + '%" or ';
		}
		titleString = titleString.slice(0,-3);
		var keywordString = ''
		for(var j = 0 ; j < mainSubject.length ; j++ ){
			keywordString += 'keywords like "%' + mainSubject[j] + '%" or ';
		}
		keywordString = keywordString.slice(0,-3);
		var companyString = ''
		for(var j = 0 ; j < mainSubject.length ; j++ ){
			companyString += 'company like "%' + mainSubject[j] + '%" or ';
		}
		companyString = companyString.slice(0,-3);

		

		if(helpers.checkNull(mainSubject) && helpers.checkEmpty(location)){
			
			if(helpers.checkZip(location)){

				

				return axios.get(zipQuery).then(function(arr){
			
					var zipcodeString = '';
			    	for(var i = 0 ; i < arr.data.zip_codes.length; i++){
						zipcodeString+=  arr.data.zip_codes[i].zip_code + ',' ;
					}					
					zipcodeString = zipcodeString.slice(0,-1);
				 	console.log(zipcodeString)
				 	console.log(titleString);
				 	console.log(keywordString);

					
		 		 	var query1 =' where zipcode in (' + zipcodeString + ') and  (' + titleString + ' or ' + keywordString  + ' or ' + companyString + ' )';
		 			var query2 = baseJoin + query1 +' group by jobID' ;
		 			
		 			sequelize.query( query2,{type: sequelize.QueryTypes.SELECT }).then(function(result){
					 	console.log(result);
					 	res.json(result);
					 })	
				

				});
			}
			else{
				
				var query3 =  ' where jobLocation = "' + location + '" and  (' + titleString + ' or ' + keywordString  + ' or ' + companyString +' )' ;
				var query4 = baseJoin + query3 + ' group by jobID;';
				sequelize.query( query4,{type: sequelize.QueryTypes.SELECT }).then(function(result){
					 	console.log(result);
					 	res.json(result);
					 })	

			} 
		}
		else if(helpers.checkNull(mainSubject)){
			
			var query5 = ' where ' + titleString + ' or ' + keywordString + ' or ' + companyString + ' ';
			var query6 = baseJoin + query5 + ' group by jobID;' ;
			
			sequelize.query( query6,{type: sequelize.QueryTypes.SELECT }).then(function(result){
					 	console.log(result);
					 	res.json(result);
					 })

		}
		else if(helpers.checkEmpty(location)){
			
			 if(helpers.checkZip(location)){
			 	
				return axios.get(zipQuery).then(function(arr){
			
					var zipcodeString2 = '';
			    	for(var i = 0 ; i < arr.data.zip_codes.length; i++){
						zipcodeString2 +=  arr.data.zip_codes[i].zip_code + ',' ;
					}					
					zipcodeString2 = zipcodeString2.slice(0,-1);

					
		 		 	var query7 =' where zipcode in (' + zipcodeString2 + ')'
		 			var query8 = baseJoin + query7 + ' group by jobID;';
		 			
		 			sequelize.query( query8,{type: sequelize.QueryTypes.SELECT }).then(function(result){
					 	console.log(result);
					 	res.json(result);
					 })	
				

				});

			}

			else{
				
				var query9 = ' where jobLocation = "' + location + '"';
				var query10 = baseJoin + query9 + ' group by jobID;';

				sequelize.query( query10,{type: sequelize.QueryTypes.SELECT }).then(function(result){
					 	console.log(result);
					 	res.json(result);
					 })	

			}

		

		}
		
	})


	app.post('/employerjobs',function(req,res){

		Employers.hasMany(Jobs,{foreignKey:'employerIDforeign'})
		Jobs.belongsTo(Employers,{foreignKey:'employerIDforeign'})

		Employers.findAll({where:{employerID:req.body.employerID }, include: [Jobs]}).then(function(result){
		 	res.json(result[0])
		 	
		 })



	})


	app.post('/savejob',function(req,res){

		var query = 'SELECT EXISTS(SELECT 1 FROM savedJobs  WHERE jobIDSavedJobs = '+ req.body.jobIDSavedJobs + ' and userIDSavedJobs = ' +req.body.userIDSavedJobs +' );'


		sequelize.query(query ,{type: sequelize.QueryTypes.SELECT }).then(function(result){
						 
						 	if(result[0][Object.keys(result[0])[0]] == 0){

						  	SavedJobs.create(req.body)
						}
						 					 
		})

 	})



	app.post('/savedjobs',function(req,res){

		Employees.hasMany(SavedJobs,{foreignKey:'userIDSavedJobs'})
		SavedJobs.belongsTo(Employees,{foreignKey:'userIDSavedJobs'})

		Employees.findAll({where:{employeeID:req.body.user }, include: [SavedJobs]}).then(function(result){
		 	res.json(result);
		 	console.log(result);
		 })

	})

	app.post('/delete/employer/job',function(req,res){
		console.log(req.body);

		Employers.hasMany(Jobs,{foreignKey:'employerIDforeign'})
		Jobs.belongsTo(Employers,{foreignKey:'employerIDforeign'})

		Jobs.destroy({where:{jobID:req.body.jobID}}).then(function(){

			Employers.findAll({where:{employerID:req.body.employerIDforeign }, include: [Jobs]}).then(function(result){
		 	res.json(result[0])
		 	
		 	})

		})


	})

	app.post('/delete/employee/job',function(req,res){

		Employees.hasMany(SavedJobs,{foreignKey:'userIDSavedJobs'})
		SavedJobs.belongsTo(Employees,{foreignKey:'userIDSavedJobs'})

		SavedJobs.destroy({where:{savedJobsID:req.body.savedJobsID}}).then(function(){

		Employees.findAll({where:{employeeID:req.body.employeeID }, include: [SavedJobs]}).then(function(result){
		 	res.json(result);
		 	
		 })
	})


	})

	app.post('/retrieve/job/employee',function(req,res){


	Jobs.hasMany(KeywordsEmployers,{foreignKey:'jobIDforeign'})
		KeywordsEmployers.belongsTo(Jobs,{foreignKey:'jobIDforeign'})

	Jobs.findAll({where:{jobID:req.body.jobID}, include:[KeywordsEmployers]}).then(function(result){

		res.json(result);
	})



	});

	app.post('/retrieve/keywords/employer',function(req,res){

	Jobs.hasMany(KeywordsEmployers,{foreignKey:'jobIDforeign'})
		KeywordsEmployers.belongsTo(Jobs,{foreignKey:'jobIDforeign'})

	Jobs.findAll({where:{jobID:req.body.jobID}, include:[KeywordsEmployers]}).then(function(result){

		res.json(result);
	})



	})




}

