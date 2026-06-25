const Registration = require("../models/registration");
const bcrypt = require("bcrypt");

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

    return res.status(200).json({
      success: true,
      message: "Login Successful",
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