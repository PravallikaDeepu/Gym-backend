const Registration = require("../models/ownerRegistration");

exports.basicDetails = async (req, res) => {
  try {
    const {
      gymName,
      establishmentYear,
      gymType,
      gymDescription,
    } = req.body.message;

    const user = new Registration({
      gymName,
      establishmentYear,
      gymType,
      gymDescription,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Gym details saved successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};