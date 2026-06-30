const LocationDetail = require("../models/locationDetails");

exports.gymLocationDetails = async (req, res) => {
  try {
    const {
      ownerId,
     addressLine1,
    addressLine2,
    landmark,
    city,
    state,
    pincode,
    country,
    googleMapsLink
    } = req.body;

    const user = new LocationDetail({
      ownerId,
   addressLine1,
    addressLine2,
    landmark,
    city,
    state,
    pincode,
    country,
    googleMapsLink
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