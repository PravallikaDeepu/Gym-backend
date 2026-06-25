const express = require("express");
const router = express.Router();

const {gymLocationDetails} = require("../controllers/locationControllers");

router.post("/details", gymLocationDetails);

module.exports = router;