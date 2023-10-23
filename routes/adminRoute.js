const express = require("express");
const routeforadmin = express.Router();


// const bodyParser = require('body-parser');

// const bodyParser = require('body-parser');
// routeforadmin.use(bodyParser.json());
// routeforadmin.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({extended:true}));
//admin_route
// const path = require('path');
// const multer = require('multer');

// routeforadmin.set('views', '../views');
// app.set('view engine', 'ejs');
// routeforadmin.set('views', path.join(__dirname, 'views'));
// routeforadmin.set('views', path.join(__dirname, './views'));


// const database = require("../db/connectdb")
const adminControllers = require("../Controllers/adminControllers");

// const app = require("..");

routeforadmin.use(express.static('public'));
routeforadmin.use('/css', express.static(__dirname + 'public/css'));
routeforadmin.use('/js', express.static(__dirname + 'public/js'));
routeforadmin.use('/img', express.static(__dirname + 'public/img'));

// app.get('/login' )

// app




// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,path,path.join(__dirname,'public/img'))
//     },
//     filename:function(req,file,cb){
//         const name = Date.now()+'-'+file.originalname;
//         cb(null,name);
//     }
// })



// const upload = 

// app.use('/', routeforadmin);

routeforadmin.get('/', adminControllers.dashboard);
routeforadmin.get('/login', adminControllers.login);
routeforadmin.get('/register', adminControllers.register);
routeforadmin.get('/about', adminControllers.about);
routeforadmin.get('/qrcode', adminControllers.qrcode);
routeforadmin.get('/dashboard', adminControllers.dashboard);
// routeforadmin.get('/dashboard', adminControllers.dashboard);
routeforadmin.get('/userpage', adminControllers.userpage);
routeforadmin.get('/downloadpage', adminControllers.downloadpage);
routeforadmin.get('/contact', adminControllers.contact);
routeforadmin.get('/services', adminControllers.services);
routeforadmin.get('/photogallery', adminControllers.photogallery);

// routeforadmin.post('/register', adminControllers.insertUsers);


// admin_route.get("/blog-setup");
module.exports = routeforadmin;




// ---------------------------------------------------------