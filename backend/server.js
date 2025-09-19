import express from "express";
import cors from "cors";
import partnerRoutes from "./routes/partnerRoutes.js";
import "./initDb.js";

const app = express();

// CORS
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/partners", partnerRoutes);

// ✅ Serve React build
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});


// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
