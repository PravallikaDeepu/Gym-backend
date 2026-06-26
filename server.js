
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const registrationRoutes = require("./routes/authRoutes");
const gymRoutes = require("./routes/gymRoutes");
const operatingRoutes = require("./routes/operatingRoutes")
const locationRoutes = require("./routes/locationRoutes")
const mediaMembershipRoutes = require("./routes/mediaMembershipRoutes")
const ownerLoginRoutes = require("./routes/ownerLoginRoutes")
const otpRoutes = require("./routes/otpRoutes");
const userRoutes = require("./routes/userRoutes")
const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.set("view engine", "ejs");

app.use("/auth", registrationRoutes);
app.use("/gym", gymRoutes);
app.use("/operating", operatingRoutes)
app.use("/location", locationRoutes)
app.use("/media/membership",mediaMembershipRoutes)
app.use("/owner",ownerLoginRoutes)
app.use("/auth/otp", otpRoutes);
app.use("/auth",userRoutes)
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

console.log("MONGODB_URI:", process.env.MONGODB_URI);