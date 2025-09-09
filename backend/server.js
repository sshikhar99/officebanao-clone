// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "data.json");
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "password123";
const JWT_SECRET = process.env.JWT_SECRET || "change_this_secret";

// ✅ Allow frontend from local + Vercel + mobile
app.use(cors({
  origin: [
    "http://localhost:3000",         // React dev
    "http://192.168.x.x:3000",       // Replace with your LAN IP
    /\.vercel\.app$/                 // Deployed frontend
  ],
  credentials: true
}));

app.use(express.json());

// -------------------- JSON Helpers --------------------
let writeQueue = Promise.resolve();
function enqueueWrite(fn) {
  writeQueue = writeQueue.then(fn).catch((err) => {
    console.error("Write queue error:", err);
  });
  return writeQueue;
}

async function readData() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(DATA_FILE, "[]", "utf8");
      return [];
    }
    throw err;
  }
}

async function writeData(arr) {
  await enqueueWrite(async () => {
    await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), "utf8");
  });
}

// -------------------- Routes --------------------

// Health check
app.get("/api/health", (req, res) => res.json({ status: "ok", time: new Date().toISOString() }));

// Login → JWT
app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "username and password required" });
  }
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "8h" });
    return res.json({ token });
  }
  return res.status(401).json({ error: "Invalid credentials" });
});

// JWT middleware
function authMiddleware(req, res, next) {
  const auth = req.headers["authorization"];
  if (!auth) return res.status(401).json({ error: "No authorization header" });
  const parts = auth.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ error: "Malformed token" });
  }
  const token = parts[1];
  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// Add vendor submission
app.post("/api/vendors", async (req, res) => {
  try {
    const body = req.body || {};
    if (!body.companyName || !body.contactPerson || !body.email) {
      return res.status(400).json({ error: "companyName, contactPerson, email required" });
    }

    const newItem = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...body
    };

    const arr = await readData();
    arr.push(newItem);
    await writeData(arr);

    console.log("✅ New vendor submission saved:", newItem.email);
    return res.status(201).json(newItem);
  } catch (err) {
    console.error("❌ Error saving submission:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// Get vendors (admin only)
app.get("/api/vendors", authMiddleware, async (req, res) => {
  try {
    const arr = await readData();
    return res.json(arr);
  } catch (err) {
    console.error("Error reading submissions:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// Delete specific vendor
app.delete("/api/vendors/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    let arr = await readData();
    const before = arr.length;
    arr = arr.filter((x) => x.id !== id);
    await writeData(arr);
    return res.json({ deleted: before - arr.length });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

// Clear all vendors
app.delete("/api/vendors", authMiddleware, async (req, res) => {
  try {
    await writeData([]);
    return res.json({ cleared: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

// -------------------- Start Server --------------------
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 JSON backend listening at http://0.0.0.0:${PORT}`);
  console.log(`🌍 Try health check: http://localhost:${PORT}/api/health`);
});
