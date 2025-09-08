const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors({
  origin: "*", // you can restrict to "http://192.168.x.x:3000" if needed
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Import Routes
const adminRoutes = require("./routes/adminRoutes");
const partnerRoutes = require("./routes/partnerRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

// Use Routes
app.use("/api/admins", adminRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/vendors", vendorRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
