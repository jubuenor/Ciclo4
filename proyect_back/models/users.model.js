const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    usuario:{type: String, required:true, max: 60},
    pass:{type:String, required:true, max: 60},
    nombre:{type:String, required:true, max: 60},
    apellido:{type:String, required:true, max: 60},
    email:{type:String, required:true, max: 60},
    saldo:{type:Number, required:true},
});

module.exports = mongoose.model("user",UserSchema)