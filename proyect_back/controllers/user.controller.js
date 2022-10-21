const User = require("../models/user.model.js");

let response= {
    msg: "",
    succ: false
}

exports.create = (req,res)=>{
    let user = new User({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        contrasena: req.body.contrasena

    });
    user.save((err)=>{
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

exports.find = (req,res)=>{
    User.find((err,user)=>{
        res.json(user);
    });
}

exports.findOne = (req,res)=>{
    User.findOne({_id: req.params.id},(err,user)=>{
        res.json(user);
    });
}

exports.update = (req,res)=>{
    let user = ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        contrasena: req.body.contrasena

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

exports.remove = (req,res)=>{
    let user = ({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        contrasena: req.body.contrasena

    });
    User.findByIdAndRemove(req.params.id,{$set: user},
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