const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/registrationControllers");

router.post("/register", registerUser);

module.exports = router;