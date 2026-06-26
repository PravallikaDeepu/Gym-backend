const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
    });

    console.log("✅ MongoDB Connected");
    console.log("Host:", conn.connection.host);

  } catch (err) {
    console.error("❌ MongoDB Connection Failed:");
    console.error(err.message);

    process.exit(1); // IMPORTANT
  }
};

module.exports = connectDB;