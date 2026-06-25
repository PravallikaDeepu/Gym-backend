const Registration = require("../models/Registration");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobileNumber,
      enteredEmail,
      enteredPassword,
      confirmPassword,
      city,
      state,
    } = req.body.message;

    if (enteredPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const hashedPassword = await bcrypt.hash(enteredPassword, 10);

    const user = new Registration({
      firstName,
      lastName,
      mobileNumber,
      enteredEmail,
      enteredPassword: hashedPassword,
      city,
      state,
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};