const Product = require("../models/products.model.js");

let response= {
    msg: "",
    succ: false
}

exports.create = (req,res)=>{
    let product = new Product({
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        restaurante: req.body.restaurante,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    });
    product.save((err)=>{
        if(err){
            console.log(err),
            response.succ = false,
            response.msg = "Error al guardar producto"
            res.json(response)
            return;
        }
        response.succ=true,
        response.msg = "Producto guardado correctamente"
        res.json(response)

    });
}

exports.find = (req,res)=>{
    Product.find((err,product)=>{
        res.json(product);
    });
}

exports.findOne = (req,res)=>{
    Product.findOne({_id: req.params.id},(err,product)=>{
        res.json(product);
    });
}

exports.update = (req,res)=>{
    let product = ({
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        restaurante: req.body.restaurante,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    });
    Product.findByIdAndUpdate(req.params.id,{$set: product},
        (err)=>{
        if(err){
            console.log(err),
            response.succ = false,
            response.msg = "Error al guardar producto"
            res.json(response)
            return;
        }
        response.succ=true,
        response.msg = "Producto guardado correctamente"
        res.json(response)
    });
}

exports.remove = (req,res)=>{
    let product = ({
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        restaurante: req.body.restaurante,
        precio: req.body.precio,
        descripcion: req.body.descripcion
    });
    Product.findByIdAndRemove(req.params.id,{$set: product},
        (err)=>{
        if(err){
            console.log(err),
            response.succ = false,
            response.msg = "Error al eliminar producto"
            res.json(response)
            return;
        }
        response.succ=true,
        response.msg = "Producto eliminado correctamente"
        res.json(response)
    });
}