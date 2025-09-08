const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);
  await Admin.create({ email: "admin@officebanao.in", password: hashedPassword });
  console.log("✅ Admin created");
  mongoose.disconnect();
});
