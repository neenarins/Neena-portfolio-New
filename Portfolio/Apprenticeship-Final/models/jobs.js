var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');


var Jobs = sequelize.define("jobs",{

	jobID:{type:Sequelize.INTEGER,
			allowNull:false,
			primaryKey:true,
			autoIncrement:true
	},
	employerIDforeign:{
		type:Sequelize.INTEGER,
		allowNull:false
	},
	title:{
		type:Sequelize.STRING,
		allowNull:false
	},
	company:{
		type:Sequelize.STRING,
		allowNull:false
	},
	description:{
		type:Sequelize.STRING(4000),
		allowNull:false
	},
	jobLocation:{
		type:Sequelize.STRING,
		allowNull:false
	},
	zipcode:{
		type:Sequelize.STRING,
		allowNull:false
	},
	startingSalary:{
		type:Sequelize.STRING,
		allowNull:true
	},
	finalSalary:{
		type:Sequelize.STRING,
		allowNull:true
	},
	postingLink:{
		type:Sequelize.STRING,
		allowNull:true
	}



});

Jobs.sync();

module.exports = Jobs;