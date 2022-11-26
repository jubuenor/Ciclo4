const User = require("../models/users.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

let response= {
    msg: "",
    succ: false
}

exports.login = (req,res,next)=>{
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    User.findOne({usuario:req.body.usuario, pass: hashedpass},(err,user)=>{
        console.log(err);
        let response={
            token:null
        }
        if(user!==null){
            response.token=jwt.sign({
               id:user._id,
               user:user.user
            },"__recret__",
            {expiresIn:"12h"});
        }
        res.json(response);
    });
    

}

exports.create = (req,res)=>{
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    let user = new User({
        usuario:req.body.usuario,
        pass:hashedpass,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        saldo: req.body.saldo,
    });
    user.save((err)=>{
        if(err){
            console.log(err),
            response.succ = false,
            response.msg = `Error al guardar usuario: ${err}`
            res.json(response)
            return;
        }
        response.succ=true,
        response.msg = "usuario guardado correctamente"
        res.json(response)
    });
}

exports.remove = (req,res)=>{
        User.findByIdAndRemove(req.params.id,
            (err)=>{
            if(err){
                console.log(err),
                response.succ = false,
                response.msg = "Error al eliminar usuario"
                res.json(response)
                return;
            }
            response.succ=true,
            response.msg = "Usuario eliminado correctamente"
            res.json(response)
        });
}

exports.findOne = (req,res)=>{
    User.findOne({_id: req.params.id},(err,product)=>{
        res.json(product);
    });
}


exports.update = (req,res)=>{
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    let user = ({
        usuario:req.body.usuario,
        pass:hashedpass,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        saldo: req.body.saldo,
    });
    User.findByIdAndUpdate(req.params.id,{$set: user},
        (err)=>{
        if(err){
            console.log(err),
            response.succ = false,
            response.msg = "Error al guardar usuario"
            res.json(response)
            return;
        }
        response.succ=true,
        response.msg = "Usuario guardado correctamente"
        res.json(response)
    });
}