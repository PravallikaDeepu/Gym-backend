const mongoose = require("mongoose");

const basicGymSchema = new mongoose.Schema({
   gymName:String,
    establishmentYear:String,
    gymType:String,
    gymDescription:String
});

module.exports = mongoose.model("gymDetails", basicGymSchema);