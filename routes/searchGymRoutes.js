const express = require("express");
const router = express.Router();

const {
  searchGyms,
} = require("../controllers/searchGymControllers");

router.get("/search", searchGyms);

module.exports = router;