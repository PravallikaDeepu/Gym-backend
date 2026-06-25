const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Check Email
exports.checkEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.status(200).json({
        exists: true,
        token,
        user,
      });
    }

    return res.status(200).json({
      exists: false,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Google Login / Register
exports.googleLogin = async (req, res) => {
  try {
    const {
      googleId,
      name,
      email,
      picture,
    } = req.body;

    let user = await User.findOne({ email });

    // New User
    if (!user) {
      user = await User.create({
        googleId,
        name,
        email,
        picture,
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Google Login Failed",
    });
  }
};