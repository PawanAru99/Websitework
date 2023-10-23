
const BlogSetting = require("../models/Settingblog");


const isBlog = async (req,res,next) => {
    try{
        const blogSetting = await BlogSetting.find({});

        if (blogSetting.length ==0  && req.originalUrl != "/login"){
            res.redirect('/login');
        }
        else{
            next();
        }
    }
    catch(error){
        console.log(error.message);

    }
}

module.exports = {
    isBlog
};