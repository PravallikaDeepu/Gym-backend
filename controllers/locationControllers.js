const LocationDetail = require("../models/locationDetails");

exports.gymLocationDetails = async (req, res) => {
  try {
    const {
     addressLine1,
    addressLine2,
    landmark,
    city,
    state,
    pincode,
    country
    } = req.body.message;

    const user = new LocationDetail({
   addressLine1,
    addressLine2,
    landmark,
    city,
    state,
    pincode,
    country
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Location Details saved successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};