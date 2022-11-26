const moongose = require("mongoose");// Estamos creando la dependencia de mongo
const Schema = moongose.Schema;

const CategoryShema = new Schema({
    _id:{type: Number, required: true},
    id_restaurante:{type: String, required:true, max:60},
    nombre:{type: String, required:true, max:60},
})

module.exports = moongose.model("Category",CategoryShema)