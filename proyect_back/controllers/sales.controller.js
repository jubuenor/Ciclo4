const Sales = require("../models/sales.model.js");

let response= {
    msg: "",
    succ: false
}

exports.create = (req,res)=>{
    let sale = new Sales({
        id_usuario: req.body.id_usuario,
        id_producto: req.body.id_producto,
        cantidad: req.body.cantidad,
        descripcion_cliente: req.body.descripcion_cliente,
        valor_total: req.body.valor_total,
        fecha: req.body.fecha
    });
    sale.save((err)=>{
        if(err){
            console.log(err),
            response.succ = false,
            response.msg = "Error al guardar venta"
            res.json(response)
            return;
        }
        response.succ=true,
        response.msg = "Venta guardada correctamente"
        res.json(response)

    });
}

exports.find = (req,res)=>{
    Sales.find((err,sale)=>{
        res.json(sale);
    });
}

exports.findOne = (req,res)=>{
    Sales.find({id_usuario: req.params.id},(err,sale)=>{
        res.json(sale);
    });
}

exports.update = (req,res)=>{
    let sale = ({
        id_usuario: req.body.id_usuario,
        id_producto: req.body.id_producto,
        cantidad: req.body.cantidad,
        descripcion_cliente: req.body.descripcion_cliente,
        valor_total: req.body.valor_total,
        fecha: req.body.fecha
    });
    Sales.findByIdAndUpdate(req.params.id,{$set: sale},
        (err)=>{
        if(err){
            console.log(err),
            response.succ = false,
            response.msg = "Error al guardar venta"
            res.json(response)
            return;
        }
        response.succ=true,
        response.msg = "Venta guardada correctamente"
        res.json(response)
    });
}

exports.remove = (req,res)=>{

//     let product = ({
//         nombre: req.body.nombre,
//         categoria: req.body.categoria,
//         restaurante: req.body.restaurante,
//         precio: req.body.precio,
//         descripcion: req.body.descripcion
//     });
// ,{$set: product}

    Sales.findByIdAndRemove(req.params.id,
        (err)=>{
        if(err){
            console.log(err),
            response.succ = false,
            response.msg = "Error al eliminar venta"
            res.json(response)
            return;
        }
        response.succ=true,
        response.msg = "Venta eliminado correctamente"
        res.json(response)
    });
}