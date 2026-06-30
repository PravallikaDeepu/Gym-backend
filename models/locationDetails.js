const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
   ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Registration",
      required: true,
    },
   addressLine1:String,
  addressLine2:String,
  landmark:String,
 city:String,
  state:String,
  pincode:Number,
  country:String,
  googleMapsLink:String
});

module.exports = mongoose.model("LocationDetail", locationSchema);