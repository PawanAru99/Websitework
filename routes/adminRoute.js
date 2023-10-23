const express = require("express");
const routeforadmin = express.Router();

const adminControllers = require("./Controllers/adminControllers.");
routeforadmin.use(express.static('public'));
routeforadmin.use('/css', express.static(__dirname + 'public/css'));
routeforadmin.use('/js', express.static(__dirname + 'public/js'));
routeforadmin.use('/img', express.static(__dirname + 'public/img'));

routeforadmin.get('/', adminControllers.dashboard);

module.exports = routeforadmin;




// ---------------------------------------------------------