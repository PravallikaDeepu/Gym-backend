const OperatingDetail = require("../models/operatingDetails");

exports.gymOperatingDetails = async (req, res) => {
  try {
    const {
     openingTime,
  closingTime,
  gymFacilities,
  gymEquipments,
  otherFacilities,
  otherEquipments
    } = req.body.message;

    const user = new OperatingDetail({
       openingTime,
  closingTime,
  gymFacilities,
  gymEquipments,
  otherFacilities,
  otherEquipments
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Operating Details saved successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};