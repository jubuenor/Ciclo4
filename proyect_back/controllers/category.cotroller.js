const categoryModel = require("../models/category.model")
const Category = require("../models/category.model")
let response = {
    msg: "",
    exito: false
}

exports.create = function (req,res) {
    let category = new Category({
        _id: req.body._id, /*segun tengo entendido mongo crea un id*/
        id_restaurante: req.body.id_restaurante,
        nombre: req.body.nombre
    })
    category.save(function(err){
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar la categoria"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "la categoria se guardo correctamente"
        res.json(response)
    })
}

exports.find = (req,res)=>{
    Category.find((err,category)=>{
        res.json(category);
    });
}

exports.findOne = function(req,res) {
    Category.findOne({_id: req.params.id}, function(err, category){
        res.json(category)
    })
}

exports.update = function (req,res) {
    let category = new Category({
        _id: req.body._id,
        id_restaurante: req.body.id_restaurante,
        nombre: req.body.nombre
    })
    Category.findByIdAndUpdate(req.params.id,{$set: category},function(err){
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar la categoria"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "la categoria se guardo correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){   //Elimina un empleado
    
    Category.findByIdAndRemove({_id: req.params.id},function(err){
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar la categoria"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "la categoria se elimino correctamente"
        res.json(response)
    })
}