const express = require("express");

const {
  checkEmail,
  googleLogin,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/check-email", checkEmail);
router.post("/google-login", googleLogin);

module.exports = router;