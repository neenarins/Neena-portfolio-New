var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

// "User" model to reflect the database
var User = sequelize.define("user", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
	},
	user_name: {
		type: Sequelize.STRING,
	},
	sex: {
		type: Sequelize.STRING,
	},
	age: {
		type: Sequelize.STRING,
	},
	location: {
		type: Sequelize.STRING,
	},
	bio: {
		type: Sequelize.STRING,
	},
	pic: {
		type: Sequelize.STRING,
	},
	dev: {
		type: Sequelize.STRING,
	},
	devPref: {
		type: Sequelize.STRING,
	},
	sexPref: {
		type: Sequelize.STRING,
	}
}, { 
	// Extra configuration added to prevent "createdAt" and "updatedAt" columns from being made by Sequelize
	timestamps: false
})

// Sync with database
User.sync();

// Make User model available to other files (also creates a table)
module.exports = User;