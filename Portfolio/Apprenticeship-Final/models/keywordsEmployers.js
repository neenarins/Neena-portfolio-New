var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');


var KeywordsEmployers = sequelize.define('keywordsEmployers',{

	keywordsEmployersID:{
						type:Sequelize.INTEGER,
					 	autoIncrement:true,
					 	allowNull:false,
					 	primaryKey:true
						},

	jobIDforeign:{
				  type:Sequelize.INTEGER,
				  allowNull:false

	},
	keywords:{
			type:Sequelize.STRING,
			allowNull:false


	}







});

KeywordsEmployers.sync();

module.exports = KeywordsEmployers;