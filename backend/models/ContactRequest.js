const mongoose = require("mongoose");

const ContactRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("ContactRequest", ContactRequestSchema);
