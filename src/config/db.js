const sequelize = require('sequelize');

const database = new sequelize('juan','juan','juan',{
    dialect : 'mssql',host:'localhost',port: 51345
});
database.sync({alter:true});

module.exports = database;