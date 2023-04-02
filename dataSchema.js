const { default: mongoose } = require("mongoose")
var mangooose = require("mongoose")
var Schema = mongoose.Schema

var info = new Schema({
    First_name: String,
    Last_name: req.get("Last name"),
    DOB: req.get("DOB"),
    Address: req.get("Address"),
    Gender: req.get("Gender")
})

const Data = mongoose.model("Data", info)
module.exports = Data