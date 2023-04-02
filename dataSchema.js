const { default: mongoose } = require("mongoose")
var mangooose = require("mongoose")
var Schema = mongoose.Schema

var info = new Schema({
    First_name: String,
    Last_name: String,
    DOB: String,
    Address: String,
    Gender: String
})

const Data = mongoose.model("Data", info)
module.exports = Data