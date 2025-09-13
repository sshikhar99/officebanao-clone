// backend/routes/partnerRoutes.js
import express from "express";
import db from "../db.js";

const router = express.Router();

// POST → Insert a new partner
router.post("/", (req, res) => {
  const { partnerType, companyName, contactPerson, email, phone, services, location } = req.body;

  const sql = `INSERT INTO partners 
    (partnerType, companyName, contactPerson, email, phone, services, location) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.run(sql, [partnerType, companyName, contactPerson, email, phone, services, location], function (err) {
    if (err) {
      console.error("❌ DB Insert Error:", err.message);
      return res.status(500).json({ error: "Database insert failed" });
    }
    res.json({ status: "success", id: this.lastID });
  });
});

// GET → Fetch all partners
router.get("/", (req, res) => {
  const sql = "SELECT * FROM partners";
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("❌ DB Fetch Error:", err.message);
      return res.status(500).json({ error: "Database fetch failed" });
    }
    res.json({ status: "success", data: rows });
  });
});

export default router;
