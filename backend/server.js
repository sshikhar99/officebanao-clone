// backend/server.js
import express from "express";
import cors from "cors";
import partnerRoutes from "./routes/partnerRoutes.js";
import "./initDb.js"; // run DB initialization

const app = express();

// --- CORS Middleware ---
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://officebanao-clone.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || /^http:\/\/localhost:\d+$/.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// --- API Routes ---
app.use("/api/partners", partnerRoutes);

// --- Default Route ---
app.get("/", (req, res) => {
  res.send("✅ OfficeBanao Backend API is running...");
});

// --- Start Server ---
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
