const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
   addressLine1:String,
  addressLine2:String,
  landmark:String,
 city:String,
  state:String,
  pincode:Number,
  country:String
});

module.exports = mongoose.model("LocationDetail", locationSchema);