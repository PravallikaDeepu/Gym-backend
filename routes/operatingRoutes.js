const express = require("express");
const router = express.Router();

const {gymOperatingDetails} = require("../controllers/operatingControllers");

router.post("/details", gymOperatingDetails);

module.exports = router;