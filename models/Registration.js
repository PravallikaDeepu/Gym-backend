const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobileNumber: Number,
  enteredEmail: String,
  enteredPassword: String,
  gender: String,
  dateofBirth: String,
  city: String,
  state: String
});

module.exports =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);