const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://medurimoses_db_user:360959@cluster0.4sc4dqb.mongodb.net/gymManagement?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("✅ Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error:");
    console.error(err);
    process.exit(1);
  });