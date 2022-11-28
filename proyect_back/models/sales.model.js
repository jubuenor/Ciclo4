const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalesSchema = new Schema({
    id_usuario:{type: String, required:true, max:60},
    id_producto:{type: String, required:true, max:60},
    cantidad:{type: String, required:true, max: 60},
    descripcion_cliente:{type: String, required: false, max: 60},
    valor_total:{type: String, required: true,max: 60},
    fecha:{type: String, required: true, max: 60}
});

module.exports = mongoose.model("sales", SalesSchema);