const mongoose = require("mongoose");

const operatingSchema = new mongoose.Schema({
    ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Registration",
    required: true,
  },
   openingTime:String,
  closingTime:String,
  gymFacilities:[String],
  gymEquipments:[String],
  otherFacilities:[String],
  otherEquipments:[String]
});

module.exports = mongoose.model("OperatingDetail", operatingSchema);