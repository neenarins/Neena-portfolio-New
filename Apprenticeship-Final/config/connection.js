
var Sequelize = require('sequelize');

var source = {

	    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "",
        database: ""
    },

        jawsDB: {
        port: 3306,
        host: 'nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'ju7e82eidieptagq',
        password: "saaiqpy56lr1hglk",
        database: "fkk1t9371ol5erh2" 
 
    }
}


var selectedSource = source.jawsDB;



var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;