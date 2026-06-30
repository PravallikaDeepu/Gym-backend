const Registration = require("../models/Registration");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginOwner = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Registration.findOne({
      enteredEmail: email,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not found. Please Signup",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.enteredPassword
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.enteredEmail,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};