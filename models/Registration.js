const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },

  enteredEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  enteredPassword: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
  },

  dateofBirth: {
    type: String,
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.Registration ||
  mongoose.model("Registration", registrationSchema);