const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    usuario:{type: String, required:true, max: 60},
    pass:{type:String, required:true, max: 60}
});

module.exports = mongoose.model("user",UserSchema)