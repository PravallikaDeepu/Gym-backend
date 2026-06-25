const express = require("express");
const router = express.Router();

const { loginOwner } = require("../controllers/loginControllers");

router.post("/login", loginOwner);

module.exports = router;