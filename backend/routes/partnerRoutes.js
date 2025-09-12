// backend/routes/partnerRoutes.js
import express from "express";
import db from "../config/db.js";

const router = express.Router();

// ✅ Save partner (Vendor/Designer)
router.post("/", (req, res) => {
  try {
    const { partnerType, ...rest } = req.body;

    if (!partnerType) {
      return res.status(400).json({ message: "partnerType is required" });
    }

    const data = JSON.stringify(rest);

    console.log("📥 Incoming data:", req.body);

    db.run(
      "INSERT INTO partners (partnerType, data) VALUES (?, ?)",
      [partnerType, data],
      function (err) {
        if (err) {
          console.error("❌ Error inserting partner:", err.message);
          return res.status(500).json({
            message: "Database insert failed",
            error: err.message,
          });
        }

        console.log("✅ Partner inserted with ID:", this.lastID);

        return res.status(201).json({
          id: this.lastID,
          partnerType,
          ...rest,
          createdAt: new Date(),
        });
      }
    );
  } catch (err) {
    console.error("❌ Unexpected error:", err.message);
    return res.status(500).json({ message: "Unexpected server error" });
  }
});

// ✅ Get all partners
router.get("/", (req, res) => {
  db.all("SELECT * FROM partners", [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching partners:", err.message);
      return res.status(500).json({
        message: "Database fetch failed",
        error: err.message,
      });
    }

    const result = rows.map((row) => {
      try {
        return {
          id: row.id,
          partnerType: row.partnerType,
          ...JSON.parse(row.data || "{}"), // safely parse JSON
          createdAt: row.createdAt,
        };
      } catch (parseErr) {
        console.error("⚠️ Error parsing row.data:", parseErr.message);
        return {
          id: row.id,
          partnerType: row.partnerType,
          createdAt: row.createdAt,
        };
      }
    });

    res.json(result);
  });
});

export default router;
