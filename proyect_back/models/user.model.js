const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre:{type: String, required:true, max:60},
    apellido:{type: String, required:true, max: 60},
    telefono:{type: String, required: true, max: 60},
    email:{type: String, required: true, max: 60},
    contrasena:{type: String, required: true, max: 60}
    
});

module.exports = mongoose.model("user", UserSchema);