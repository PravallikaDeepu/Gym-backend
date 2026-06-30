const GymDetails = require("../models/ownerRegistration");
const LocationDetails = require("../models/locationDetails");
const OperatingDetails = require("../models/operatingDetails");
const MediaMembershipDetails = require("../models/mediaMembershipDetails");

exports.searchGyms = async (req, res) => {
  try {
    const { search } = req.query;
  
    if (!search) {
      return res.status(400).json({
        success: false,
        message: "Please enter a gym name or location.",
      });
    }

    // Search by gym name
    const gyms = await GymDetails.find({
      gymName: { $regex: search, $options: "i" },
    });

    // Search by city/address
    const locations = await LocationDetails.find({
      $or: [
        { city: { $regex: search, $options: "i" } },
        { state: { $regex: search, $options: "i" } },
        { addressLine1: { $regex: search, $options: "i" } },
        { addressLine2: { $regex: search, $options: "i" } },
      ],
    });

    // Collect ownerIds from both collections
   const ownerIds = [
  ...gyms
    .filter((gym) => gym.ownerId)
    .map((gym) => gym.ownerId.toString()),

  ...locations
    .filter((loc) => loc.ownerId)
    .map((loc) => loc.ownerId.toString()),
];

  console.log("Gyms:", gyms);
console.log("Locations:", locations);
    const uniqueOwnerIds = [...new Set(ownerIds)];

    if (uniqueOwnerIds.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No gyms found.",
      });
    }

    // Fetch complete details
    const gymDetails = await GymDetails.find({
      ownerId: { $in: uniqueOwnerIds },
    });

    const operatingDetails = await OperatingDetails.find({
      ownerId: { $in: uniqueOwnerIds },
    });

    const locationDetails = await LocationDetails.find({
      ownerId: { $in: uniqueOwnerIds },
    });

    const mediaMembershipDetails = await MediaMembershipDetails.find({
      ownerId: { $in: uniqueOwnerIds },
    });

    return res.status(200).json({
      success: true,
      totalGyms: uniqueOwnerIds.length,
      gymDetails,
      operatingDetails,
      locationDetails,
      mediaMembershipDetails,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};