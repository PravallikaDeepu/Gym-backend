const mongoose = require("mongoose");
console.log("Inside db.js:", process.env.MONGODB_URI);
const connectDB = async () => {
  try {
    console.log("Inside db.js:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI,{
      family: 4
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;