const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const otpStore = require("../otpServer");


exports.sendOTP = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { email } = req.body;

    console.log("EMAIL:", email);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log("OTP:", otp);

    return res.status(200).json({
      success: true,
      message: "OTP generated",
    });

  } catch (err) {
    console.log("ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};





exports.verifyOTP = async (req, res) => {

  try {

    const { email, otp } = req.body;


    const savedOTP = otpStore.get(email);



    if (savedOTP !== otp) {

      return res.status(400).json({

        success: false,

        message: "Invalid OTP"

      });

    }



    otpStore.delete(email);



    const token = jwt.sign(

      { email },

      process.env.JWT_SECRET,

      { expiresIn:"7d" }

    );



    return res.status(200).json({

      success:true,

      token,

      message:"Login Successful"

    });



  } catch(err){

    console.log(err);


    return res.status(500).json({

      success:false,

      message:"Server Error"

    });

  }

};