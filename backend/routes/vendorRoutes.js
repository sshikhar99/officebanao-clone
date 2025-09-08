const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Vendor Partner Schema
const VendorPartnerSchema = new mongoose.Schema({
  companyName: String,
  contactPerson: String,
  email: String,
  phone: String,
  services: String,
  location: String,
});

const VendorPartner = mongoose.model("VendorPartner", VendorPartnerSchema);

// POST - create new vendor partner
router.post("/", async (req, res) => {
  try {
    const newVendor = new VendorPartner(req.body);
    await newVendor.save();
    res.status(201).json({ message: "Vendor partner saved successfully" });
  } catch (err) {
    console.error("Error saving vendor partner:", err);
    res.status(500).json({ error: "Server error while saving vendor partner" });
  }
});

// GET - fetch all vendor partners
router.get("/", async (req, res) => {
  try {
    const vendors = await VendorPartner.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch vendor partners" });
  }
});

module.exports = router;
