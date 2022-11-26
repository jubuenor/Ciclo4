const restaurantModel = require("../models/restaurant.model")
const Restaurant = require("../models/restaurant.model")
let response = {
    msg: "",
    exito: false
}

exports.create = function (req,res) {
    let restaurant = new Restaurant({
        _id: req.body._id, /*segun tengo entendido mongo crea un id*/
        nombre: req.body.nombre
    })
    restaurant.save(function(err){
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el restaurante"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El restaurante se guardo correctamente"
        res.json(response)
    })
}

exports.find = (req,res)=>{
    Restaurant.find((err,restaurant)=>{
        res.json(restaurant);
    });
}


exports.findOne = function(req,res) {
    Restaurant.findOne({_id: req.params._id}, function(err, restaurant){
        res.json(restaurant)
    })
}

exports.update = function (req,res) {
    let restaurant = new Restaurant({
        _id: req.body._id,
        nombre: req.body.nombre
    })
    Restaurant.findByIdAndUpdate(req.params.id,{$set: restaurant},function(err){
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

exports.remove = function(req,res){  
    
    Restaurant.findByIdAndRemove({_id: req.params._id},function(err){
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el restaurante"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El restaurante se elimino correctamente"
        res.json(response)
    })
}