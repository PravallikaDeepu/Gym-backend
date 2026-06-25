const express = require("express");
const router = express.Router();

const { basicDetails } = require("../controllers/basicGymControllers");

router.post("/details", basicDetails);

module.exports = router;