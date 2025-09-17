// backend/server.js
import express from "express";
import cors from "cors";
import partnerRoutes from "./routes/partnerRoutes.js";
import "./initDb.js"; // run DB initialization

const app = express();

// Middlewares
// CORS: allow localhost, Vercel preview/prod domains, and any custom origins via env
const envAllowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const isOriginAllowed = (origin) => {
  if (!origin) return true; // mobile apps or curl

  // Exact allowlist
  const allowlist = new Set([
    'http://localhost:3000',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    'https://officebanao-clone.vercel.app',
    'https://www.officebanao-clone.vercel.app',
    ...envAllowedOrigins,
  ]);
  if (allowlist.has(origin)) return true;

  // Any localhost port (http)
  if (/^http:\/\/localhost:\d+$/.test(origin)) return true;
  if (/^http:\/\/127\.0\.0\.1:\d+$/.test(origin)) return true;

  // Any vercel.app subdomain (https)
  if (/^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin)) return true;

  // Custom apex with www
  if (/^https:\/\/www\.[a-z0-9-]+\.[a-z.]+$/i.test(origin)) return true;

  return false;
};

app.use(cors({
  origin: function (origin, callback) {
    if (isOriginAllowed(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
// Ensure Vary header so caches respect per-origin CORS
app.use((req, res, next) => {
  res.header('Vary', 'Origin');
  next();
});
app.use(express.json());

// Routes
app.use("/api/partners", partnerRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ OfficeBanao Backend API is running...");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Server running at 
    http://localhost:${PORT}`)
);
