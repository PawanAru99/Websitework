const express = require("express");
const app = express();

const path = require("path")

app.use(function(req, res, next) {
    res.status(404).send("Sorry, we can't find that!");
  });

  exports.dashboard = (req,res)=>{
    res.render('pages/dashboard' ,{
        title:"Washimzptps page"
    });
}
