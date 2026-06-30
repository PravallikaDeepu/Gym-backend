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

    // Check if email already exists
    const existingEmail = await Registration.findOne({
      enteredEmail,
    });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        field: "enteredEmail",
        message: "Email already exists",
      });
    }

    // Check if mobile number already exists
    const existingMobile = await Registration.findOne({
      mobileNumber,
    });

    if (existingMobile) {
      return res.status(400).json({
        success: false,
        field: "mobileNumber",
        message: "Mobile number already exists",
      });
    }

    // Check password
    if (enteredPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        field: "confirmPassword",
        message: "Passwords do not match",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(enteredPassword, 10);

    // Save user
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
      ownerId: user._id,
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