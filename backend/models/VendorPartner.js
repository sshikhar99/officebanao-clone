const mongoose = require("mongoose");

const VendorPartnerSchema = new mongoose.Schema({
  companyName: String,
  contactPerson: String,
  email: String,
  phone: String,
  services: String,
  location: String,
}, { timestamps: true });

module.exports = mongoose.model("VendorPartner", VendorPartnerSchema);
