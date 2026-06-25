const mongoose = require("mongoose");

const membershipPlanSchema = new mongoose.Schema({
  planName: String,
  duration: String,
  price: Number,
  description: String,
  status: String,
});

const mediaMembershipSchema = new mongoose.Schema({
  membershipPlans: [membershipPlanSchema],
  gymLogo: String,
  coverImage: String,
  gymPhotos: [String],
});

module.exports = mongoose.model(
  "MediaMembershipDetail",
  mediaMembershipSchema
);