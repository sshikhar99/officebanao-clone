// backend/server.js
import express from "express";
import cors from "cors";
import partnerRoutes from "./routes/partnerRoutes.js";
import "./initDb.js"; // run DB initialization

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/partners", partnerRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ OfficeBanao Backend API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
