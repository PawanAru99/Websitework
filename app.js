const express = require("express");
// var mysql = require('mysql2');
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3020;

// app.use(bodyParser.json());



app.set('view engine', 'ejs');
const dotenv = require("dotenv");
dotenv.config({path: './.env'});
// const Sequelize = require("sequelize");

const bodyParser = require("body-parser"); 
app.use(bodyParser.json());
app.use(express.json());
const adminControllers = require("./Controllers/admincontrollers");

const path = require('path');
// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/', adminControllers.dashboard);


app.use(function(req, res, next) {
    res.status(404).send("404 ,Sorry, This page does not exist!");
  });


module.exports = {app};
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});



