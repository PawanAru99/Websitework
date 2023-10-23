const express = require("express");
// var mysql = require('mysql2');
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3005;

// app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config({path: './.env'});
// const Sequelize = require("sequelize");

const bodyParser = require("body-parser"); 
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:false}));

const routespage = require("./routes/adminRoute");
const adminControllers = require("./Controllers/adminControllers");
// const authController = require("./Controllers/authController");
// const connectdb = require("./db/connectdb");
const path = require('path');

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/', adminControllers.dashboard);
// app.get('/login', adminControllers.login);
app.use('/', routespage);
// app.use('/auth', require('./routes/authroute'))

app.use(function(req, res, next) {
    res.status(404).send("404 ,Sorry, This page does not exist!");
  });

// app.use(function(req, res, next) {
//     res.status(404).render('404', { title: 'Page Not Found', showLinks: true });
//   });

module.exports = {app};
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});



