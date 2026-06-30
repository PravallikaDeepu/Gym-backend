const Registration = require("../models/ownerRegistration");

exports.basicDetails = async (req, res) => {
  try {
    const {
      ownerId,
      gymName,
      establishmentYear,
      gymType,
      gymDescription,
    } = req.body; // 

    const gym = new Registration({
      ownerId, // 🔥 IMPORTANT RELATIONSHIP
      gymName,
      establishmentYear,
      gymType,
      gymDescription,
    });

    await gym.save();

    return res.status(201).json({
      success: true,
      message: "Gym details saved successfully",
    });

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};