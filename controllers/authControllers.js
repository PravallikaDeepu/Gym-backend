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
    console.log("Google Login Body:", req.body);

    const { googleId, name, email, picture } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email not received from Google",
      });
    }

    console.log("Finding user...");

    let user = await User.findOne({ email });

    console.log("User Found:", user);

    if (!user) {
      console.log("Creating user...");

      user = await User.create({
        googleId: googleId || "",
        name: name || "",
        email,
        picture: picture || "",
      });

      console.log("User Created:", user);
    }

    console.log("Generating Token...");

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("Success");

    return res.status(200).json({
      success: true,
      token,
      user,
    });

  } catch (error) {
    console.log("GOOGLE LOGIN ERROR");
    console.log(error);
    console.log(error.stack);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};