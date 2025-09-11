const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    services: { type: String },
    location: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", VendorSchema);
