import express from "express";
import cors from "cors";
import partnerRoutes from "./routes/partnerRoutes.js";
import "./initDb.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/partners", partnerRoutes);

// Health check (optional)
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
