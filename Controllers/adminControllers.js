const express = require("express");
const app = express();

const path = require("path")
const BlogSetting = require('../models/Settingblog');
const Usersdata = require('../models/Userprofile');
const bcrypt = require('bcrypt');



// const insertUsers = async(req,res)=>{
//     try{

//         const user = new Usersdata({
//             Shalarthid:req.body.Shalarthid,
//             email:req.body.email,
//             mobile:req.body.mobile,
//             password:req.body.password,
//         });
//         const result = await user.save();
//         res.send("Registration has been succesful."+result);

//     }catch (error){
//         res.send(error.message);
//     }

// }

app.use(function(req, res, next) {
    res.status(404).send("Sorry, we can't find that!");
  });


exports.register = (req,res)=>{
    res.render('pages/register' ,{
        title:"Registration page"
    });
}


exports.services = (req,res)=>{
    res.render('pages/services' ,{
        title:"Services page"
    });
}



exports.dashboard = (req,res)=>{
    res.render('pages/dashboard' ,{
        title:"Washimzptps page"
    });
}

exports.login = (req,res)=>{
    res.render('pages/login' ,{
        title:"Login page"
    });
}

exports.qrcode = (req,res)=>{
    res.render('pages/qrcode' ,{
        title:"qrcode page"
    });
}

exports.photogallery = (req,res)=>{
    res.render('pages/photogallery',{
        title: "PhotoGallery"

    })
}

exports.contact = (req,res)=>{
    res.render('pages/contact' ,{
        title:"Contact page"
    });
}

exports.downloadpage = (req,res)=>{
    res.render('pages/downloadpage' ,{
       title: "Download page"
    });
}


const downloads = [
    { name: 'वार्षिक अहवाल', link: './img/patsantha ahawal 2022-23.pdf' },
    // Add more downloads here...
];

exports.downloadpage = (req, res) => {
    res.render(path.join('pages', 'downloadpage'), { 
        downloads,
        title: "Download page"
    });
};

exports.userpage = (req,res)=>{
    res.render('pages/Userpage' ,{
        title:"userpage page"
    });
}

exports.about = (req,res)=>{
    res.render('pages/about' ,{
        title:"about page"
    });
}


// const user = {
//     insertUsers,
//     register,
//     dashboard,
//     login,
//     qrcode,
//     userpage,
//     about
// };



// module.exports = user;