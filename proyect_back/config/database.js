const mongoose = require("mongoose");

const host="mongodb://localhost:27017/hr";

exports.mongoConnect = ()=>{
    mongoose.connect(host);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"MongoDB connection error"));
    
}