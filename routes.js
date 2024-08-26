const express = require('express');
const route = express.Router();

const home = require('./src/routes/home');

route.get('/',home.starPage);

route.post('/insertProject',home.insertProjects);

module.exports = route;