const User = require("../models/users.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");



exports.login = (req,res,next)=>{
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    User.findOne({usuario:req.body.usuario, pass: hashedpass},(err,user)=>{
        let response={
            token:null
        }
        if(user!==null){
            response.token=jwt.sign({
               id:usuario._id,
               usuario:usuario.usuario 
            },"__recreat__");
        }
        res.json(response);
    });

}