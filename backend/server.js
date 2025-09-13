// backend/server.js
import express from "express";
import cors from "cors";
import partnerRoutes from "./routes/partnerRoutes.js";
import "./initDb.js"; // run DB initialization



// Middlewares
const express = require('express');
const cors = require('cors');
const app = express();

// Allow your frontend origin
app.use(cors({
  origin: 'http://localhost:3000', // your React/Angular/Vue frontend
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

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
