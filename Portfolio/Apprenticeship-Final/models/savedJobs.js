var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');


var SavedJobs = sequelize.define('savedJobs',{

	savedJobsID:{
						type:Sequelize.INTEGER,
					 	autoIncrement:true,
					 	allowNull:false,
					 	primaryKey:true
						},

	jobIDSavedJobs:{
				  type:Sequelize.INTEGER,
				  allowNull:false

	},
	userIDSavedJobs:{
				type:Sequelize.INTEGER,
				allowNull:false
	}







});

SavedJobs.sync();

module.exports = SavedJobs;