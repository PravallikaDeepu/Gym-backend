const MediaMembershipDetail = require("../models/mediaMembershipDetails");

exports.gymMembershipDetails = async (req, res) => {
  try {
    const membershipPlans = JSON.parse(req.body.membershipPlans);

    const gymLogo = req.files?.gymLogo?.[0]?.filename || null;
    const coverImage = req.files?.coverImage?.[0]?.filename || null;

    const gymPhotos =
      req.files?.gymPhotos?.map((file) => file.filename) || [];

    const mediaData = await MediaMembershipDetail.create({
      membershipPlans,
      gymLogo,
      coverImage,
      gymPhotos,
    });

    return res.status(200).json({
      success: true,
      message: "Saved Successfully",
      data: mediaData,
    });

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};