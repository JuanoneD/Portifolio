const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.define('Projects',{
    idProject:{
        type: sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    Title:{
        type: sequelize.STRING(50),
        allowNull: false
    },
    Description:{
        type: sequelize.STRING(255),
        allowNull: false
    },
    LinkProject:{
        type: sequelize.STRING(255),
        allowNull: false
    },
    ImgProject:{
        type: sequelize.STRING(255),
        allowNull: false
    }
})