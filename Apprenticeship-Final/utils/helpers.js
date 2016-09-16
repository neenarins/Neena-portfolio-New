var axios = require('axios');
var react = require('react');


var helpers = {

	// mainSearch:function(topic,location,miles,callback){
		
	// 	//console.log(helpers.checkEmpty(main));
	// 	console.log(helpers.checkEmpty(location));
	// 	console.log(topic)
		

	// 	if(helpers.checkNull(topic) && helpers.checkEmpty(location)){
			
	// 		if(helpers.checkZip(location)){

	// 			var query = 'https://www.zipcodeapi.com/rest/bzES3pkCYry5b6f6fCNYCLQ2Rz01EoWQXBI113E0uc5FjlMyXAxzmoCdXDfC1csZ/radius.json/'+ location +'/'+ miles + '/miles';

	// 			return axios.get(query).then(function(arr){
			
	// 				var zipcodeString = '';
	// 		    	for(var i = 0 ; i < arr.data.zip_codes.length; i++){
	// 					zipcodeString+=  arr.data.zip_codes[i].zip_code + ',' ;
	// 				}

	// 				var titleString = '';
	// 				var titleArray = topic;
	// 				for(var j = 0 ; j < titleArray.length ; j++ ){

	// 					titleString += 'title like "%' + titleArray[j] + '%" or ';
	// 				}

	// 				titleString = titleString.slice(0,-3);

	// 				zipcodeString = zipcodeString.slice(0,-1);
	// 			 	console.log(titleString);
	// 				var query1 = 'select * from keywordsEmployers inner join jobs on keywordsEmployers.jobIDforeign = jobs.jobID where zipcode in (' + zipcodeString + ')'
	// 	 		 	var query2 = 'and  (' + titleString +  ')';
	// 	 			//var query3 = query1 + query2;
	// 	 			callback(query1);
	// 			});
	// 		}
	// 		else{
	// 			var query4 = 'select * from keywordsEmployers inner join jobs on keywordsEmployers.jobIDforeign = jobs.jobID where jobLocation = "' + location + '"' ;	 		 
	// 			callback(query4);
	// 		}




	// 	}
	// 	else if(helpers.checkNull(topic)){
	// 		console.log("2");
	// 	}
	// 	else if(helpers.checkEmpty(location)){
	// 		console.log("3");
	// 	}
	// 	else{
	// 		console.log('4');
	// 	}





	// },

	checkEmpty:function(string){
		if(string==="")
			return false;
		else
			return true;

	},
	checkNull:function(array){
		if(array.length == 1 && array[0]==""){
			return false;
		}
		else{
			return true;
		};
	

	},
	checkZip:function(zip){

		var isnum = /^\d+$/.test(zip)
		if(isnum && zip.length==5)
			return true;
		else
			return false;

	},

	buildZip:function(zip,miles){

		var query = 'https://www.zipcodeapi.com/rest/bzES3pkCYry5b6f6fCNYCLQ2Rz01EoWQXBI113E0uc5FjlMyXAxzmoCdXDfC1csZ/radius.json/'+ zip +'/'+ miles + '/miles';

		return axios.get(query).then(function(arr){
			
			var zipcodeString = '';
			for(var i = 0 ; i < arr.data.zip_codes.length; i++){
				
				//console.log(arr.data.zip_codes[i].zip_code)}
				zipcodeString+=  arr.data.zip_codes[i].zip_code + ',' ;
				 }
				 zipcodeString = zipcodeString.slice(0,-1);
				 
				 return zipcodeString;
		
		



		});
	




	},

	buildMain:function(str,search){

		var array = str.split(" ");
		var string = '';
		
		for(var i = 0 ; i < array.length ; i++ ){

			string += search + ' like "%' + array[i] + '%" or ';

		}

		string = string.slice(0,-3);
		//console.log(string);
		return string;
	
	},














	bulkCreateSetup:function(keywordArray, jobIDforeign){
		var array = [];
		for(var i = 0 ; i < keywordArray.length; i++){
			var obj = {keywords:keywordArray[i],jobIDforeign:jobIDforeign}
			array.push(obj);
		}

		return array;



	},

	zipcodeGenerator:function(zip,miles,callback){


		var finalQuery = 'https://www.zipcodeapi.com/rest/bzES3pkCYry5b6f6fCNYCLQ2Rz01EoWQXBI113E0uc5FjlMyXAxzmoCdXDfC1csZ/radius.json/'+ zip +'/'+ miles + '/miles';


			
		return axios.get(finalQuery).then(function(arr){
			
			var zipcodeString = '';
			for(var i = 0 ; i < arr.data.zip_codes.length; i++){
				
				//console.log(arr.data.zip_codes[i].zip_code)}
				zipcodeString+=  arr.data.zip_codes[i].zip_code + ',' ;
				 }
				 zipcodeString = zipcodeString.slice(0,-1);
				 
				 var query1 = 'select * from keywordsEmployers inner join jobs on keywordsEmployers.jobIDforeign = jobs.jobID where '
		 		//var query2 = ' keywords like "%1%" or jobID like "%2%" '
		 		var query3 = 'zipcode in (' + zipcodeString + ')';
		 		var tosend = query1 + query3;





				callback(tosend);
		
		



		});


	
},

saveEmployer:function(name,username,password,email,companyName,companyLocation,companyZipcode,companyWebsite){

	var obj = {
		usertype:"employer",
		name:name,
		username:username,
		password:password,
		email:email,
		companyName:companyName,
		companyLocation:companyLocation,
		companyZipcode:companyZipcode,
		companyWebsite:companyWebsite


	}


	return axios.post('/employerspost', obj)



},


//saveEmployee:function(name,username,password,city,zipcode,email,school,degree,experience){
	saveEmployee:function(obj){
	// var obj = {
	// 	usertype:"employee",
	// 	name:name,
	// 	username:username,
	// 	password:password,
	// 	employeeLocation:city,
	// 	employeeZipcode:zipcode,
	// 	email:email,
	// 	school:school,
	// 	degree:degree,
	// 	experience:experience
	// }

	return axios.post('/employeespost', obj)



},

employerJobs:function(employerID){

	var obj = {
		employerID:employerID
	}

	return axios.post('/employerjobs', obj).then(function(response){
			console.log(response)
			return {
	  		employerData:response
	  		}
		
		});




},
//must add title and keywords eventually
saveJob:function(obj){






return axios.post('/jobspost',obj)


},

employeeSearch:function(mainSubject,location){

	var obj = {
		mainSubject:mainSubject,
		location:location
	}

	return axios.post('/employersearchquery', obj).then(function(response){
			//console.log(response);
			return {
	  		jobQuery:response
	  		}
		
		});




},

saveJob2:function(employeeID,jobID){

	var obj = {
		jobIDSavedJobs:jobID,
		userIDSavedJobs:employeeID
	}

return	axios.post('/savejob',obj)



},

savedJobs:function(user){

	var obj = {
		user:user
	}

	return axios.post('/savedjobs',obj).then(function(result){
		
		return {
			jobs:result
		}
	})


},

removeJobReturnDataEmployer:function(obj){

	

	return axios.post('/delete/employer/job',obj).then(function(result){
		return {result:result}
	
	})


},

removeJobReturnDataEmployee:function(obj){

	return axios.post('/delete/employee/job',obj).then(function(result){
		return {result:result}
	
	})




},

retrieveJobEmployee:function(obj){


return axios.post('/retrieve/job/employee',obj).then(function(result){
		return {result:result}
		
	})


},


retrieveKeywords:function(obj){

	return axios.post('/retrieve/keywords/employer',obj).then(function(result){
		return {result:result}
		
	})


},











	
















};

module.exports = helpers;