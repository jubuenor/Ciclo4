const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nombre:{type: String, required:true, max:60},
    categoria:{type: String, required:true, max: 60},
    restaurante:{type: String, required: true, max: 60},
    precio:{type: String, required: true, max: 16},
    descripcion:{type: String, required: true, max: 60}
    
});

module.exports = mongoose.model("product", ProductSchema);