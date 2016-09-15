var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Employees = sequelize.define("employees",{

	employeeID:{type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true,
		allowNull:false},
	usertype:{type:Sequelize.STRING,
			  allowNull:false
	},
	name:{type:Sequelize.STRING,
		   allowNull:false
	},
	username:{
		type:Sequelize.STRING,
		allowNull:false
	},
	password:{
		type:Sequelize.STRING,
		allowNull:false
	},
	employeeLocation:{
		type:Sequelize.STRING,
		allowNull:false
	},
	employeeZipcode:{
		type:Sequelize.STRING,
		allowNull:false
	},
	email:{
		type:Sequelize.STRING,
		allowNull:false
	},
	school:{
		type:Sequelize.STRING,
		allowNull:false
	},
	degree:{
		type:Sequelize.STRING,
		allowNull:false
	},
	experience:{
		type:Sequelize.STRING,
		allowNull:false
	}
	

});

Employees.sync();

module.exports = Employees;