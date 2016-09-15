var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Employers = sequelize.define("employers",{

	employerID:{type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true,
		allowNull:false
	},
	usertype:{type:Sequelize.STRING,
			  allowNull:false
	},
	name:{type:Sequelize.STRING,
		   allowNull:false
	},
	username:{type:Sequelize.STRING,
			  allowNull:false
	},
	password:{type:Sequelize.STRING,
			  allowNull:false
	},
	email:{type:Sequelize.STRING,
		   allowNull:false
	},
	companyName:{type:Sequelize.STRING,
			 allowNull:false
	},
	companyLocation:{type:Sequelize.STRING,
					allowNull:false		
	},
	companyZipcode:{type:Sequelize.STRING,
					allowNull:false
	},
	companyWebsite:{type:Sequelize.STRING,
					allowNull:true
	}
	

});

Employers.sync();

module.exports = Employers;