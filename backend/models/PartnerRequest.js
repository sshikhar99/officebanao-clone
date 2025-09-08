const mongoose = require("mongoose");

const PartnerRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("PartnerRequest", PartnerRequestSchema);
