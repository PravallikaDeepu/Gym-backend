const mongoose = require("mongoose");

const gymDetailsSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Registration",
    required: true,
  },

  gymName: String,
  establishmentYear: String,
  gymType: String,
  gymDescription: String,
});

module.exports = mongoose.model("GymDetails", gymDetailsSchema);