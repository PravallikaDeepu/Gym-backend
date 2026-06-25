const express = require("express");
const router = express.Router();

const upload = require("../middleware/multer");
const { gymMembershipDetails } = require("../controllers/mediaMembershipControllers");

router.post(
  "/details",
  upload.fields([
    { name: "gymLogo", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
    { name: "gymPhotos", maxCount: 10 },
  ]),
  gymMembershipDetails
);

module.exports = router;