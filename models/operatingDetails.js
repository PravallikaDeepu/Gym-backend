const mongoose = require("mongoose");

const operatingSchema = new mongoose.Schema({
   openingTime:String,
  closingTime:String,
  gymFacilities:[String],
  gymEquipments:[String],
  otherFacilities:[String],
  otherEquipments:[String]
});

module.exports = mongoose.model("OperatingDetail", operatingSchema);