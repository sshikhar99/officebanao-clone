const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json()); // ✅ so Postman JSON body works
app.use(cors());

// Import Routes
const adminRoutes = require("./routes/adminRoutes");
const partnerRoutes = require("./routes/partnerRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

// Use Routes
app.use("/api/admins", adminRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/vendors", vendorRoutes);

// MongoDB connection (example)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
