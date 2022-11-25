const moongose = require("mongoose");
const Schema = moongose.Schema;

const RestaurantShema = new Schema({
    _id:{type: Number, required: true},
    nombre:{type: String, required:true, max:60},
})

module.exports = moongose.model("Restaurant",RestaurantShema)