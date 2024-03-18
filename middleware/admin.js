const {Admin,Course}=require("../db")
function adminMiddleware(req, res, next) {
   const {username,password} = req.headers;
     Admin.findOne(
        {username: username,password:password},
     ).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg: "admin doesnt exist"
            })
        }
     })
}

module.exports = adminMiddleware;